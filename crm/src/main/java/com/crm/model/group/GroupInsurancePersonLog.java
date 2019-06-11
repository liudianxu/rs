package com.crm.model.group;

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


	public static DataGrid<GroupInsurancePersonLog> selectPage(int num,int size,Long id) {
		Page<GroupInsurancePersonLog> page = new Page<>();
		DataGrid<GroupInsurancePersonLog> dataGrid = new DataGrid<>();
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select  g.*,c.customer_name as customerName from crm_group_insurance_person_log g ");
		sql.append("left join crm_customer_info c on c.id =g.customer_id ");
		sql.append("where 1=1 and g.order_id = "+id+"");
		sql.append(" order by g.create_time desc ");
		sqlPara.setSql(sql.toString());
		page = GroupInsurancePersonLog.dao.paginate(num, size, sqlPara);
		dataGrid.setCount(page.getTotalRow());
		dataGrid.setData(page.getList());
		return dataGrid;
	}
}
