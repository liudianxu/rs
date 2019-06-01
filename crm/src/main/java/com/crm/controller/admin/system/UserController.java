package com.crm.controller.admin.system;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.digest.DigestUtils;

import com.crm.controller.admin.BaseController;
import com.crm.model.system.Role;
import com.crm.model.system.User;
import com.crm.service.system.RoleService;
import com.crm.service.system.UserService;
import com.jfinal.aop.Inject;
import com.jfinal.kit.HashKit;
import com.jfinal.kit.Kv;
import com.jfinal.kit.StrKit;

import cn.hutool.core.collection.CollectionUtil;

public class UserController extends BaseController<User> {
	
	@Inject
	private UserService service;
	@Inject
	private RoleService roleService;

	/**
	 * 列表分页查询
	 */
	public void selectByPage() {
		Map<String, String> params = new HashMap<>();

		// 查询参数
		params.put("name", getPara("name"));
		params.put("username", getPara("username"));

		renderJson(service.selectPage(params, getPage()));
	}
	
	public void save() {
		User user = getModel(User.class);
		String status = getPara("status");
		String roleIds = getPara("roleIds");
		Long[] roles = getParaValuesToLong("roleIds[]");
		//User cacheUser = getAttr(Constant.CACHE_NAME_LOGIN_ADMIN);
		user.set("status", StrKit.equals(status, "on") ? 1 : 0);
		
		if(user.getLong("id") == null) {
			String salt = HashKit.generateSaltForSha256();
			
			user.set("create_time", new Date())
				//.set("creator", cacheUser.getStr("username"))
				.set("salt", salt)
				.set("password", HashKit.sha256(salt + user.get("password")));
			
			renderJson(service.add(user, roles));
		} else {
			renderJson(service.update(user, roles));
		}
	}
	
	public void add() {
		Kv params = new Kv();
		params.set("status", 1);
		setAttr("roles", roleService.selectList(params));
		render("add.html");
	}

	public void edit() {
		Long id = getParaToLong("id");

		if(id == null) {
			return;
		}

		setAttr("user", service.selectById(id));
		List<Role> roles = roleService.selectRolesByUserId(id);
		if(CollectionUtil.isNotEmpty(roles)) {
			for(Role role : roles) {
				if(role.getInt("checked") == 1) {
					role.put("assigned", true);
				}
			}
			setAttr("roles", roles);
		}
		Kv params = new Kv();
		params.set("status", 1);
		setAttr("allRoles", roleService.selectList(params));
		render("edit.html");
	}
	
	public void resetPwd() {
		Long id = getParaToLong("id");

		if(id == null) {
			return;
		}
		
		renderJson(service.resetPwd(id));
	}
}
