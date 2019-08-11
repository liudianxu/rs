package com.crm.service.group.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.system.SnService;
import com.jfinal.aop.Inject;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;
import com.crm.model.system.Sn;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险订单接口实现类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */
public class GroupInsuranceOrderServiceImpl implements GroupInsuranceOrderService{
    @Inject
    private SnService snService;
	@Override
	public DataGrid<GroupInsuranceOrder> selectPage(Map<String, String> map, Page<GroupInsuranceOrder> page,String customerIds) {
		DataGrid<GroupInsuranceOrder> dataGrid = new DataGrid<>();
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select o.*,p.name as planName,b.name as BrandName,c.customer_name as customerName,(select count(p.id) from crm_group_insurance_person p where p.order_id=o.id and p.status in (0,1))  as person_num from crm_group_insurance_orders o ");
		sql.append("left join crm_brand b on b.id=o.brand_id ");
		sql.append("left join crm_group_insurance_plan p on p.id=o.plan_id ");
		sql.append("left join crm_customer_info c on c.id=o.insure_customer_id ");
		sql.append("where 1=1 ");
		if(StringUtils.isNotBlank(map.get("order_sn"))){
			sql.append(" and o.order_sn like '%").append(map.get("order_sn")).append("%' ");
		}
		if(StringUtils.isNotBlank(map.get("brand_id"))){
			sql.append(" and o.brand_id = "+map.get("brand_id"));
		}
		if(StringUtils.isNotBlank(map.get("status"))){
			sql.append(" and o.status = "+map.get("status"));
		}
		if(StringUtils.isNotBlank(map.get("policy_num"))){
			sql.append(" and o.policy_num like '%").append(map.get("policy_num")).append("%' ");
		}
		if(StringUtils.isNotBlank(map.get("type"))){
			sql.append(" and o.type = "+map.get("type"));
		}
		if(StringUtils.isNotBlank(map.get("company_name"))){
			sql.append(" and c.customer_name like  '%"+map.get("company_name")+"%'");
		}
		if(StringUtils.isNotBlank(map.get("insurance_type"))){
			sql.append(" and o.insurance_type = "+map.get("insurance_type"));
		}
		if(StringUtils.isNotBlank(map.get("customer_name"))){
			sql.append(" and c.customer_name like '%").append(map.get("customer_name")).append("%' ");
		}
		if(StringUtils.isNotBlank(map.get("policy_effective_date"))){
			sql.append(" and o.policy_effective_date = "+"'"+map.get("policy_effective_date")+" 00:00:00'");
		}
		if(StringUtils.isNotBlank(map.get("policy_expiration_date"))){
			sql.append(" and o.policy_expiration_date = "+"'"+map.get("policy_expiration_date")+" 23:59:59'");
		}
		if(StringUtils.isNotBlank(customerIds)){
			sql.append(" and c.id in ("+customerIds+")");
		}
		sql.append(" order by o.create_time desc ");
		sqlPara.setSql(sql.toString());
		page = GroupInsuranceOrder.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		dataGrid.setCount(page.getTotalRow());
		dataGrid.setData(page.getList());
	return dataGrid;
	}
	
	@Override
	public List<GroupInsuranceOrder> selectAll(String customerIds,String type) {
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select o.*,p.name as planName,b.name as BrandName,c.customer_name as customerName,(select count(p.id) from crm_group_insurance_person p where p.order_id=o.id and p.status in (0,1))  as person_num from crm_group_insurance_orders o ");
		sql.append("left join crm_brand b on b.id=o.brand_id ");
		sql.append("left join crm_group_insurance_plan p on p.id=o.plan_id ");
		sql.append("left join crm_customer_info c on c.id=o.insure_customer_id ");
		sql.append("where 1=1 ");
		if(StringUtils.isNotBlank(customerIds)){
			sql.append(" and c.id in ("+customerIds+")");
		}
		if(StringUtils.isNotBlank(type)){
			sql.append(" and o.insurance_type = "+type);
		}
		sql.append(" order by o.create_time desc ");
		sqlPara.setSql(sql.toString());
		return GroupInsuranceOrder.dao.find(sqlPara);
	}

