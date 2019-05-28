package com.crm.controller.admin.system;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.controller.admin.BaseController;
import com.crm.model.system.Permission;
import com.crm.service.system.PermissionService;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.kit.StrKit;
import com.util.Constant;
import cn.hutool.core.date.DateUtil;

public class PermissionController extends BaseController<Permission> {
	
	@Inject
	private PermissionService service;

	/**
	 * 查询权限树
	 */
	public void selectPermissionTree() {
		Map<String, String> params = new HashMap<>();

		// 查询参数
		params.put("name", getPara("name"));
		renderJson(service.selectPermissionTree(params));
	}
	
	/**
	 * 查询授权树
	 */
	public void selectAuthTree(Long roleId) {
		renderJson(service.selectAuthTree(roleId));
	}
	
   //	@Before(PermissionSaveValidator.class)
	public void save(Permission permission, String state) {
		permission.set("state", StrKit.equals(state, "on") ? 1 : 0);
		if(permission.getLong("id")==null) {
		permission.set("create_time", DateUtil.now());
		renderJson(service.add(permission));
		}
		else {
		renderJson(service.update(permission));
		}
		
		
	}
	
	/**
	 * 删除
	 * @param id
	 */
	public void delete(Long id) {
		BaseResponse response = new BaseResponse();
		
		if(id == null) {
			response.setCode(Constant.RESPONSE_CODE_FAIL);
			response.setMessage("删除失败！");
			renderJson(response);
			return;
		}
		
	/*	//是否已关联产品
		if(service.existProductCategory(id)) {
			response.setCode(Constant.RESPONSE_CODE_FAIL);
			response.setMessage("删除失败！该分类已绑定商品");
			renderJson(response);
			return;
		}*/
		
		//是否有下级分类
		if(service.existChildren(id)) {
			response.setCode(Constant.RESPONSE_CODE_FAIL);
			response.setMessage("删除失败！该权限存在下级权限");
			renderJson(response);
			return;
		}
		
		if(!service.delete(id)) {
			response.setCode(Constant.RESPONSE_CODE_FAIL);
			response.setMessage("删除失败！");
		} else {
			response.setCode(Constant.RESPONSE_CODE_SUCCESS);
			response.setMessage("已删除！");
		}
		
		renderJson(response);
	}


	
}
