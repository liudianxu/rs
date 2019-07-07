package com.crm.controller.admin.group;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.service.brand.BrandService;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.jfinal.aop.Inject;

public class EmployerInsuranceController extends BaseController<GroupInsuranceOrder>{
	
	@Inject
	private BrandService brandService;
	@Inject
	private CustomerInfoService customerInfoService;
	@Inject
	private GroupInsuranceOrderService groupInsuranceOrderService;
	@Inject
	private GroupInsurancePersonService personService;
	
	/**
	 * 列表分页查询
	 */
	public void selectByPage() {
       Map<String,String> params = new HashMap<>();
		
       //查询参数
       /*params.put("order_sn", getPara("order_sn"));
       params.put("brand_id", getPara("brand_id"));
       params.put("policy_num", getPara("policy_num"));
       params.put("company_name", getPara("company_name"));
       params.put("status", getPara("status"));
       params.put("type", getPara("type"));
       params.put("insurance_type", getPara("insurance_type"));*/
       //params.put("is_on_sale", getPara("is_on_sale"));
       params.put("insurance_type", "0");
       params.put("customer_name", getPara("customer_name"));
       params.put("policy_effective_date", getPara("policy_effective_date"));
       params.put("policy_expiration_date", getPara("policy_expiration_date"));
       params.put("status", getPara("status"));
       DataGrid<GroupInsuranceOrder> dataGrid = groupInsuranceOrderService.selectPage(params, getPage());
       List<GroupInsuranceOrder> groupInsuranceOrders = dataGrid.getData();
       for (GroupInsuranceOrder groupInsuranceOrder : groupInsuranceOrders) {
    	   groupInsuranceOrder.put("person", groupInsuranceOrder.get("person_num")+"/"+groupInsuranceOrder.get("total_person_sum"));
    	   if((groupInsuranceOrder.get("annual_premium")!=null)
    			   &&(groupInsuranceOrder.get("annual_premium")!="")
    			   &&(groupInsuranceOrder.get("person_num")!=null)
    			   &&(groupInsuranceOrder.get("person_num")!="")){
    		   
    		   BigDecimal fre=BigDecimal.ZERO;
    		   List<GroupInsurancePerson> persons = personService.findByOrderId(groupInsuranceOrder.getLong("id"));
    		   for (GroupInsurancePerson person : persons) {
    			   if(person.get("premium")!=null) {
    				   if(person.getInt("status")==0||person.getInt("status")==1) {
    				   fre = fre.add(person.getBigDecimal("premium"));
    				   }
			}
    		   }
    		   groupInsuranceOrder.put("totalPremium",fre);
    	   }
       }
       dataGrid.setData(groupInsuranceOrders);
	   renderJson(dataGrid);
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
	 * 编辑页面
	 * @param id
	 */
	public void edit() {
		Long id = getParaToLong("id");
		//获取品牌集合
		setAttr("brands", brandService.selectList());
		setAttr("customers", customerInfoService.selectList());
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		setAttr("groupInsuranceOrder", order);
		render("edit.html");
	}
	
	/**
	 * 复制页面
	 * @param id
	 */
	public void copy() {
		Long id = getParaToLong("id");
		//获取品牌集合
		setAttr("brands", brandService.selectList());
		setAttr("customers", customerInfoService.selectList());
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		setAttr("groupInsuranceOrder", order);
		render("copy.html");
	}
	
	/**
	 * 查看页面
	 * @param id
	 */
	public void view() {
		Long id = getParaToLong("id");
		//获取品牌集合
		setAttr("brands", brandService.selectList());
		setAttr("customers", customerInfoService.selectList());
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		setAttr("groupInsuranceOrder", order);
		render("view.html");
	}

}
