package com.crm.controller.common;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.controller.admin.BaseController;
import com.crm.model.system.Area;
import com.crm.service.system.AreaService;
import com.jfinal.aop.Inject;

public class AreaController extends BaseController<Area>{
     @Inject
	 private AreaService areaService;
	/**
	 * 地区
	 */
	public void query(Long parentId) {
		List<Map<String, Object>> data = new ArrayList<>();
		Area parent = Area.dao.findById(parentId);
		Collection<Area> areas  = new ArrayList<>();
		if(parent!=null) {
		 areas =areaService.getChildren((Long)parent.get("id"));
		}
		else {
			 areas =areaService.findRoots();
		}
		for (Area area : areas) {
			Map<String, Object> item = new HashMap<>();
			item.put("name", area.get("name"));
			item.put("value", area.get("id"));
			data.add(item);
		}
		renderJson(data);
	}
	
}
