package com.crm.model.group;

import java.util.List;

import com.crm.component.DataGrid;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;

public class GroupInsurancePlan extends Model<GroupInsurancePlan>{

	public final static GroupInsurancePlan dao=new GroupInsurancePlan();
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	
	public static DataGrid<GroupInsurancePlan> selectPage(Page page) {
		DataGrid<GroupInsurancePlan> dataGrid = new DataGrid<>();
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select * from crm_group_insurance_plan  ");
		sql.append("where 1=1 and is_del = 0  order by create_time desc ");
		sqlPara.setSql(sql.toString());
		page = GroupInsurancePlan.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		dataGrid.setCount(page.getTotalRow());
		dataGrid.setData(page.getList());
	return dataGrid;
	}



	public static List<GroupInsurancePlan> findList() {
		SqlPara sqlPara = new SqlPara();
		StringBuffer sql = new StringBuffer();
		sql.append("select * from crm_group_insurance_plan  ");
		sql.append("where 1=1 and is_del = 0 ");
		sqlPara.setSql(sql.toString());
		return GroupInsurancePlan.dao.find(sqlPara);
	}



	public static GroupInsurancePlan findBySn(String string) {
		return GroupInsurancePlan.dao.findFirst("select * from crm_group_insurance_plan   where sn = ?  and is_del = 0 ",string);
	}

}
