package com.crm.service.groupinfo;

import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.model.groupinfo.GroupInfo;
import com.jfinal.plugin.activerecord.Page;

/**
 * 集团信息服务类接口
 * @author chenglongw
 *
 */
public interface GroupInfoService {

	/**
	 *  列表查询
	 * @param params
	 * @param page
	 * @param customerIds 
	 * @return
	 */
	DataGrid<GroupInfo> selectPage(Map<String, String> params, Page<GroupInfo> page, String customerIds);
	
	/**
	 * 新增
	 * @param groupInfo
	 * @return
	 */
	GroupInfo add(GroupInfo groupInfo);

	/**
	 * 更新
	 * @param groupInfo
	 * @return
	 */
	GroupInfo update(GroupInfo groupInfo);

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
	List<GroupInfo> selectList();

	/**
	 * 根据名称获取集团信息
	 * @param string
	 * @return
	 */
	GroupInfo findByName(String string);

	void setSaveInfo(GroupInfo groupInfo, List<Object> lo);

	List<GroupInfo> findByCustomerIds(String substring);
}
