package com.crm.service.group.impl;

import java.util.List;

import com.crm.model.group.GroupInsurancePerson;
import com.crm.service.group.GroupInsurancePersonService;
import com.jfinal.plugin.activerecord.Db;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险人员接口实现类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */
public class GroupInsurancePersonServiceImpl implements GroupInsurancePersonService{

	@Override
	public List<GroupInsurancePerson> findByOrderId(Long orderId) {
		return GroupInsurancePerson.dao.find("select p.*,o.name as guaranteeName from crm_group_insurance_person p left join crm_group_insurance_guarantee o on p.guarantee_id=o.id where p.order_id=? ",orderId);
	}

	@Override
	public boolean existsGuatantee(Long hiddenOrderIdForGuarantee) {
		//GroupInsuranceCompany groupInsuranceCompany = GroupInsuranceCompany.dao.findFirst("select g.* from crm_group_insurance_guarantee g left join crm_group_insurance_orders o on o.id= g.order_id  where o.id = ? ",hiddenOrderIdForGuarantee);
		//return groupInsuranceCompany==null?false:true;
		return false;
	}

	@Override
	public void delete(String ids) {
		Db.update("delete from crm_group_insurance_person where id in("+ids+")");
	}

	@Override
	public List<GroupInsurancePerson> findByIdNum(String idNum) {
		return GroupInsurancePerson.dao.find("select * from crm_group_insurance_person where id_num=? ",idNum);
	}

	@Override
	public GroupInsurancePerson findByIdNumAndOrderId(String idNum, Object orderId) {
		return GroupInsurancePerson.dao.findFirst("select * from crm_group_insurance_person where id_num=? and order_id=? ", idNum,orderId);
	}

	@Override
	public void deleteByOrderId(Long hiddenOrderIdForGuarantee3) {
		Db.delete("delete from crm_group_insurance_person where order_id = ? ", hiddenOrderIdForGuarantee3);
	}

}
