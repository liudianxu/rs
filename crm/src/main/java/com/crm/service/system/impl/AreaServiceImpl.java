package com.crm.service.system.impl;

import java.util.List;

import com.crm.model.system.Area;
import com.crm.service.system.AreaService;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:地区接口实现类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月14日 
 * @history:
 */
public class AreaServiceImpl implements AreaService{

	@Override
	public List<Area> findRoots() {
		return Area.dao.find("select * from crm_area  where parent_id is null order by orders asc ");
	}

	@Override
	public List<Area> getChildren(Long id) {
		return Area.dao.find("select * from crm_area  where parent_id =? order by orders asc ",id);
	}

}
