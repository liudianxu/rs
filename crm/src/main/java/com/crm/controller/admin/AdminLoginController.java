package com.crm.controller.admin;

import com.crm.service.system.AdminLoginService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Clear;
import com.jfinal.aop.Inject;
import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;
import com.util.Constant;
import com.crm.validator.AdminLoginValidator;

import cn.hutool.http.HttpUtil;


@Clear
public class AdminLoginController extends Controller {

	@Inject
	private AdminLoginService service;

	
	public void index() {
		keepPara("returnUrl"); 
		render("login.html");
	}
	
	@Before(AdminLoginValidator.class)
	public void doLogin() {
		boolean keepLogin = getParaToBoolean("keepLogin", false);
		String loginIp = HttpUtil.getClientIP(getRequest());
		Ret ret = service.login(getPara("username"), getPara("password"), keepLogin, loginIp);
		if (ret.isOk()) {
			String sessionId = ret.getStr(Constant.COOKIE_SESSION_ID_NAME);
			int maxAgeInSeconds = ret.getInt("maxAgeInSeconds");
			setCookie(Constant.COOKIE_SESSION_ID_NAME, sessionId, maxAgeInSeconds, true);
			setAttr(Constant.CACHE_NAME_LOGIN_ADMIN, ret.get(Constant.CACHE_NAME_LOGIN_ADMIN));

			ret.set("returnUrl", getPara("returnUrl", "/admin/index"));    // 如果 returnUrl 存在则跳过去，否则跳去首页
		}
		
		renderJson(ret);
	}
	
	/**
	 * 退出登录
	 */
	@ActionKey("/admin/logout")
	public void logout() {
		service.logout(getCookie(Constant.COOKIE_SESSION_ID_NAME));
		removeCookie(Constant.COOKIE_SESSION_ID_NAME);
		render("login.html");
	}
	
	public void captcha() {
		renderCaptcha();
	}
}
