package com.crm.util;

import java.util.Map;
import java.util.Map.Entry;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Table;
import com.jfinal.plugin.activerecord.TableMapping;

public class ModelUtil {

	public static Object json2Model(Class<? extends Model> modelClass, String json) {
		Map<String, Object> map = (Map<String, Object>)JSON.parse(json);
		Model<?> model = null;
		try {
			Table table = TableMapping.me().getTable((Class<? extends Model>) modelClass);
			for(Entry<String, Object> entry : map.entrySet()) {
				Class clazz = table.getColumnType(entry.getKey());
				Object value = entry.getValue();
				if(value instanceof JSONArray) {
					entry.setValue(((JSONArray)entry.getValue()).toJSONString());
				}
				
				if(clazz.getSimpleName().equals("Integer")) {
					entry.setValue(StrKit.isBlank(value.toString()) ? null : Integer.parseInt(value.toString()));
				} else if(clazz.getSimpleName().equals("Long")) {
					entry.setValue(StrKit.isBlank(value.toString()) ? null : Long.parseLong(value.toString()));
				} else if(clazz.getSimpleName().equals("Double")) {
					entry.setValue(StrKit.isBlank(value.toString()) ? null : Double.parseDouble(value.toString()));
				}
			}
			
			Object obj = modelClass.newInstance();
			model = (Model<?>) obj;
			model._setAttrs(map);
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		
		
		return model;
	}
}
