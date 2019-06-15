package com.common;

import com.crm.service.brand.BrandService;
import com.crm.service.brand.impl.BrandServiceImpl;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.customerinfo.impl.CustomerInfoServiceImpl;
import com.crm.service.group.GroupInsuranceGuaranteeService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.group.impl.GroupInsuranceGuaranteeServiceImpl;
import com.crm.service.group.impl.GroupInsuranceOrderServiceImpl;
import com.crm.service.group.impl.GroupInsurancePersonServiceImpl;
import com.crm.service.groupinfo.GroupInfoService;
import com.crm.service.groupinfo.impl.GroupInfoServiceImpl;
import com.crm.service.system.AdminAuthService;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.AreaService;
import com.crm.service.system.EmailService;
import com.crm.service.system.OperateLogService;
import com.crm.service.system.PermissionService;
import com.crm.service.system.RoleService;
import com.crm.service.system.SnService;
import com.crm.service.system.UserService;
import com.crm.service.system.impl.AdminAuthServiceImpl;
import com.crm.service.system.impl.AdminLoginServiceImpl;
import com.crm.service.system.impl.AreaServiceImpl;
import com.crm.service.system.impl.EmailServiceImpl;
import com.crm.service.system.impl.OperateLogServiceImpl;
import com.crm.service.system.impl.PermissionServiceImpl;
import com.crm.service.system.impl.RoleServiceImpl;
import com.crm.service.system.impl.SnServiceImpl;
import com.crm.service.system.impl.UserServiceImpl;
import com.jfinal.aop.Aop;


public class AopKit {

	public static void mapping() {
		Aop.addMapping(OperateLogService.class, OperateLogServiceImpl.class);
		Aop.addMapping(AdminAuthService.class, AdminAuthServiceImpl.class);
		Aop.addMapping(AdminLoginService.class, AdminLoginServiceImpl.class);
		Aop.addMapping(PermissionService.class,PermissionServiceImpl.class);
		Aop.addMapping(RoleService.class, RoleServiceImpl.class);
		Aop.addMapping(UserService.class, UserServiceImpl.class);
		Aop.addMapping(EmailService.class, EmailServiceImpl.class);

		
		Aop.addMapping(BrandService.class, BrandServiceImpl.class);
		Aop.addMapping(CustomerInfoService.class, CustomerInfoServiceImpl.class);
		Aop.addMapping(GroupInfoService.class, GroupInfoServiceImpl.class);
		Aop.addMapping(AreaService.class, AreaServiceImpl.class);
		
		Aop.addMapping(SnService.class, SnServiceImpl.class);
		
		Aop.addMapping(GroupInsuranceGuaranteeService.class, GroupInsuranceGuaranteeServiceImpl.class);
		Aop.addMapping(GroupInsuranceOrderService.class, GroupInsuranceOrderServiceImpl.class);
		Aop.addMapping(GroupInsurancePersonService.class, GroupInsurancePersonServiceImpl.class);
	}
}
