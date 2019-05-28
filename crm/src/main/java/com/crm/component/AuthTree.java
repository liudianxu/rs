package com.crm.component;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:授权树
 * @author: ldx
 * @date: 2019年2月27日 
 * @history:
 */
public class AuthTree<T> {
	private int code = 0;
	private String msg;
	private Map<String,List<T>> data;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Map<String, List<T>> getData() {
		return data;
	}
	public void setData(Map<String, List<T>> data) {
		this.data = data;
	}
	public AuthTree(int code, String msg, Map<String, List<T>> data) {
		super();
		this.code = code;
		this.msg = msg;
		this.data = data;
	}
	public AuthTree() {
	}
	
	
	
}
