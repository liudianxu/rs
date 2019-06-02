package com.crm.service.brand;

import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.model.brand.Brand;
import com.jfinal.plugin.activerecord.Page;
/**
 * 
 * 
 * @version: 1.00.00
 * @description: 品牌业务类接口
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年1月24日 
 * @history:
 */
public interface BrandService {

	/**
	 *  列表查询
	 * @param params
	 * @param page
	 * @return
	 */
	DataGrid<Brand> selectPage(Map<String, String> params, Page<Brand> page);
	
	/**
	 * 新增
	 * @param brand
	 * @return
	 */
	Brand add(Brand brand);

	/**
	 * 更新
	 * @param brand
	 * @return
	 */
	Brand update(Brand brand);

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
	List<Brand> selectList();
}
