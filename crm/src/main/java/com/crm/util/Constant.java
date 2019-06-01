package com.crm.util;

public class Constant {

	/**
	 * 密钥串
	 */
	public static final String COMMON_KEY = "5df0232cade0ade515f758048a96a1f4";

	public static final String ADMIN_STATUS_OK	= "1";
	
	public static final String ADMIN_STATUS_LOCK = "0";
	
	public static final String CACHE_NAME_LOGIN_ADMIN = "loginAdmin";
	
	public static final String CACHE_NAME_LOGIN_MEMBER= "loginMember";
	
	public static final String TOKEN_SESSION = "csrfToken";

	
	public static final String COOKIE_SESSION_ID_NAME = "cookieSessionId";
	
    public static final String CHACHE_NAME ="setting";

    public static final String INIT_PASSWORD="123456";
	
	// 返回code值-请求失败
	public static final int RESPONSE_CODE_FAIL = 0;
	// 返回code值-请求成功
	public static final int RESPONSE_CODE_SUCCESS = 1;
	

	//Token生存时间(60分钟)
	public static final long TOKEN_LIVE =   60 * 60;
	//性別（女）
	public static final int FEMALE= 0;

	//性別（男）
	public static final int MALE = 1;
	
	public static final int ENABLED = 1;
	
	public static final int DISABLED = 0 ;
	
	// 保障方案名称前缀
	public static final String GUARANTEE_PLAN_NAME_PREFIX = "方案";
	
	/**
	 * 提交方式
	 */
	public static final String HTTP_SUBMIT_METHOD_POST = "POST"; //post
	
	
	
}
