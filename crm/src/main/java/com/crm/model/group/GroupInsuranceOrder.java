package com.crm.model.group;
/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险订单实体类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */

import com.jfinal.plugin.activerecord.Model;

public class GroupInsuranceOrder extends Model<GroupInsuranceOrder>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public static final GroupInsuranceOrder dao =new GroupInsuranceOrder();

	
	/**
	 * 团险订单状态(枚举)
	 */
	public enum Status {
		/**
		 * 投保单未完成
		 */
		unfinished,

		/**
		 * 待支付
		 */
		pendingPayment,

		/**
		 * 已出单
		 */
		issuePolicy,

		/**
		 * 保障中
		 */
		guarantee,

		/**
		 * 已失效
		 */
		invalid,

		/**
		 * 已退保
		 */
		surrender,

		/**
		 * 已取消
		 */
		canceled
	}
	
	
	/**
	 * 订单状态(字符串)
	 */
	private String statusStr;

    /**
     * 订单类型(字符串)
     */
	private String typeStr;
	
	/**
	 * 险种类型(字符串)
	 */
	private String insuranceTypeStr;
	
	public String getStatusStr() {
		if(this.get("status")!=null) {
		switch ((int)this.get("status")) {
		case 0:
			statusStr= "投保单未完成";
			break;
		case 1:
			statusStr= "待支付";
			break;
		case 2:
			statusStr= "已出单";
			break;
		case 3:
			statusStr= "保障中";
			break;
		case 4:
			statusStr= "已失效";
			break;
		case 5:
			statusStr= "已退保";
			break;
		case 6:
			statusStr= "已取消";
			break;
		default:
			break;
		}
		}
		return statusStr;
	}

	public void setStatusStr(String statusStr) {
		this.statusStr = statusStr;
	}

	public String getTypeStr() {
		if(this.get("type")!=null) {
		switch ((int)this.get("type")) {
			case 0:
				typeStr ="线上";
				break;
			case 1:
				typeStr ="线下";
				break;	
		    default:
			break;
		}
		}
		return typeStr;
	}


	public void setTypeStr(String typeStr) {
		this.typeStr = typeStr;
	}

	
	public String getInsuranceTypeStr() {
		if(this.get("insurance_type")!=null) {
			switch ((int)this.get("insurance_type")) {
				case 0:
					insuranceTypeStr ="雇主责任险";
					break;
				case 1:
					insuranceTypeStr ="年金保险";
					break;	
				case 2:
					insuranceTypeStr ="补充医疗";
					break;	
				case 3:
					insuranceTypeStr ="团体意外险";
					break;	
				case 4:
					insuranceTypeStr ="其他";
					break;	
			    default:
				break;
			}
		}
		return insuranceTypeStr;
	}

	public void setInsuranceTypeStr(String insuranceTypeStr) {
		this.insuranceTypeStr = insuranceTypeStr;
	}
	


	
	
}
