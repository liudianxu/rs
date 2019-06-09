package com.crm.service.customerinfo.impl;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.service.customerinfo.CustomerInfoService;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;

/**
 * 客户信息服务接口实现类
 * @author chenglongw
 *
 */
public class CustomerInfoServiceImpl implements CustomerInfoService {

	/**
	 * 分页列表
	 */
	@Override
	public DataGrid<CustomerInfo> selectPage(Map<String, String> params, Page<CustomerInfo> page) {
		DataGrid<CustomerInfo> datagrid = new DataGrid<>();
		StringBuffer sql = new StringBuffer();
		sql.append("select * from crm_customer_info where 1=1 ");
		if(StringUtils.isNotBlank(params.get("customerName"))){
			sql.append(" and customer_name like '%").append(params.get("customerName")).append("%' ");
		}
		sql.append("order by create_time desc ");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		Page<CustomerInfo> customerInfos = CustomerInfo.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		
		datagrid.setCount(customerInfos.getTotalRow());
		datagrid.setData(customerInfos.getList());
		
		return datagrid;
	}

	/**
	 * 新增
	 */
	@Override
	public CustomerInfo add(CustomerInfo customerInfo) {
		if(customerInfo.save()) {
			return customerInfo;
		}
		
		return null;
	}

	/**
	 * 更新
	 */
	@Override
	public CustomerInfo update(CustomerInfo customerInfo) {
		if(customerInfo.update()) {
			return customerInfo;
		}
		
		return null;
	}

	/**
	 * 删除
	 */
	@Override
	public boolean delete(Long id) {
		return CustomerInfo.dao.deleteById(id);
	}

	/**
	 * 获取集合
	 */
	@Override
	public List<CustomerInfo> selectList() {
		return CustomerInfo.dao.find("select * from crm_customer_info");
	}

	@Override
	public List<CustomerInfo> findByGroupId(Long id) {
		return CustomerInfo.dao.find("select * from crm_customer_info where group_id = ?",id);
	}

}
