package com.crm.model.system;

import com.jfinal.plugin.activerecord.Model;

public class Session extends Model<Session> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1810003183566122002L;

	public static final Session dao = new Session();
	
	/**
	 * 登录会话是否已过期
	 */
	public boolean isExpired() {
		return getLong("expire_at") < System.currentTimeMillis();
	}

	/**
	 * 登录会话是否未过期
	 */
	public boolean notExpired() {
		return ! isExpired();
	}
}
