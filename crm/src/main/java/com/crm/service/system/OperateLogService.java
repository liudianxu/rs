package com.crm.service.system;

import java.util.Map;

import com.crm.model.system.OperateLog;
import com.jfinal.plugin.activerecord.Page;

public interface OperateLogService {

	/**
	 * 分页查询操作日志记录
	 * @param params
	 * @return
	 */
	Page<OperateLog> selectByPage(Map<String, String> params);

	/**
	 * 保存操作日志记录
	 * @param operateLog
	 * @return
	 */
	String save(OperateLog operateLog);
	
	
	/**
	 * 修改操作日志
	 * @param id
	 * @param outsideCode
	 * @param authCode
	 */
	void edit(long id,String outsideCode,String authCode);
	
}
