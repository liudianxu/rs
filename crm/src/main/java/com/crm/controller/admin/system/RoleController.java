package com.crm.controller.admin.system;

import com.crm.controller.admin.BaseController;
import com.crm.model.system.Role;
import com.crm.service.system.PermissionService;
import com.crm.service.system.RoleService;
import com.crm.service.system.impl.PermissionServiceImpl;
import com.crm.service.system.impl.RoleServiceImpl;
import com.crm.web.bean.BaseResponse;
import com.jfinal.kit.Kv;
import com.jfinal.kit.StrKit;
import com.util.Constant;

import cn.hutool.core.date.DateUtil;

public class RoleController extends BaseController<Role> {
	
	private RoleService service = new RoleServiceImpl();
	
	private PermissionService permissionService = new PermissionServiceImpl();

	/**
	 * 分页查询
	 */
	public void selectByPage() {
		Kv params = new Kv();
		
		renderJson(service.selectByPage(getPage(), params));
	}
	
	/**
	 * 编辑页面
	 */
	public void edit() {
		Long id = getParaToLong("id");
		if(id == null) {
			return;
		}

		setAttr("role", service.selectById(id));
		render("edit.html");
	}
	
	public void add() {
		render("add.html");
	}
	
	
	/**
	 * 授权页面
	 */
	public void authorize() {
		Long id = getParaToLong("id");
		if(id == null) {
			return;
		}
		
		String name = getPara("name");
		
		setAttr("name", name);
		setAttr("roleId", id);
		render("authorize.html");
	}
	
	/**
	 * 角色下拉
	 */
//	public void roleSelect() {
//		List<Combobox> comboboxes = new ArrayList<>();
//		Kv params = new Kv();
//		
//		List<Role> roles = service.selectList(params);
//		for(Role role : roles) {
//			comboboxes.add(new Combobox(String.valueOf(role.getLong("id")), role.getStr("role_name")));
//		}
//		
//		renderJson(comboboxes);
//	}
	
	//@Before(RoleSaveValidator.class)
	public void save(Role role,String state) {
		BaseResponse response = new BaseResponse();
		String[] permissions = getParaValues("ids[]");
		//判断添加或者编辑
		role.set("state", StrKit.equals(state, "on") ? 1 : 0);
		if(role.getLong("id") == null) {
			role.set("create_time", DateUtil.now());
			try {
			renderJson(service.add(role));
			service.saveAuthorize((Long)role.get("id"), permissions);
			}
			catch (Exception e) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("操作失败");
				renderJson(response);
				return;
			}
		
		} else {//编辑
			service.saveAuthorize((Long)role.get("id"), permissions);
			renderJson(service.update(role));
		}
		response.setCode(Constant.RESPONSE_CODE_SUCCESS);
		response.setMessage("操作成功");
		renderJson(response);
		return;
	}
	
	public void saveAuthorize() {
//		String roleId = getPara("hiddenRoleId");
//		
//		String[] permissions = getParaValues("ckPermission");
//		if(StrKit.isBlank(roleId)) {
//		renderJson(new BaseResponse(Constant.RESPONSE_CODE_FAIL, "授权失败！未获取到角色ID！", null));
//		return;
//	}
//		String result = null;
//		try {
//			service.saveAuthorize(roleId, permissions);
//		} catch (Exception e) {
//			e.printStackTrace();
//			renderJson(new BaseResponse(Constant.RESPONSE_CODE_FAIL, "保存用户角色失败!", null));
//			return;
//		}
//		
//		if(StringUtils.isBlank(result)) {
//			renderJson(new BaseResponse(Constant.RESPONSE_CODE_SUCCESS, "保存成功!", null));
//		} else {
//			renderJson(new BaseResponse(Constant.RESPONSE_CODE_FAIL, "保存失败!", null));
//		}
	}
	
	/**
	 * 删除
	 */
	public void delete(Long id) {
		BaseResponse response = new BaseResponse();
        try {
		Role.dao.deleteById(id);
		response.setCode(Constant.RESPONSE_CODE_SUCCESS);
		response.setMessage("删除成功");
		renderJson(response);
		return;
        }
        catch (Exception e) {
        	response.setCode(Constant.RESPONSE_CODE_FAIL);
    		response.setMessage("删除失败");
    		renderJson(response);
    		return;
		}
	}
}
