package com.crm.model.system;

import com.jfinal.plugin.activerecord.Model;

public class Role extends Model<Role> {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1673801490254985863L;

	public static final Role dao = new Role();
	
	private int checked;

	public int getChecked() {
		return checked;
	}

	public void setChecked(int checked) {
		this.checked = checked;
	}
	
	
}
