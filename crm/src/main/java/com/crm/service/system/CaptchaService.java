package com.crm.service.system;
/**
 * 
 * 
 * @version: 1.00.00
 * @description:验证码业务接口
 * @date: 2019年2月18日 
 * @history:
 */
public interface CaptchaService {

	/**
	 * 创建登录验证码
	 * @param captchaId
	 * @return
	 */
	String createLoginSmsCaptcha(String captchaId);

	/**
	 * 验证登录验证码
	 * @param string
	 * @param captcha
	 * @return
	 */
	boolean checkLoginSmsCaptcha(String captchaId, String captcha);

	/**
	 * 创建注册验证码
	 * @param captchaId
	 * @return
	 */
	String createRegisterSmsCaptcha(String captchaId);

	/**
	 * 验证注册验证码
	 * @param string
	 * @param captchaId
	 * @return
	 */
	boolean isValidRegisterSmsCaptcha(String string, String captchaId);

	/**
	 * 创建忘记密码验证码
	 * @param string
	 * @return
	 */
	String createForgotPasswordSmsCaptcha(String captchaId);
	
	String createChangePasswordSmsCaptcha(String captchaId);

	
	/**
	 * 验证忘记密码验证码
	 * @param captchaId
	 * @param captcha
	 * @return
	 */
	boolean isValidForgetPasswordSmsCaptcha(String captchaId, String captcha);
	
	
	boolean isValidChangePasswordSmsCaptcha(String captchaId, String captcha);


	/**
	 * 填写投保人信息验证码
	 * @param string
	 * @return
	 */
	String createInsureSmsCaptcha(String string);

	/**
	 * 验证投保人信息验证码
	 * @param string
	 * @param captchaId
	 * @return
	 */
	boolean isValidInsureSmsCaptcha(String string, String captchaId);

	/**
	 * 创建修改手机号短信验证码
	 * @param string
	 * @return
	 */
	String createChangeMobileSmsCaptcha(String captchaId);

	/**
	 * 验证修改手机号验证码
	 * @param string
	 * @param code
	 * @return
	 */
	boolean isValidChangeMobileSmsCaptcha(String captchaId, String captcha);

	/**
	 * 创建修改邮箱短信验证码
	 * @param string
	 * @return
	 */
	String createChangeEmailSmsCaptcha(String captchaId);
	
	/**
	 * 验证修改邮箱手机号验证码
	 * @param string
	 * @param code
	 * @return
	 */
	boolean isValidChangeEmailSmsCaptcha(String captchaId, String captcha);

	/**
	 * 创建发送电子邮箱验证码
	 * @param string
	 * @return
	 */
	String createChangeEmailCaptcha(String string);

	/**
	 * 验证电子邮箱验证码
	 * @param string
	 * @param captcha
	 * @return
	 */
	boolean isValidChangeEmailCaptcha(String captchaId, String captcha);

	/**
	 * 创建解绑微信手机验证码
	 * @param string
	 * @return
	 */
	String createUnbindWxSmsCaptcha(String string);

	/**
	 * 验证解绑微信手机验证码
	 * @param string
	 * @param captcha
	 * @return
	 */
	boolean isValidUnbindWxSmsCaptcha(String captchaId, String captcha);

	/**
	 * 退保手机短信验证码
	 * @param captchaId
	 * @return
	 */
	String createCancellInsuranceSmsCaptcha(String captchaId);

	/**
	 * 验证退保手机短信验证码
	 * @param string
	 * @param captcha
	 * @return
	 */
	boolean isValidCancellInsuranceSmsCaptcha(String captchaId, String captcha);

}
