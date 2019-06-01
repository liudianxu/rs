package com.crm.model.group;

import java.util.Map;

import com.crm.util.JsonUtil;
import com.jfinal.plugin.activerecord.Model;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险保障详情实体类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */
public class GroupInsuranceGuarantee extends Model<GroupInsuranceGuarantee>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public static final GroupInsuranceGuarantee dao =new GroupInsuranceGuarantee();
	
	@Override
	protected Map<String,Object> _getAttrs(){
		Map<String,Object> attrs = super._getAttrs();
		 //投保条件
		if(get("details")!=null) {
		attrs.put("details",JsonUtil.jsonToList(get("details"), GuaranteeDetail.class));
		}
		return attrs;
	}

}