	@Override
	public GroupInsuranceOrder create(GroupInsuranceOrder order) throws Exception {
		//生成订单号
				order.set("order_sn",snService.generate(Sn.Type.groupInsuranceOrder));
				//设置订单状态
				order.set("create_time", new Date());
				order.save();
				
		return order;
	}

	@Override
	public void update(GroupInsuranceOrder existsOrder) {
		existsOrder.update();
	}

	@Override
	public void delete(Long id) {
		GroupInsuranceOrder.dao.deleteById(id);
	}

	@Override
	public List<GroupInsuranceOrder> queryByCompanyId(Long id) {
		return GroupInsuranceOrder.dao.find("select o.*,b.name as brandName from crm_group_insurance_orders o "
				+ "left join crm_group_insurance_company c on o.company_id=c.id  "
				+ "left join crm_brand b on b.id = brand_id "
				+ " where c.id = ?",id);
	}

	@Override
	public DataGrid<GroupInsuranceOrder> findPage(List<Long> ids, Integer status, Page<GroupInsuranceOrder> page) {
		String idString = StringUtils.join(ids,",");
		DataGrid<GroupInsuranceOrder> dataGrid = new DataGrid<>();
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select o.*,c.name as companyName,b.logo as brandLogo from crm_group_insurance_orders o left join crm_brand b on b.id=o.brand_id  left join crm_group_insurance_company c on c.id =o.company_id where o.id in("+idString+") ");
		if(status!=null) {
			sql.append(" and o.status = "+status+"");
		}
		else {
			sql.append(" and o.status in (2,3,4) ");
		}
		sql.append(" order by o.create_time desc ");
		sqlPara.setSql(sql.toString());
		page = GroupInsuranceOrder.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		dataGrid.setCount(page.getTotalRow());
		dataGrid.setData(page.getList());
		return dataGrid;
	}

	@Override
	public GroupInsuranceOrder findById(Long id) {
		return GroupInsuranceOrder.dao.findFirst("select o.*,i.customer_name,b.logo as companyLogo,b.name as brandName from crm_group_insurance_orders o  left join crm_brand b on b.id=o.brand_id left join crm_customer_info i on i.id = o.insure_customer_id  where o.id = ? ", id);
	}

	@Override
	public List<GroupInsuranceOrder> findListEffectiveItem() {
		return GroupInsuranceOrder.dao.find("select * from crm_group_insurance_orders where status = 2 and policy_effective_date < ?", new Date());
	}

	@Override
	public void effectiveOrder(Long orderId) {
		Db.update("update crm_group_insurance_orders set status= 3 where id = ? ",orderId);
	}

	@Override
	public List<GroupInsuranceOrder> findListExpirationItem() {
		return GroupInsuranceOrder.dao.find("select * from crm_group_insurance_orders where status = 3 and policy_expiration_date < ?", new Date());
	}

	@Override
	public void expirationOrder(Long orderId) {
		Db.update("update crm_group_insurance_orders set status= 4 where id = ? ",orderId);

	}

	@Override
	public GroupInsuranceOrder findByOrderSn(String groupOrderSn) {
		return GroupInsuranceOrder.dao.findFirst("select o.*,b.logo as brandLog,b.name as brandName from crm_group_insurance_orders o left join crm_brand b on b.id = o.brand_id where o.order_sn = ?  ", groupOrderSn);

	}

	@Override
	public boolean isComplete(Long orderId) {
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findFirst("select * from crm_group_insurance_orders where id=? and step_one=1 and step_two=1 and step_three=1 and step_four=1 and step_fifth=1  ", orderId);
		return order==null?false:true;
	}

	@Override
	public List<GroupInsuranceOrder> queryByCustomerId(Long id) {
		return GroupInsuranceOrder.dao.find("select * from crm_group_insurance_orders where insure_customer_id = ?",id);
	}

	@Override
	public GroupInsuranceOrder findByPolicyNum(String string) {
		return GroupInsuranceOrder.dao.findFirst("select * from crm_group_insurance_orders where policy_num = ?",string);
	}

	@Override
	public List<GroupInsuranceOrder> findByGroupId(Long long1) {
		return GroupInsuranceOrder.dao.find("select * from crm_group_insurance_orders where insure_group_id = ?",long1);
	}

}
