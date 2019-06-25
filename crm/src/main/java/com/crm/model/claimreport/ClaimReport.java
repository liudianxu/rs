package com.crm.model.claimreport;

import java.io.Serializable;

import com.jfinal.plugin.activerecord.Model;

public class ClaimReport extends Model<ClaimReport> implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5617670649269641613L;
	
	public static final ClaimReport dao = new ClaimReport();

}
