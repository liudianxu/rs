package com.crm.interceptor;

import com.crm.model.system.Setting;
import com.crm.util.Constant;
import com.jfinal.aop.Interceptor;
import com.jfinal.aop.Invocation;
import com.jfinal.plugin.ehcache.CacheKit;
/**
 * 
 * 
 * @version: 1.00.00
 * @description:系统设置缓存拦截器
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月22日 
 * @history:
 */
public class EchacheInterceptor implements Interceptor {
	
	@Override
	public void intercept(Invocation inv) {
		Setting setting = CacheKit.get(Constant.CHACHE_NAME, Constant.CHACHE_NAME);
		if(setting==null) {
			CacheKit.put(Constant.CHACHE_NAME, Constant.CHACHE_NAME, Setting.dao.findById(1L));
		}
		inv.invoke();
	}

}
