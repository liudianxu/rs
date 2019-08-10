package com.crm.service.system;

import java.util.List;

import com.crm.component.DataGrid;
import com.crm.model.system.Role;
import com.jfinal.kit.Kv;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;

public interface RoleService {

	/**
	 * 根据userId获取相应角色
	 * @param userId
	 * @return
	 */
	List<Role> selectRolesByUserId(Long userId);

	/**
	 * 保存角色授权
	 * @param roleId
	 * @param permissions
	 */
	void saveAuthorize(Long roleId, String[] permissions);
	
	void saveCustomerAuthorize(Long roleId, String[] customers);

	DataGrid<Role> selectByPage(Page<Role> page, Kv params);

	Role selectById(Long id);

	List<Role> selectList(Kv params);

	Ret add(Role role);

	Ret update(Role role);
}
