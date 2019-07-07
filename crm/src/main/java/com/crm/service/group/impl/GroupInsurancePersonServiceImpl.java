package com.crm.service.group.impl;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.service.group.GroupInsurancePersonService;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;

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
	public List<GroupInsurancePerson> findByPolicyNum(String policyNum) {
		return GroupInsurancePerson.dao.find("select * from crm_group_insurance_person where policy_num=? ",policyNum);
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

	@Override
	public DataGrid<GroupInsurancePerson> selectPage(Map<String, String> map, Page<GroupInsurancePerson> page) {
		DataGrid<GroupInsurancePerson> dataGrid = new DataGrid<>();
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select p.*,c.customer_name as customerName,o.insurance_type as insuranceType from crm_group_insurance_person p ");
		sql.append("left join crm_group_insurance_orders o on o.id=p.order_id ");
		sql.append("left join crm_customer_info c on c.id=o.insure_customer_id ");
		sql.append("where 1=1 ");
		if(StringUtils.isNotBlank(map.get("name"))){
			sql.append(" and p.name like '%").append(map.get("name")).append("%' ");
		}
		if(StringUtils.isNotBlank(map.get("id_num"))){
			sql.append(" and p.id_num like '%").append(map.get("id_num")).append("%' ");
		}
		if(StringUtils.isNotBlank(map.get("status"))){
			sql.append(" and p.status = "+map.get("status"));
		}
		if(StringUtils.isNotBlank(map.get("insurance_type"))){
			sql.append(" and o.insurance_type = "+map.get("insurance_type"));
		}
		
		if(StringUtils.isNotBlank(map.get("customer_name"))){
			sql.append(" and c.customer_name like '%").append(map.get("customer_name")).append("%' ");
		}
		if(StringUtils.isNotBlank(map.get("policy_num"))){
			sql.append(" and p.policy_num like '%").append(map.get("policy_num")).append("%' ");
		}
		if(StringUtils.isNotBlank(map.get("orderId"))){
			sql.append(" and o.id= "+map.get("orderId"));
		}
		sql.append(" order by o.create_time desc ");
		sqlPara.setSql(sql.toString());
		page = GroupInsurancePerson.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		dataGrid.setCount(page.getTotalRow());
		dataGrid.setData(page.getList());
	return dataGrid;
	}

}
