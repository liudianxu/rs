package com.crm.model.group;

import java.io.Serializable;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;


/**
 * 保障方案详情
 * 
 * @version: 1.00.00
 * @description: 
 * @copyright: Copyright (c) 2017 易联众  All Rights Reserved
 * @company: 易联众健康医疗控股有限公司
 * @author: Rock
 * @date: 2017年9月26日 下午2:16:21
 * @history:
 */
public class GuaranteeDetail implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1775496158430948948L;

	
	
	public GuaranteeDetail(String item, String value) {
		super();
		this.item = item;
		this.value = value;
	}

	/**
	 * 保障项目
	 */
	private String item;
	
	/**
	 * 保障额度（区间）
	 */
	private String quota;
	
	/**
	 * 保障说明
	 */
	private String description;
	
	/**
	 * 方案保额
	 */
	private String value;

	/**
	 * 获取保障项目名称
	 * 
	 * @return 保障项目名称
	 */
	public String getItem() {
		return item;
	}

	/**
	 * 设置保障项目名称
	 * 
	 * @param name
	 * 			保障项目名称
	 */
	public void setItem(String item) {
		this.item = item;
	}

	/**
	 * 获取保障额度
	 * 
	 * @return 保障额度
	 */
	public String getQuota() {
		return quota;
	}

	/**
	 * 设置保障额度
	 * 
	 * @param quota
	 * 			保障额度
	 */
	public void setQuota(String quota) {
		this.quota = quota;
	}

	/**
	 * 获取保障说明
	 * 
	 * @return 保障说明
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * 设置保障说明
	 * 
	 * @param desc
	 * 			保障说明
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * 获取方案保额
	 * 
	 * @return 方案保额
	 */
	public String getValue() {
		return value;
	}

	/**
	 * 设置方案保额
	 * 
	 * @param value
	 * 			方案保额
	 */
	public void setValue(String value) {
		this.value = value;
	}
	
	/**
	 * 重写equals方法
	 * 
	 * @param obj
	 *            对象
	 * @return 是否相等
	 */
	@Override
	public boolean equals(Object obj) {
		return EqualsBuilder.reflectionEquals(this, obj);
	}

	/**
	 * 重写hashCode方法
	 * 
	 * @return HashCode
	 */
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}
}
