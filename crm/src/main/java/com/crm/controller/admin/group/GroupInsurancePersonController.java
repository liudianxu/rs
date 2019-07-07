package com.crm.controller.admin.group;

import java.util.HashMap;
import java.util.Map;

import com.crm.controller.admin.BaseController;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.jfinal.aop.Inject;

public class GroupInsurancePersonController extends BaseController<GroupInsurancePerson>{
	@Inject
	private GroupInsurancePersonService personService;
	
	
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
		renderJson(personService.selectPage(params, getPage()));
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
		render("addPreserve.html");
	}
	
	public void preserve() {
		Long id = getParaToLong("id");
		setAttr("orderId", id);
		setAttr("type", getPara("type"));
		render("preserve.html");
	}
}
