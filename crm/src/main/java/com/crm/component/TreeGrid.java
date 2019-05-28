package com.crm.component;

import java.util.ArrayList;
import java.util.List;

public class TreeGrid<T> {
	private int code = 0;
	private String tip;
	private int count = 0;
	private List<T> data = new ArrayList<T>();
	
	public TreeGrid() {
	}
	public TreeGrid(int code,String tip, int count, List<T> data) {
		super();
		this.code = code;
		this.tip = tip;
		this.count = count;
		this.data = data;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
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
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	
	
}
