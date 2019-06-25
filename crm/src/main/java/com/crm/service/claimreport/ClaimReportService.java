package com.crm.service.claimreport;

import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.model.claimreport.ClaimReport;
import com.jfinal.plugin.activerecord.Page;

/**
 * 理赔管理服务类接口
 * @author chenglongw
 *
 */
public interface ClaimReportService {

	/**
	 *  列表查询
	 * @param params
	 * @param page
	 * @return
	 */
	DataGrid<ClaimReport> selectPage(Map<String, String> params, Page<ClaimReport> page);
	
	/**
	 * 新增
	 * @param ClaimReport
	 * @return
	 */
	ClaimReport add(ClaimReport claimReport);

	/**
	 * 更新
	 * @param ClaimReport
	 * @return
	 */
	ClaimReport update(ClaimReport claimReport);

	/**
	 * 删除
	 * @param id
	 * @returnO
	 */
	boolean delete(Long id);
	
	/**
	 * 获取集合
	 * @return
	 */
	List<ClaimReport> selectList();
}
