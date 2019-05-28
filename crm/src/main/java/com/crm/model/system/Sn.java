package com.crm.model.system;

import com.jfinal.plugin.activerecord.Model;

public class Sn extends Model<Sn>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5056162687851959369L;
	
	public static final Sn dao = new Sn();
	
	/**
	 * 类型
	 */
	public enum Type {
		/**
		 * 商品
		 */
		product,

		/**
		 * 订单
		 */
		order,

		/**
		 * 订单支付
		 */
		orderPayment,

		/**
		 * 订单退款
		 */
		orderRefunds,

		/**
		 * 订单发货
		 */
		orderShipping,

		/**
		 * 订单退货
		 */
		orderReturns,

		/**
		 * 支付事务
		 */
		paymentTransaction,
		
		/**
		 * 保险条款
		 */
		insuranceClause,
		
		/**
		 * 团险订单
		 */
		groupInsuranceOrder,
		
		/**
		 * 理赔
		 */
		claim,
		
		/**
		 * 退保
		 */
		cancelinsurance
	}
}
