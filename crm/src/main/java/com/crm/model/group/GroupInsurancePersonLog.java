package com.crm.model.group;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;

public class GroupInsurancePersonLog extends Model<GroupInsurancePersonLog>{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static final GroupInsurancePersonLog dao = new GroupInsurancePersonLog();


	public static DataGrid<GroupInsurancePersonLog> selectPage(int num,int size,String customerName,
			String policyNum,String name,String createTime,String policyEffectiveDate,String insurance_type, String customerIds,String orderId) {
		Page<GroupInsurancePersonLog> page = new Page<>();
		DataGrid<GroupInsurancePersonLog> dataGrid = new DataGrid<>();
		String createBeginTime = null;
		String createEndTime = null;
		String policyEffectiveBeginDate = null;
		String policyEffectiveEndDate = null;
		if(StringUtils.isNotBlank(createTime)){
			String[] createTimeStr = createTime.split("~");
			createBeginTime = createTimeStr[0]+"00:00:00";
			createEndTime = createTimeStr[1]+" 23:59:59";
		}
		if(StringUtils.isNotBlank(policyEffectiveDate)){
			String[] policyEffectiveDateStr = policyEffectiveDate.split("~");
			policyEffectiveBeginDate = policyEffectiveDateStr[0]+"00:00:00";
			policyEffectiveEndDate = policyEffectiveDateStr[1]+" 23:59:59";
		}
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select  g.*,c.customer_name as customerName from crm_group_insurance_person_log g ");
		sql.append("left join crm_customer_info c on c.id =g.customer_id left join crm_group_insurance_orders o on o.id=g.order_id where 1=1");
		if(StringUtils.isNotBlank(customerName)){
			sql.append(" and c.customer_name like '%").append(customerName + "%' ");
		}
		if(StringUtils.isNotBlank(customerIds)){
			sql.append(" and c.id in ("+customerIds+")");
		}
		if(StringUtils.isNotBlank(policyNum)){
			sql.append(" and g.policy_num like '%").append(policyNum + "%' ");
		}
		if(StringUtils.isNotBlank(name)){
			sql.append(" and g.name like '%").append(name + "%' ");
		}
		if(StringUtils.isNotBlank(insurance_type)){
			sql.append(" and o.insurance_type = "+insurance_type);
		}
		if(StringUtils.isNotBlank(orderId)){
			sql.append(" and o.id = "+orderId);
		}
		if(StringUtils.isNotBlank(createBeginTime)&&StringUtils.isNotBlank(createEndTime)){
			sql.append(" and g.create_time > '"+createBeginTime+"' and g.create_time <'"+createEndTime+"'");
		}
		if(StringUtils.isNotBlank(policyEffectiveBeginDate)&&StringUtils.isNotBlank(policyEffectiveEndDate)){
			sql.append(" and g.policy_effective_date > '"+policyEffectiveBeginDate+"' and g.policy_effective_date <'"+policyEffectiveEndDate+"'");
		}
		sql.append(" order by g.create_time desc ");
		sqlPara.setSql(sql.toString());
		page = GroupInsurancePersonLog.dao.paginate(num, size, sqlPara);
		dataGrid.setCount(page.getTotalRow());
		dataGrid.setData(page.getList());
		return dataGrid;
	}


	public static List<GroupInsurancePersonLog> findByOrderId(Long id) {
		return GroupInsurancePersonLog.dao.find("select l.*,p.id_num as id_num,p.job_type as job_type,p.gender as gender from crm_group_insurance_person_log l left join crm_group_insurance_person p on p.id =l.person_id where l.order_id = ?",id);
	}
}
