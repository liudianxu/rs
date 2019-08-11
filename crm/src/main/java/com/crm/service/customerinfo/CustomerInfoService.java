package com.crm.service.customerinfo;

import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.jfinal.plugin.activerecord.Page;

/**
 * 客户信息服务类接口
 * @author chenglongw
 *
 */
public interface CustomerInfoService {

	/**
	 *  列表查询
	 * @param params
	 * @param page
	 * @param customerIds 
	 * @return
	 */
	DataGrid<CustomerInfo> selectPage(Map<String, String> params, Page<CustomerInfo> page, String customerIds);
	
	/**
	 * 新增
	 * @param customerInfo
	 * @return
	 */
	CustomerInfo add(CustomerInfo customerInfo);

	/**
	 * 更新
	 * @param customerInfo
	 * @return
	 */
	CustomerInfo update(CustomerInfo customerInfo);

	/**
	 * 删除
	 * @param id
	 * @return
	 */
	boolean delete(Long id);
	
	/**
	 * 获取集合
	 * @return
	 */
	List<CustomerInfo> selectList();

	/**
	 * 根据集团id获取单位
	 * @param id
	 * @return
	 */
	List<CustomerInfo> findByGroupId(Long id);

	/**
	 * 设置导入属性
	 * @param lo
	 */
	void setSaveInfo( CustomerInfo customerInfo,List<Object> lo);

	/**
	 * 根据名称获取
	 * @param string
	 * @return
	 */
	CustomerInfo findByName(String string);

	List<CustomerInfo> findByIds(String customerIds);
}
