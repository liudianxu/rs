package com.crm.interceptor;

import java.util.ArrayList;
import java.util.List;

import com.crm.model.system.Permission;
import com.crm.model.system.User;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.PermissionService;
import com.jfinal.aop.Inject;
import com.jfinal.aop.Interceptor;
import com.jfinal.aop.Invocation;
import com.jfinal.core.Controller;
import com.util.Constant;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.http.HttpUtil;

public class AdminLoginSessionInterceptor implements Interceptor {

	@Inject
	private AdminLoginService service;
	@Inject
	private PermissionService permissionService;
	@Override
	public void intercept(Invocation inv) {
		User admin = null;
		Controller c = inv.getController();
		String sessionId = c.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		if (sessionId != null) {
			admin = service.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(c.getRequest());
				admin = service.loginWithSessionId(sessionId, loginIp);
			}
			if (admin != null) {
				// 用户登录账号
				c.setAttr(Constant.CACHE_NAME_LOGIN_ADMIN, admin);
				
				//功能权限
				List<Permission> permissions = permissionService.findByUserId(admin.getLong("id"),1);
				for (Permission permission : permissions) {
					permission.setList(permissionService.findChildren(permission.getLong("id")));
				}
				c.setAttr("permissions", permissions);
				//节点权限
				List<Permission> nodePermission = permissionService.findByUserId(admin.getLong("id"),0);
				List<String> nodeUrl=new ArrayList<>();
				if(CollectionUtil.isNotEmpty(nodePermission)) {
				for (Permission permission : nodePermission) {
					if(permission.get("url")!=null) {
					nodeUrl.add((String) permission.get("url"));
					}
				}
				c.setAttr("nodeUrl", nodeUrl);
				}
			} else {
				c.removeCookie(Constant.COOKIE_SESSION_ID_NAME); // cookie 登录未成功，证明该 cookie 已经没有用处，删之
			}
		}

		inv.invoke();
	}

}
