package com.crm.web.bean;

import com.crm.util.Constant;

/**
 * 
 * 
 * @version: 1.00.00
 * @description: 接口响应实体类
 * @copyright: Copyright (c) 2017 易联众  All Rights Reserved
 * @company: 保睿通（厦门）信息科技有限公司
 * @author: rock
 * @date: 2018年7月10日 上午10:30:24
 * @history:
 */
public class BaseResponse {

	private Integer code = Constant.RESPONSE_CODE_FAIL; //响应编码  (0:失败,1:成功)
 
	private String message;  //响应信息
	 
	private Object data;   //数据

	public BaseResponse() {
	}

	public BaseResponse(Integer code, String message, Object data) {
		super();
		this.code = code;
		this.message = message;
		this.data = data;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
