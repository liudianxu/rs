package com.crm.model.group;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.jfinal.core.paragetter.DateGetter;
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
		sql.append("where 1=1 ");
		sqlPara.setSql(sql.toString());
		page = GroupInsurancePlan.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		dataGrid.setCount(page.getTotalRow());
		dataGrid.setData(page.getList());
	return dataGrid;
	}

}
