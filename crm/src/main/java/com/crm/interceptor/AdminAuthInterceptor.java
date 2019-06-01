package com.crm.interceptor;

import com.crm.model.system.User;
import com.crm.service.system.AdminAuthService;
import com.crm.util.Constant;
import com.jfinal.aop.Inject;
import com.jfinal.aop.Interceptor;
import com.jfinal.aop.Invocation;
import com.jfinal.kit.StrKit;

public class AdminAuthInterceptor implements Interceptor {
	
	@Inject
	private AdminAuthService service;

	@Override
	public void intercept(Invocation inv) {
		User admin = inv.getController().getAttr(Constant.CACHE_NAME_LOGIN_ADMIN);
		if(admin != null && admin.isStatusOk()) {
			inv.invoke();
		} else {
			String queryString = inv.getController().getRequest().getQueryString();
			if (StrKit.isBlank(queryString)) {
				inv.getController().redirect("/admin/login?returnUrl=" + inv.getActionKey());
			} else {
				inv.getController().redirect("/admin/login?returnUrl=" + inv.getActionKey() + "?" + queryString);
			}
		}
	}

}
