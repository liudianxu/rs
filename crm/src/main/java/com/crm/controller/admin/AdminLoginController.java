package com.crm.controller.admin;

import com.crm.interceptor.EchacheInterceptor;
import com.crm.model.system.Setting;
import com.crm.service.system.AdminLoginService;
import com.crm.util.Constant;
import com.jfinal.aop.Before;
import com.jfinal.aop.Clear;
import com.jfinal.aop.Inject;
import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.ehcache.CacheKit;
import com.crm.validator.AdminLoginValidator;

import cn.hutool.http.HttpUtil;


@Clear
public class AdminLoginController extends Controller {

	@Inject
	private AdminLoginService service;

	@Before(EchacheInterceptor.class)
	public void index() {
		Setting setting = CacheKit.get(Constant.CHACHE_NAME, Constant.CHACHE_NAME);
		setAttr("setting",setting);
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
	@Before(EchacheInterceptor.class)
	public void logout() {
		Setting setting = CacheKit.get(Constant.CHACHE_NAME, Constant.CHACHE_NAME);
		setAttr("setting",setting);
		service.logout(getCookie(Constant.COOKIE_SESSION_ID_NAME));
		removeCookie(Constant.COOKIE_SESSION_ID_NAME);
		render("login.html");
	}
	
	public void captcha() {
		renderCaptcha();
	}
}
