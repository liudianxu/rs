package com.common;

import com.crm.model.system.Permission;
import com.crm.model.system.Role;
import com.crm.model.system.RolePermission;
import com.crm.model.system.Session;
import com.crm.model.system.SysParameter;
import com.crm.model.system.User;
import com.crm.model.system.UserRole;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;

public class MappingKit {

	public static void mapping(ActiveRecordPlugin arp) {
		arp.addMapping("sys_session", Session.class);
		arp.addMapping("sys_config", SysParameter.class);
		arp.addMapping("sys_user", User.class);
		arp.addMapping("sys_role", Role.class);
		arp.addMapping("sys_permission", Permission.class);
		arp.addMapping("sys_role_permission", RolePermission.class);
		arp.addMapping("sys_user_role", UserRole.class);
	}
	
}
