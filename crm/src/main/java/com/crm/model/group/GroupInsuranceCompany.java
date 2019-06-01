package com.crm.model.group;

import com.jfinal.plugin.activerecord.Model;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险公司实体类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日
 * @history:
 */
public class GroupInsuranceCompany extends Model<GroupInsuranceCompany> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public final static GroupInsuranceCompany dao = new GroupInsuranceCompany();

	/**
	 * 证件类型(字符串)
	 */
	private String licenceTypeStr;

	public String getLicenceTypeStr() {
		if(this.get("licence_type")!=null) {
		switch ((int) this.get("licence_type")) {
		case 0:
			licenceTypeStr ="营业执照";
			break;
		case 1:
			licenceTypeStr ="组织机构代码";
			break;
		case 2:
			licenceTypeStr ="税务登记证";
			break;

		default:
			break;
		}
		}
		return licenceTypeStr;
	}

	public void setLicenceTypeStr(String licenceTypeStr) {
		this.licenceTypeStr = licenceTypeStr;
	}

}
