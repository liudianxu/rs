package com.crm.validator;

import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;

/**
 * ajax 登录参数验证
 */
public class AdminLoginValidator extends Validator {

	protected void validate(Controller c) {
		setShortCircuit(true);

		validateRequired("username", "userNameMsg", "用户名不能为空");
		validateRequired("password", "passwordMsg", "密码不能为空");
		validateCaptcha("captcha", "captchaMsg", "验证码不正确");
	}

	protected void handleError(Controller c) {
		c.renderJson();
	}
}
