package com.crm.service.group.impl;

import java.util.List;

import com.crm.model.group.GroupInsuranceGuarantee;
import com.crm.service.group.GroupInsuranceGuaranteeService;
import com.jfinal.plugin.activerecord.Db;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险保障详情接口实现类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */
public class GroupInsuranceGuaranteeServiceImpl implements GroupInsuranceGuaranteeService{

	@Override
	public List<GroupInsuranceGuarantee> findByOrderId(Long orderId) {
		return GroupInsuranceGuarantee.dao.find("select * from crm_group_insurance_guarantee where order_id=? ",orderId);
	}

	@Override
	public void deleteByOrderId(Long hiddenOrderIdForGuarantee) {
      Db.delete("delete from crm_group_insurance_guarantee where order_id = ? ", hiddenOrderIdForGuarantee);		
	}

	@Override
	public GroupInsuranceGuarantee findByOrderIdAndPlan(Long hiddenOrderIdForImport, String name) {
		return GroupInsuranceGuarantee.dao.findFirst("select * from crm_group_insurance_guarantee where order_id=? and name =? ",hiddenOrderIdForImport,name);
	}

}
