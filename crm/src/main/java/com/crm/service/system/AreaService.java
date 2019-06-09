package com.crm.service.system;

import java.util.List;

import com.crm.model.system.Area;



/**
 * 
 * 
 * @version: 1.00.00
 * @description:地区接口类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月14日 
 * @history:
 */
public interface AreaService {

	List<Area> findRoots();

	List<Area> getChildren(Long id);

}
