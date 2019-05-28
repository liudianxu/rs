package com.crm.service.system.impl;

import java.util.Map;

import com.crm.model.system.OperateLog;
import com.crm.service.system.OperateLogService;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Page;

public class OperateLogServiceImpl implements OperateLogService {

	/*
	 * 查看接口调用的详情，成功/失败
	 * params : pageNumber,pageSize,operator,flag,earliesTime,latesTime
	 */
	@Override
	public Page<OperateLog> selectByPage(Map<String, String> params) {
		int pageNumber = Integer.parseInt(params.get("start")) / Integer.parseInt(params.get("length")) + 1;
		int pageSize = Integer.parseInt(params.get("length"));
		String operator = params.get("operator");
		
		if(StrKit.isBlank(operator)){
			operator = "";
		}
		
		StringBuffer where = new StringBuffer();
		String sql = "select id,operator,operate_time,request_ip,method,params,description";
		String sqlExc = "from sys_log_operate where 1=1";
		where.append(" and operator like '%").append(operator).append("%' ");
		
		if(StrKit.notBlank(params.get("flag"))){
		   where.append(" and operate_time >= '").append(params.get("earliesTime")).append("'")
				.append(" and operate_time <= '").append(params.get("latesTime")).append("'")
				.append(" and result_code ")
				.append(StrKit.equals("1", params.get("flag")) ? "=" : "<>")
				.append(" 1");
		}
		
		where.append(" order by operate_time desc");
		return OperateLog.dao.paginate(pageNumber, pageSize, sql,sqlExc + where );
	}

	@Override
	public String save(OperateLog operateLog) {
		try {
			if(!operateLog.save()) {
				return "记录操作日志失败！";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return e.getMessage();
		}
		
		return null;
	}
	
	/**	
	 * 在调用成功之后将第三方授权码，跟平台生成的授权码update到表里
	 * params: id，outSideCode，authCode
	 */
	@Override
	public void edit(long id,String outsideCode,String authCode) {
		OperateLog.dao.findById(id).set("outside_code", outsideCode).set("auth_code", authCode).update();
	}

}
