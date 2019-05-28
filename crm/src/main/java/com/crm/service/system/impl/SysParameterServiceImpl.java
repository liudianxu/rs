package com.crm.service.system.impl;

import java.util.ArrayList;
import java.util.List;

import com.crm.component.Combobox;
import com.crm.model.system.SysParameter;
import com.crm.service.system.SysParameterService;
import com.jfinal.kit.StrKit;

/**
 * 
 * 
 * @version: 1.00.00
 * @description: 参数服务实现类
 * @date: 2018年7月10日 上午10:28:20
 * @history:
 */
public class SysParameterServiceImpl implements SysParameterService {

	@Override
	public List<Combobox> selectByParameterId(String parameterId, String sort) {
		String sql = "select param_text, param_value from sys_config where param_id='" + parameterId + "'";
		if(StrKit.notBlank(sort)) {
			if(StrKit.slowEquals("asc", sort)) {
				sql += " order by sort asc";
			} else if(StrKit.slowEquals("desc", sort)) {
				sql += " order by sort desc";
			}
		}
		List<SysParameter> parameters = SysParameter.dao.find(sql);
		List<Combobox> comboboxes = new ArrayList<>();
		if(parameters != null && parameters.size() > 0) {
			for(SysParameter param : parameters) {
				Combobox combobox = new Combobox();
				combobox.setText(param.getStr("param_text"));
				combobox.setValue(param.getStr("param_value"));
				
				comboboxes.add(combobox);
			}
		}
		
		return comboboxes;
	}

}
