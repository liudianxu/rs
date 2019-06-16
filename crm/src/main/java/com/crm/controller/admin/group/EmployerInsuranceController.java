package com.crm.controller.admin.group;

import com.crm.controller.admin.BaseController;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.service.brand.BrandService;
import com.crm.service.customerinfo.CustomerInfoService;
import com.jfinal.aop.Inject;

public class EmployerInsuranceController extends BaseController<GroupInsuranceOrder>{
	
	@Inject
	private BrandService brandService;
	@Inject
	private CustomerInfoService customerInfoService;
	
	/**
	 * 雇主保单页面
	 */
	public void list() {
		render("index.html");
	}
	
	/**
	 * 雇主保单页面
	 */
	public void add() {
		setAttr("brands", brandService.selectList());
		setAttr("customers", customerInfoService.selectList());
		render("add.html");
	}
	
	/**
	 * 去编辑页面
	 */
	public void edit() {
		
	}

}
