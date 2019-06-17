package com.crm.task;

import java.util.Date;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;

import com.crm.model.group.GroupInsuranceOrder;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.impl.GroupInsuranceOrderServiceImpl;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:保单生效处理（保障中）
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年3月6日 
 * @history:
 */
public class OrdersExpirationProcessingTask extends Controller  implements Runnable{
	   
		
		 GroupInsuranceOrderService groupInsuranceOrderService = new GroupInsuranceOrderServiceImpl();
		
		@Override
		public void run() {
			System.out.println("-------------订单修改为保障中定时器开始------------------");
			//查询出要修改的订单
			
			//查询团险要修改的订单
			List<GroupInsuranceOrder> groupInsuranceOrders = groupInsuranceOrderService.findListEffectiveItem();
			if(CollectionUtils.isNotEmpty(groupInsuranceOrders)) {
				for(GroupInsuranceOrder groupInsuranceOrder : groupInsuranceOrders) {
					Long orderId = groupInsuranceOrder.getLong("id");
					groupInsuranceOrderService.effectiveOrder(orderId);
				}
			}
		}

}
