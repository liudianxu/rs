package com.crm.model.group;

import java.util.List;

import com.jfinal.plugin.activerecord.Model;
/**
 * 
 * 
 * @version: 1.00.00
 * @description:保障方案（行）
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月12日 
 * @history:
 */
public class Guarantee extends Model<Guarantee>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String item;
	
	private String name;
	
	private String quota;
	
	private String description;
	
	private List<String> plan;
	
	private String value;
	
	private String claimInfo;
	
	private String tip;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getQuota() {
		return quota;
	}

	public void setQuota(String quota) {
		this.quota = quota;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<String> getPlan() {
		return plan;
	}

	public void setPlan(List<String> plan) {
		this.plan = plan;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getClaimInfo() {
		return claimInfo;
	}

	public void setClaimInfo(String claimInfo) {
		this.claimInfo = claimInfo;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}
	
	
}
