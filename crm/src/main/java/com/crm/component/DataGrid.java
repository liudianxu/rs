package com.crm.component;

import java.util.ArrayList;
import java.util.List;

public class DataGrid<T> {
	
	private int code = 0;  
	private String msg;
	private int count = 0;   //计数
	private List<T> data = new ArrayList<T>();  //数据
	
	public DataGrid() {
		
	}
	
	public DataGrid(int code, String msg, int count, List<T> data) {
		super();
		this.code = code;
		this.msg = msg;
		this.count = count;
		this.data = data;
	}

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

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}
	
}
