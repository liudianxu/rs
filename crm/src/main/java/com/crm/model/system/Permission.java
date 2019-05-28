package com.crm.model.system;


import java.util.List;

import com.jfinal.plugin.activerecord.Model;

public class Permission extends Model<Permission> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2863714909193594273L;

	public static final Permission dao = new Permission();
	
	private List<Permission> list;

	public List<Permission> getList() {
		return list;
	}

	public void setList(List<Permission> list) {
		this.list = list;
	}
	
	
	
}
