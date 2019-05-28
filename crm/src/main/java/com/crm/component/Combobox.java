package com.crm.component;

/**
 * 
 * 
 * @version: 1.00.00
 * @description: 下拉框组件类
 * @date: 2018年7月10日 上午10:12:36
 * @history:
 */
public class Combobox {
	
	private String value;
	private String text;
	
	public Combobox() {
		super();
	}

	public Combobox(String value, String text) {
		super();
		this.value = value;
		this.text = text;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
}
