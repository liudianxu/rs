package com.crm.controller.admin.system;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.codec.digest.DigestUtils;

import com.crm.controller.admin.BaseController;
import com.crm.model.system.User;
import com.crm.service.system.UserService;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.util.Constant;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:后台管理员控制器
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月22日 
 * @history:
 */
public class SystemAdminController extends BaseController<User>{
	
	@Inject
	private UserService service;
	
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

	/**
	 * 添加页面
	 */
	public void add() {
		render("add.html");
	}
	
	
	/**
	 * 编辑页面
	 * @param id
	 *        管理员id
	 */
	public void edit(Long id) {
		if(id==null) {
			render("index.html");
			return;
		}
		setAttr("admin", User.dao.findById(id));
		render("edit.html");
	}
	
	/**
	 * 保存
	 */
	public void save(User admin) {
		BaseResponse response = new BaseResponse();
		admin.set("password", DigestUtils.md5Hex(admin.get("password").toString()));
        if(admin.get("status")==null) {
        	admin.set("status", 0);
        }
        try {
        	if(admin.get("id")==null) {
        admin.set("create_time", new Date());
        admin.set("salt", "03c51f68f40658fe6892bda72a0f5c04");
        admin.save();
        	}
        else {
        	User oldAdmin = User.dao.findById((Long)admin.get("id"));
        	oldAdmin.set("name", admin.get("name"))
        	.set("username", admin.get("name"))
        	.set("name", admin.get("name"))
        	.set("password", admin.get("password").toString())
        	.set("email", admin.get("email"))
        	.set("department", admin.get("department"))
        	.set("status", admin.get("status")).update();
		}
		response.setCode(Constant.RESPONSE_CODE_SUCCESS);
		response.setMessage("保存成功");
		renderJson(response);
		return;
        }
        catch (Exception e) {
        	response.setCode(Constant.RESPONSE_CODE_FAIL);
    		response.setMessage("保存失败");
    		renderJson(response);
    		return;
		}
	}
	
	
	/**
	 * 删除
	 */
	public void delete(Long id) {
		BaseResponse response = new BaseResponse();
        try {
		User.dao.deleteById(id);
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
