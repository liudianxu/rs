package com.crm.controller.admin.group;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.system.User;
import com.crm.service.brand.BrandService;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.PermissionService;
import com.crm.util.Constant;
import com.jfinal.aop.Inject;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.http.HttpUtil;

public class EmployerInsuranceController extends BaseController<GroupInsuranceOrder>{
	
	@Inject
	private BrandService brandService;
	@Inject
	private CustomerInfoService customerInfoService;
	@Inject
	private GroupInsuranceOrderService groupInsuranceOrderService;
	@Inject
	private GroupInsurancePersonService personService;
	@Inject
    private AdminLoginService adminLoginService;
	@Inject
	private PermissionService permissionService;
	public void index() {
		//获取品牌集合
		setAttr("groupId",getPara("groupId"));
		setAttr("customerId",getPara("customerId"));
		render("index.html");
	}
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
       params.put("groupId", getPara("groupId"));
       params.put("customerId", getPara("customerId"));
       params.put("insurance_type", "0");
       params.put("customer_name", getPara("customer_name"));
       params.put("policy_effective_date", getPara("policy_effective_date"));
       params.put("policy_expiration_date", getPara("policy_expiration_date"));
       params.put("status", getPara("status"));
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
       DataGrid<GroupInsuranceOrder> dataGrid = groupInsuranceOrderService.selectPage(params, getPage(),customerIds.length()>1?customerIds.substring(0,customerIds.length()-1):"");
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
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
		setAttr("brands", brandService.selectList());
		setAttr("customers", customerInfoService.selectList(admin.getLong("id")));
		render("add.html");
	}
	
	/**
	 * 编辑页面
	 * @param id
	 */
	public void edit() {
		Long id = getParaToLong("id");
		//获取品牌集合
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
		setAttr("brands", brandService.selectList());
		setAttr("customers", customerInfoService.selectList(admin.getLong("id")));
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
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
		setAttr("brands", brandService.selectList());
		setAttr("customers", customerInfoService.selectList(admin.getLong("id")));
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
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
		setAttr("customers", customerInfoService.selectList(admin.getLong("id")));
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		setAttr("groupInsuranceOrder", order);
		render("view.html");
	}

}
