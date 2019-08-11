package com.crm.controller.admin;

import java.util.ArrayList;
import java.util.List;

import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.model.system.User;
import com.crm.service.group.GroupInsuranceOrderService;
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
		setAttr("groupInsuranceOrders", groupInsuranceOrders);
		render("index.html");
	}
	
	
	
}
