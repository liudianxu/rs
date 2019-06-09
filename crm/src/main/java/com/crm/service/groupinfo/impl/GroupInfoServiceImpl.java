package com.crm.service.groupinfo.impl;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.service.groupinfo.GroupInfoService;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;

/**
 * 客户信息服务接口实现类
 * @author chenglongw
 *
 */
public class GroupInfoServiceImpl implements GroupInfoService {

	/**
	 * 分页列表
	 */
	@Override
	public DataGrid<GroupInfo> selectPage(Map<String, String> params, Page<GroupInfo> page) {
		DataGrid<GroupInfo> datagrid = new DataGrid<>();
		StringBuffer sql = new StringBuffer();
		sql.append("select * from crm_group_info where 1=1 ");
		if(StringUtils.isNotBlank(params.get("groupName"))){
			sql.append(" and group_name like '%").append(params.get("groupName")).append("%' ");
		}
		if(StringUtils.isNotBlank(params.get("certNo"))){
			sql.append(" and cert_no ="+params.get("certNo"));
		}
		sql.append("order by create_time desc ");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		Page<GroupInfo> groupInfos = GroupInfo.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		
		datagrid.setCount(groupInfos.getTotalRow());
		datagrid.setData(groupInfos.getList());
		
		return datagrid;
	}

	/**
	 * 新增
	 */
	@Override
	public GroupInfo add(GroupInfo groupInfo) {
		if(groupInfo.save()) {
			return groupInfo;
		}
		
		return null;
	}

	/**
	 * 更新
	 */
	@Override
	public GroupInfo update(GroupInfo groupInfo) {
		if(groupInfo.update()) {
			return groupInfo;
		}
		
		return null;
	}

	/**
	 * 删除
	 */
	@Override
	public boolean delete(Long id) {
		return GroupInfo.dao.deleteById(id);
	}

	/**
	 * 获取集合
	 */
	@Override
	public List<GroupInfo> selectList() {
		return GroupInfo.dao.find("select * from crm_group_info");
	}

}
