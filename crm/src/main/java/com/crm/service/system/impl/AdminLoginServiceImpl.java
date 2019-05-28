package com.crm.service.system.impl;

import java.util.List;

import com.crm.model.system.Permission;
import com.crm.model.system.Session;
import com.crm.model.system.User;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.PermissionService;
import com.jfinal.aop.Inject;
import com.jfinal.kit.HashKit;
import com.jfinal.kit.Ret;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.ehcache.CacheKit;
import com.util.Constant;

import cn.hutool.core.date.DateUtil;

public class AdminLoginServiceImpl implements AdminLoginService {
	@Inject
	private PermissionService permissionService;
	@Override
	public Ret login(String userName, String password, boolean keepLogin, String loginIp) {
		userName = userName.toLowerCase().trim();
		password = password.trim();
		User admin = User.dao.findFirst("select * from sys_user where username=? limit 1", userName);
		if (admin == null) {
			return Ret.fail("msg", "用户名或密码不正确");
		}
		if (admin.isStatusLock()) {
			return Ret.fail("msg", "账号已被锁定");
		}

		String salt = admin.getStr("salt");
		String hashedPass = HashKit.sha256(salt + password);
	    // 未通过密码验证
		if (admin.getStr("password").equals(hashedPass) == false) {
			return Ret.fail("msg", "用户名或密码不正确");
		}

		// 如果用户勾选保持登录，暂定过期时间为 30天，否则为 120 分钟，单位为秒
		long liveSeconds =  keepLogin ? 30 * 24 * 60 * 60 : 120 * 60;
		// 传递给控制层的 cookie
		int maxAgeInSeconds = (int)(keepLogin ? liveSeconds : -1);
		// expireAt 用于设置 session 的过期时间点，需要转换成毫秒
		long expireAt = System.currentTimeMillis() + (liveSeconds * 1000);
		// 保存登录 session 到数据库
		Session session = new Session();
		String sessionId = StrKit.getRandomUUID();
		session.set("id", sessionId)
			.set("admin_id", admin.getLong("id"))
			.set("expire_at", expireAt);
		if (!session.save()) {
			return Ret.fail("msg", "保存 session 到数据库失败，请联系管理员");
		}

		admin.removeSensitiveInfo();                                 // 移除 password 与 salt 属性值
		admin.put("sessionId", sessionId);                          // 保存一份 sessionId 到 loginAccount 备用
		CacheKit.put(Constant.CACHE_NAME_LOGIN_ADMIN, sessionId, admin);

		createLoginLog(admin.getLong("id"), loginIp);
		
		return Ret.ok(Constant.COOKIE_SESSION_ID_NAME, sessionId)
						.set(Constant.CACHE_NAME_LOGIN_ADMIN, admin)
						.set("maxAgeInSeconds", maxAgeInSeconds);   // 用于设置 cookie 的最大存活时间
	}
	
	/**
	 * 创建登录日志
	 */
	private void createLoginLog(Long adminId, String loginIp) {
		Record loginLog = new Record().set("admin_id", adminId).set("ip", loginIp).set("login_at", DateUtil.now());
		Db.save("sys_log_login", loginLog);
	}

	@Override
	public User getLoginAdminWithSessionId(String sessionId) {
		return CacheKit.get(Constant.CACHE_NAME_LOGIN_ADMIN, sessionId);
	}

	@Override
	public User loginWithSessionId(String sessionId, String loginIp) {
		Session session = Session.dao.findById(sessionId);
		if (session == null) {      // session 不存在
			return null;
		}
		if (session.isExpired()) {  // session 已过期
			session.delete();		// 被动式删除过期数据，此外还需要定时线程来主动清除过期数据
			return null;
		}

		User admin = User.dao.findById(session.getLong("admin_id"));
		// 找到 admin 并且 是正常状态 才允许登录
		if (admin != null && admin.isStatusOk()) {
			admin.removeSensitiveInfo();                                 // 移除 password 与 salt 属性值
			admin.put("sessionId", sessionId);                          // 保存一份 sessionId 到 loginAccount 备用
			CacheKit.put(Constant.CACHE_NAME_LOGIN_ADMIN, sessionId, admin);

			createLoginLog(admin.getLong("id"), loginIp);
			return admin;
		}
		return null;
	}

	@Override
	public void logout(String sessionId) {
		if (sessionId != null) {
			CacheKit.remove(Constant.CACHE_NAME_LOGIN_ADMIN, sessionId);
			Session.dao.deleteById(sessionId);
		}
	}

}
