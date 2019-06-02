package com.crm.controller.admin.brand;

import java.util.HashMap;
import java.util.Map;

import com.crm.controller.admin.BaseController;
import com.crm.model.brand.Brand;
import com.crm.model.system.User;
import com.crm.service.brand.BrandService;
import com.crm.service.system.AdminLoginService;
import com.crm.util.Constant;
import com.crm.util.DateUtil;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.kit.StrKit;
/**
 * 
 * 
 * @version: 1.00.00
 * @description:品牌控制器类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年1月24日 
 * @history:
 */
public class BrandController extends BaseController<Brand> {
	
	@Inject
	private BrandService service;
    @Inject
    private AdminLoginService adminLoginService;
    
     /**
      * 列表获取
     */
	public void list() {
		Map<String, String> params = new HashMap<>();
		//查询参数
		params.put("name", getPara("name"));
		
		renderJson(service.selectPage(params, getPage()));
	}
	
	/**
	 * 去添加页面
	 */
	public void add() {
		render("add.html");
	}
	
	/**
	 * 去编辑页面
	 */
	public void edit() {
		Long id = getParaToLong("id");
		if(id==null) {
			render("index.html");
			return;
		}
		Brand brand = Brand.dao.findById(id);
		if(brand==null) {
			render("index.html");
			return;
		}
			setAttr("brand", brand);
			render("edit.html");
	}
	
	/**
	 * 保存保险公司
	 * @param brand
	 */
	  public void save(){
		 Brand brand = getModel(Brand.class);
		 BaseResponse response = new BaseResponse();
  		
  		if(StrKit.isBlank(brand.getStr("name"))) {
  			response.setCode(Constant.RESPONSE_CODE_FAIL);
  			response.setMessage("保存失败！保险公司名称不能为空");
  			renderJson(response);
  			return;
  		}
  		//新增操作
  		if(brand.getLong("id") == null) {
  			User admin = adminLoginService.getLoginAdminWithSessionId(getCookie(Constant.COOKIE_SESSION_ID_NAME));
  			if(admin==null) {
  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  				response.setMessage("添加失败！");
  				renderJson(response);
  			}
  			brand.set("creator", admin.get("name"));
  			brand.set("create_time", DateUtil.getDateTime(null));
  			if(service.add(brand) == null) {
  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  				response.setMessage("添加失败！");
  			} else {
  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
  				response.setMessage("添加成功！");
  			}
  		}
  		//编辑操作
  		else {
  			if(service.update(brand) == null) {
  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  				response.setMessage("编辑失败！");
  			} else {
  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
  				response.setMessage("编辑成功！");
  			}
  		}
  		
  		renderJson(response);
	}
	
	  
	  /**
	   * 删除保险公司
	   * @param id
	   */
	  public void delete() {
			BaseResponse response = new BaseResponse();
			Long id = getParaToLong("id");
			if(id == null) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！");
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
