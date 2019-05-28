package com.common;

import com.crm.service.system.AdminAuthService;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.OperateLogService;
import com.crm.service.system.PermissionService;
import com.crm.service.system.RoleService;
import com.crm.service.system.UserService;
import com.crm.service.system.impl.AdminAuthServiceImpl;
import com.crm.service.system.impl.AdminLoginServiceImpl;
import com.crm.service.system.impl.OperateLogServiceImpl;
import com.crm.service.system.impl.PermissionServiceImpl;
import com.crm.service.system.impl.RoleServiceImpl;
import com.crm.service.system.impl.UserServiceImpl;
import com.jfinal.aop.Aop;


public class AopKit {

	public static void mapping() {
		Aop.addMapping(OperateLogService.class, OperateLogServiceImpl.class);
		Aop.addMapping(AdminAuthService.class, AdminAuthServiceImpl.class);
		Aop.addMapping(AdminLoginService.class, AdminLoginServiceImpl.class);
		Aop.addMapping(PermissionService.class,PermissionServiceImpl.class);
		Aop.addMapping(RoleService.class, RoleServiceImpl.class);
		Aop.addMapping(UserService.class, UserServiceImpl.class);
		
	}
}
