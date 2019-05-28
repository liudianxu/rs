package com.crm.service.system;

import com.crm.model.system.User;
import com.jfinal.kit.Ret;

public interface AdminLoginService {

	Ret login(String userName, String password, boolean keepLogin, String loginIp);
	
	User getLoginAdminWithSessionId(String sessionId);
	
	/**
	 * 通过 sessionId 获取登录用户信息
	 * sessoin表结构：session(id, admin_id, expire_at)
	 *
	 * 1：先从缓存里面取，如果取到则返回该值，如果没取到则从数据库里面取
	 * 2：在数据库里面取，如果取到了，则检测是否已过期，如果过期则清除记录，
	 *     如果没过期则先放缓存一份，然后再返回
	 */
	User loginWithSessionId(String sessionId, String loginIp);
	
	/**
	 * 退出登录
	 */
	void logout(String sessionId);
}
