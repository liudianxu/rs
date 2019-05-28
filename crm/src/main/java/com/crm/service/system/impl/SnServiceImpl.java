package com.crm.service.system.impl;

import java.io.IOException;
import java.util.Date;

import com.crm.model.system.Sn;
import com.crm.service.system.SnService;
import com.jfinal.kit.PropKit;
import com.jfinal.template.TemplateException;
import com.util.DateUtil;

/**
 * 
 * @version: 1.00.00
 * @description: 序列号数据库操作实现类
 * @date: 2018年11月19日16:41:16
 * @history:
 */
public class SnServiceImpl  implements SnService{

	/**
     *  团险订单编号生成器
     */
	private HiloOptimizer groupOrderHiloOptimizer;
	/**
	 * 订单编号生成器
	 */
	private HiloOptimizer orderHiloOptimizer;
	/**
	 * 支付事务编号生成器
	 */
	private HiloOptimizer paymentTransactionHiloOptimizer;
	/**
	 * 支付事务编号生成器
	 */
	private HiloOptimizer ProductHiloOptimizer;
	/**
	 * 理赔编号生成器
	 */
	private HiloOptimizer claimHiloOptimizer;
	/**
	 * 退款编号生成器
	 */
    private HiloOptimizer orderRefundHiloOptimizer;
    /**
	 * 退保编号生成器
	 */
    private HiloOptimizer cancelInsuranceHiloOptimizer;
	
    private  boolean status=false;
	
	/**
	 * 初始化
	 */
	public void initHiloOptimizer() throws Exception {
		groupOrderHiloOptimizer = new HiloOptimizer(Sn.Type.groupInsuranceOrder, PropKit.getInt("sn.groupInsuranceOrder.maxLo"));
		orderHiloOptimizer = new HiloOptimizer(Sn.Type.order, PropKit.getInt("sn.order.maxLo"));
		paymentTransactionHiloOptimizer = new HiloOptimizer(Sn.Type.paymentTransaction, PropKit.getInt("sn.paymentTransaction.maxLo"));
		ProductHiloOptimizer = new HiloOptimizer(Sn.Type.product, PropKit.getInt("sn.product.maxLo"));
		claimHiloOptimizer = new HiloOptimizer(Sn.Type.claim, PropKit.getInt("sn.claim.maxLo"));
		orderRefundHiloOptimizer = new HiloOptimizer(Sn.Type.orderRefunds, PropKit.getInt("sn.orderRefunds.maxLo"));
		cancelInsuranceHiloOptimizer = new HiloOptimizer(Sn.Type.cancelinsurance, PropKit.getInt("sn.cancelInsurance.maxLo"));
		status=true;
	}
	
	
	/**
	 * 生成序列号
	 * 
	 * @param type
	 *            类型
	 * @return 序列号
	 * @throws Exception 
	 */
	public String generate(Sn.Type type) throws Exception {
		if(!status) {
			initHiloOptimizer();
		}
		try {
		switch (type) {
		case groupInsuranceOrder:
			return groupOrderHiloOptimizer.generate();
		case order:
			return orderHiloOptimizer.generate();
		case paymentTransaction:
			return paymentTransactionHiloOptimizer.generate();
		case product:
			return ProductHiloOptimizer.generate();
		case claim:
			return claimHiloOptimizer.generate();
		case orderRefunds:
			return orderRefundHiloOptimizer.generate();
		case cancelinsurance:
			return cancelInsuranceHiloOptimizer.generate();
		default:
			break;
		}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 获取末值
	 * 
	 * @param type
	 *            类型
	 * @return 末值
	 */
	private long getLastValue(Sn.Type type) {
		String sql = "";
			sql =  "select * from duc_sn  where type = "+type.ordinal()+" ";
		Sn sn= Sn.dao.findFirst(sql);
		long lastValue;
		if(sn!=null) {
		lastValue = sn.get("last_value");
		sn.set("last_value", lastValue+1).update();
		return lastValue+1;
		}
		else {
			lastValue =1;
			Sn newSn =new Sn();
			newSn.set("type", type.ordinal());
			newSn.set("create_time", new Date());
			newSn.set("last_value", lastValue);
			newSn.save();
		}
		
		return lastValue;
	}

	/**
	 * 高低位算法生成器
	 */
	private class HiloOptimizer {

		/**
		 * 类型
		 */
		private Sn.Type type;

		/**
		 * 最大低位值
		 */
		private int maxLo;

		/**
		 * 低位值
		 */
		private int lo;

		/**
		 * 高位值
		 */
		private long hi;

		/**
		 * 末值
		 */
		private long lastValue;

		/**
		 * 构造方法
		 * 
		 * @param type
		 *            类型
		 * @param prefix
		 *            前缀
		 * @param maxLo
		 *            最大低位值
		 */
		HiloOptimizer(Sn.Type type, int maxLo) {
			this.type = type;
			this.maxLo = maxLo;
			this.lo = maxLo + 1;
		}

		/**
		 * 生成序列号
		 * 
		 * @return 序列号
		 */
		public synchronized String generate() throws IOException {
			if (lo > maxLo) {
				lastValue = getLastValue(type);
				lo = lastValue == 0 ? 1 : 0;
				hi = lastValue * (maxLo + 1);
			}
			try {
				return DateUtil.process() + (hi + lo++);
			} catch (TemplateException e) {
				throw new RuntimeException(e.getMessage(), e);
			}
		}
	}


}
