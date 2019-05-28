package com.crm.service.system;


import java.util.List;
import java.util.Map;

import com.crm.model.system.Permission;
import com.jfinal.kit.Ret;
import com.crm.component.AuthTree;
import com.crm.component.TreeGrid;

public interface PermissionService {

	/**
	 * 权限树列表
	 * @param params 
	 * @return
	 */
	TreeGrid<Permission> selectPermissionTree(Map<String, String> params);
	
	Ret add(Permission permission);

	boolean delete(Long id);

	boolean existChildren(Long id);

	AuthTree<Permission> selectAuthTree(Long roleId);

	int deletePermissionByRoleId(Long long1);

	List<Permission> findByUserId(Long long1, int i);

	List<Permission> findChildren(Long id);

	Ret update(Permission permission);
	
}
