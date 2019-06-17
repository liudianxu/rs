package com.crm.task;

import java.util.Date;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;

import com.crm.model.group.GroupInsuranceOrder;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.impl.GroupInsuranceOrderServiceImpl;


public class OrdersExpiredProcessingTask implements Runnable{
	   
		
		GroupInsuranceOrderService groupInsuranceOrderService = new GroupInsuranceOrderServiceImpl();
		@Override
		public void run() {
			System.out.println("保单失效定时器处理---------");
			//查询出要修改的订单
			
			//查询团险要修改的订单
			List<GroupInsuranceOrder> groupInsuranceOrders = groupInsuranceOrderService.findListExpirationItem();
			if(CollectionUtils.isNotEmpty(groupInsuranceOrders)) {
				for(GroupInsuranceOrder groupInsuranceOrder : groupInsuranceOrders) {
					Long orderId = groupInsuranceOrder.getLong("id");
					groupInsuranceOrderService.expirationOrder(orderId);
				}
			}
		}

}