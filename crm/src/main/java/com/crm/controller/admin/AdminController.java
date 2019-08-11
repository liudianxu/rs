package com.crm.controller.admin;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.model.system.User;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.groupinfo.GroupInfoService;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.PermissionService;
import com.crm.util.Constant;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.http.HttpUtil;

public class AdminController extends Controller {
	@Inject
    private AdminLoginService adminLoginService;
	@Inject
	private PermissionService permissionService;
	@Inject
	private GroupInsuranceOrderService groupInsuranceOrderService;
	@Inject
	private GroupInfoService infoService;
	@Inject
	private GroupInsurancePersonService personService;
	@Inject
	private CustomerInfoService cusService;
	
	public void index() {
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
		String type="3";
		List<GroupInsuranceOrder> groupInsuranceOrders = groupInsuranceOrderService.selectAll(customerIds.substring(0,customerIds.length()-1),type);
		if(CollectionUtil.isNotEmpty(groupInsuranceOrders)) {
			for (GroupInsuranceOrder groupInsuranceOrder : groupInsuranceOrders) {
				GroupInfo groupInfo = GroupInfo.dao.findById(groupInsuranceOrder.getLong("insure_group_id"));
				if(groupInfo!=null) {
					groupInsuranceOrder.put("groupName",groupInfo.getStr("group_name"));
				}
			}	
		}
		List<GroupInfo>  infos=infoService.findByCustomerIds(customerIds.substring(0,customerIds.length()-1));
		setAttr("infos", infos);
		
		 List<CustomerInfo> customers=cusService.findByIds(customerIds.substring(0,customerIds.length()-1));
		 for (CustomerInfo customer : customers) {
			 List<GroupInsuranceOrder> order = groupInsuranceOrderService.queryByCustomerId(customer.getLong("id"));
			 customer.put("orderCount",order.size());
			 BigDecimal amount2 = BigDecimal.ZERO;
			 BigDecimal fre2 = BigDecimal.ZERO;
			 int num2=0;
			 int personNum2=0;
			 for (GroupInsuranceOrder order2 : order) {
				 amount2=amount2.add(order2.getBigDecimal("premium"));
				 num2=num2+order2.getInt("person_num");
				 List<GroupInsurancePerson> persons = personService.findByOrderId(order2.getLong("id"));
				   for (GroupInsurancePerson person : persons) {
	    			   if(person.get("premium")!=null) {
	    				   if(person.getInt("status")==0||person.getInt("status")==1) {
	    				   fre2 = fre2.add(person.getBigDecimal("premium"));
	    				   personNum2=personNum2+1;
	    				   }
				}
	    		   }
			 }
			 customer.put("totalPre",amount2);
			 customer.put("totalNum",num2);
			 customer.put("fre",fre2);
			 customer.put("personNum",personNum2);
		 }
		 setAttr("customers", customers);
		render("index.html");
	}
	
	
	
}
