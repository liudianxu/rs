package com.crm.controller.admin.system;


import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.model.system.Setting;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.system.EmailService;
import com.crm.util.Constant;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.plugin.ehcache.CacheKit;

public class SettingController extends Controller{
    @Inject
    EmailService emailService;
	@Inject
	GroupInsurancePersonService personService;
	  /**
	   * 去编辑页面
	   * @param id
	   */
	   public void edit() {
		   Setting setting= Setting.dao.findById(1L);
		   setAttr("setting", setting);
		   render("edit.html");
	   }
	   
	  /**
	   * 保存
	   * @param setting
	   */
	public void save() {
		Setting setting = getModel(Setting.class);
		BaseResponse response = new BaseResponse();
		setting.update();
		response.setCode(Constant.RESPONSE_CODE_SUCCESS);
		response.setMessage("保存成功");
		//更新缓存
		CacheKit.put(Constant.CHACHE_NAME, Constant.CHACHE_NAME, setting);
		renderJson(response);	
		 return;
	  }
	
	
	
	/**
	 * SMTP测试
	 */
	public void test_smtp(String smtpHost, Integer smtpPort, String smtpUsername, String smtpPassword, Boolean smtpSSLEnabled, String smtpFromMail, String toMail) {
		BaseResponse response = new BaseResponse();
		if (StringUtils.isEmpty(toMail)) {
			response.setMessage("收件人不能为空");
			renderJson(response);	
			return;
		}

		try {
			Map<String, Object> properties = new HashMap<>();
			properties.put("smtpHost", getPara("smtpHost"));
			properties.put("smtpPort", getPara("smtpPort"));
			properties.put("smtpUsername", getPara("smtpUsername"));
			properties.put("smtpSSLEnabled", getPara("smtpSSLEnabled"));
			properties.put("smtpFromMail", getPara("smtpFromMail"));
			//mailService.sendTestSmtpMail(smtpHost, smtpPort, smtpUsername, StringUtils.isNotEmpty(smtpPassword) ? smtpPassword : setting.getSmtpPassword(), smtpSSLEnabled, smtpFromMail, toMail);
		} catch (Exception e) {
			response.setMessage("发送失败");
			renderJson(response);	
		}
		response.setMessage("发送成功");
		renderJson(response);	
		return;	}
	
	   
}
