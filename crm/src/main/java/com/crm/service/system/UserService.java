package com.crm.service.system;


import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.model.system.User;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;

public interface UserService {

	/**
	 * 重置密码
	 * @param id
	 */
	Ret resetPwd(Long id);

	/**
	 * 修改用户的密码
	 * @param userid
	 * @param newPwd
	 */
	void modifyPassword(long userid, String newPwd);

	/**
	 * 列表分页查询
	 */
	DataGrid<User> selectPage(Map<String, String> params, Page<User> page);

	User selectById(Long id);

	Ret add(User user, Long[] roles);

	Ret update(User user, Long[] roles);

	List<User> selectList();
}
