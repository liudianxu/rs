package com.crm.model.system;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.plugin.activerecord.Model;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:地区实体类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月14日 
 * @history:
 */
public class Area extends Model<Area>{
	/**
	 * 树路径分隔符
	 */
	public static final String TREE_PATH_SEPARATOR = ",";
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public static final Area dao = new Area();
	
	
	/**
	 * 获取父级id
	 * @return
	 */
	public Long[] getParentIds() {
		
		String[] parentIds = StringUtils.split(get("treePath"), TREE_PATH_SEPARATOR);
		Long[] result = new Long[parentIds.length];
		for (int i = 0; i < parentIds.length; i++) {
			result[i] = Long.valueOf(parentIds[i]);
		}
		return result;
	}

	/**
	 * 获取本级城市
	 * @return
	 */
	public List<Area> getCitys(){
		Area area= Area.dao.findById(this.getParentIds()[0].longValue());
		return  Area.dao.find("select * from duc_area  where parent_id =? order by orders asc ",area.getLong("id"));
	}
	/**
	 * 获取本级地区
	 * @return
	 */
	public List<Area> getZones(){
		Area area= Area.dao.findById(this.getParentIds()[1].longValue());
		return  Area.dao.find("select * from duc_area  where parent_id =? order by orders asc ",area.getLong("id"));
	}
}
