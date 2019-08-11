package com.crm.service.brand.impl;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.brand.Brand;
import com.crm.service.brand.BrandService;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;
/**
 * 
 * 
 * @version: 1.00.00
 * @description: 品牌业务类接口实现类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年1月24日 
 * @history:
 */
public class BrandServiceImpl implements BrandService {

	/**
	 * 分页列表
	 */
	@Override
	public DataGrid<Brand> selectPage(Map<String, String> params, Page<Brand> page) {
		DataGrid<Brand> datagrid = new DataGrid<>();
		StringBuffer sql = new StringBuffer();
		sql.append("select * from crm_brand  where 1=1 ");
		if(StringUtils.isNotBlank(params.get("name"))){
			sql.append(" and name like '%").append(params.get("name")).append("%' ");
		}
		sql.append("order by create_time desc ");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		Page<Brand> brands = Brand.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		
		datagrid.setCount(brands.getTotalRow());
		datagrid.setData(brands.getList());
		
		return datagrid;
	}

	/**
	 * 新增
	 */
	@Override
	public Brand add(Brand brand) {
		if(brand.save()) {
			return brand;
		}
		
		return null;
	}

	/**
	 * 更新
	 */
	@Override
	public Brand update(Brand brand) {
		if(brand.update()) {
			return brand;
		}
		
		return null;
	}

	/**
	 * 删除
	 */
	@Override
	public boolean delete(Long id) {
		return Brand.dao.deleteById(id);
	}

	/**
	 * 获取集合
	 */
	@Override
	public List<Brand> selectList() {
		return Brand.dao.find("select * from crm_brand  ");
	}

	@Override
	public Brand findByName(String string) {
		return Brand.dao.findFirst("select * from crm_brand  where name = ?",string);
	}

}
