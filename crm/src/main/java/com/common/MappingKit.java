package com.common;

import com.crm.model.brand.Brand;
import com.crm.model.claimreport.ClaimReport;
import com.crm.model.claimreport.ClaimReportPush;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceGuarantee;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.group.GroupInsurancePersonLog;
import com.crm.model.group.GroupInsurancePlan;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.model.system.Area;
import com.crm.model.system.Permission;
import com.crm.model.system.Role;
import com.crm.model.system.RoleCustomers;
import com.crm.model.system.RolePermission;
import com.crm.model.system.Session;
import com.crm.model.system.Setting;
import com.crm.model.system.Sn;
import com.crm.model.system.SysParameter;
import com.crm.model.system.User;
import com.crm.model.system.UserRole;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;

public class MappingKit {

	public static void mapping(ActiveRecordPlugin arp) {
		arp.addMapping("sys_session", Session.class);
		arp.addMapping("sys_config", SysParameter.class);
		arp.addMapping("sys_user", User.class);
		arp.addMapping("sys_role", Role.class);
		arp.addMapping("sys_permission", Permission.class);
		arp.addMapping("sys_role_permission", RolePermission.class);
		arp.addMapping("sys_role_customer", RoleCustomers.class);
		arp.addMapping("sys_user_role", UserRole.class);
		
		arp.addMapping("crm_setting", Setting.class);
		
		arp.addMapping("crm_brand", Brand.class);
		arp.addMapping("crm_sn", Sn.class);
		
		arp.addMapping("crm_group_insurance_guarantee", GroupInsuranceGuarantee.class);
		arp.addMapping("crm_group_insurance_orders", GroupInsuranceOrder.class);
		arp.addMapping("crm_group_insurance_person", GroupInsurancePerson.class);
		arp.addMapping("crm_customer_info", CustomerInfo.class);
		arp.addMapping("crm_group_info", GroupInfo.class);
		arp.addMapping("crm_group_insurance_person_log", GroupInsurancePersonLog.class);
		arp.addMapping("crm_area", Area.class);
		arp.addMapping("crm_claim_report", ClaimReport.class);
		arp.addMapping("crm_claim_push", ClaimReportPush.class);
		arp.addMapping("crm_group_insurance_plan", GroupInsurancePlan.class);

		
	}
	
}
