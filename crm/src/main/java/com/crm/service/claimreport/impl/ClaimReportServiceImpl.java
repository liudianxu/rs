package com.crm.service.claimreport.impl;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.claimreport.ClaimReport;
import com.crm.service.claimreport.ClaimReportService;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;

/**
 * 理赔管理服务接口实现类
 * @author chenglongw
 *
 */
public class ClaimReportServiceImpl implements ClaimReportService {

	/**
	 * 分页列表
	 */
	@Override
	public DataGrid<ClaimReport> selectPage(Map<String, String> params, Page<ClaimReport> page) {
		DataGrid<ClaimReport> datagrid = new DataGrid<>();
		StringBuffer sql = new StringBuffer();
		sql.append("select r.*,c.customer_name as customerName from crm_claim_report r");
		sql.append("left join crm_customer_info c on c.id=r.customer_id ");
		sql.append("where 1=1 ");
		if(StringUtils.isNotBlank(params.get("customerName"))){
			sql.append(" and c.customer_name like '%").append(params.get("customerName")).append("%' ");
		}
		if(StringUtils.isNotBlank(params.get("certNo"))){
			sql.append(" and r.cert_no ="+params.get("certNo"));
		}
		if(StringUtils.isNotBlank(params.get("persionName"))){
			sql.append(" and r.persion_name like '%").append(params.get("persionName")).append("%' ");
		}
		if(StringUtils.isNotBlank(params.get("policyNum"))){
			sql.append(" and r.policy_num ="+params.get("policyNum"));
		}
		if(StringUtils.isNotBlank(params.get("status"))){
			sql.append(" and r.status ="+params.get("status"));
		}
		sql.append(" order by create_time desc ");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		Page<ClaimReport> claimReports = ClaimReport.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		
		datagrid.setCount(claimReports.getTotalRow());
		datagrid.setData(claimReports.getList());
		
		return datagrid;
	}

	/**
	 * 新增
	 */
	@Override
	public ClaimReport add(ClaimReport claimReport) {
		if(claimReport.save()) {
			return claimReport;
		}
		return null;
	}

	/**
	 * 更新
	 */
	@Override
	public ClaimReport update(ClaimReport claimReport) {
		if(claimReport.update()) {
			return claimReport;
		}
		return null;
	}

	/**
	 * 删除
	 */
	@Override
	public boolean delete(Long id) {
		return ClaimReport.dao.deleteById(id);
	}

	/**
	 * 获取集合
	 */
	@Override
	public List<ClaimReport> selectList() {
		return ClaimReport.dao.find("select * from crm_claim_report");
	}

}
