package com.crm.service.system;

import java.util.List;

import com.crm.component.Combobox;


/**
 * 
 * 
 * @version: 1.00.00
 * @description: 参数服务接口类
 * @date: 2018年7月10日 上午10:25:44
 * @history:
 */
public interface SysParameterService {

	/**
	 * 根据参数ID查询
	 * sort排序
	 * @param parameterId
	 * @param sort
	 * @return
	 */
	List<Combobox> selectByParameterId(String parameterId, String sort);

}
