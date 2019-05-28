package com.crm.model.system;

import com.jfinal.plugin.activerecord.Model;
import com.util.Constant;

public class User extends Model<User> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2657161679761320119L;
	
	public static final User dao = new User();
	
	public boolean isStatusOk() {
		return get("status").toString().equals(Constant.ADMIN_STATUS_OK);
	}
	
	public boolean isStatusLock() {
		return get("status").toString().equals(Constant.ADMIN_STATUS_LOCK);
	}

	public User removeSensitiveInfo() {
		remove("password", "salt");
		return this;
	}
}
