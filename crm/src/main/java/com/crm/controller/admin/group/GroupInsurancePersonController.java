package com.crm.controller.admin.group;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.system.User;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.PermissionService;
import com.crm.util.Constant;
import com.jfinal.aop.Inject;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.http.HttpUtil;

public class GroupInsurancePersonController extends BaseController<GroupInsurancePerson>{
	@Inject
	private GroupInsurancePersonService personService;
	@Inject
    private AdminLoginService adminLoginService;
	@Inject
	private PermissionService permissionService;
	
	
	public void index() {
		setAttr("type", getPara("type"));
		render("index.html");
	}
	
	/**
	 * 列表分页查询
	 */
	public void selectByPage() {
       Map<String,String> params = new HashMap<>();
		
       //查询参数
       params.put("type", getPara("type"));
       params.put("name", getPara("name"));
       params.put("id_num", getPara("id_num"));
       params.put("customer_name", getPara("customer_name"));
       params.put("policy_num", getPara("policy_num"));
       params.put("status", getPara("status"));
       params.put("orderId", getPara("orderId"));
       params.put("insurance_type", getPara("insurance_type"));
       //params.put("is_on_sale", getPara("is_on_sale"));
       String customerIds = "";
     		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
     		if (sessionId != null) {
     			User admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
     			if (admin == null) {
     				String loginIp = HttpUtil.getClientIP(this.getRequest());
     				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
     			}
     			if (admin != null) {
     				List<CustomerInfo> customers = permissionService.findCustomerByUserId(admin.getLong("id"));
     				if(CollectionUtil.isNotEmpty(customers)) {
     					for (CustomerInfo customerInfo : customers) {
     						customerIds += customerInfo.getLong("id")+",";
     					}
     				}
     			}
     		}
	   renderJson(personService.selectPage(params, getPage(),customerIds.substring(0,customerIds.length()-1)));
	}
	
	public void add() {
		setAttr("type", getPara("type"));
		render("add.html");
	}

	
	public void addPerson() {
		Long id = getParaToLong("id");
		setAttr("orderId", id);
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		setAttr("type", order.getInt("insurance_type"));
		int type=order.getInt("insurance_type");
		if(type==3) {
			render("addPerson.html");
		}
		if(type==0) {
			render("addEmployerPerson.html");
		}
	}
	
	public void addPreserve() {
		Long id = getParaToLong("id");
		setAttr("orderId", id);
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		setAttr("planId", order.getLong("plan_id"));
		render("addPreserve.html");
	}
	
	public void preserve() {
		Long id = getParaToLong("id");
		setAttr("orderId", id);
		setAttr("type", getPara("type"));
		render("preserve.html");
	}
	
	/**
	 * 查看页面
	 * @param id
	 */
	public void view() {
		Long id = getParaToLong("id");
		int type = getParaToInt("type");
		GroupInsurancePerson groupInsurancePerson = personService.findById(id,type);
		setAttr("groupInsurancePerson", groupInsurancePerson);
		render("view.html");
	}
}
