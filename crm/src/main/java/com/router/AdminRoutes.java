package com.router;

import com.crm.controller.admin.AdminController;
import com.crm.controller.admin.AdminLoginController;
import com.crm.controller.admin.system.PermissionController;
import com.crm.controller.admin.system.RoleController;
import com.crm.controller.admin.system.UserController;
import com.crm.interceptor.AdminAuthInterceptor;
import com.crm.interceptor.AdminLoginSessionInterceptor;
import com.jfinal.config.Routes;

//import com.tsdegree.controller.admin.AdminController;

public class AdminRoutes extends Routes {

	@Override
	public void config() {
		setBaseViewPath("views/admin");
		
		addInterceptor(new AdminLoginSessionInterceptor());
		addInterceptor(new AdminAuthInterceptor());

		add("admin", AdminController.class, "/");
		add("admin/login", AdminLoginController.class, "/");
		add("admin/system/user", UserController.class, "/system/user");
		add("admin/system/role",RoleController.class, "/system/role");
		add("admin/system/permission", PermissionController.class, "/system/permission");
	}

}
