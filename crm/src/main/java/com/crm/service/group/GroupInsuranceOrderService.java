package com.crm.service.group;

import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.model.group.GroupInsuranceOrder;
import com.jfinal.plugin.activerecord.Page;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险订单接口
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */
public interface GroupInsuranceOrderService {

	/**
	 * 列表分页查询
	 * @param customerIds 
	 */
	DataGrid<GroupInsuranceOrder> selectPage(Map<String, String> params, Page<GroupInsuranceOrder> page, String customerIds);

	/**
	 * 创建订单
	 * @param order
	 * @return
	 * @throws Exception 
	 */
	GroupInsuranceOrder create(GroupInsuranceOrder order) throws Exception;

	/**
	 * 更新
	 * @param existsOrder
	 */
	void update(GroupInsuranceOrder existsOrder);

	/**
	 * 删除
	 * @param id
	 */
	void delete(Long id);

	/**
	 * 根据id查找订单
	 * @param id
	 * @return
	 */
	List<GroupInsuranceOrder> queryByCompanyId(Long id);
	
	/**
	 * 根据customerId查找订单
	 * @param id
	 * @return
	 */
	List<GroupInsuranceOrder> queryByCustomerId(Long id);

	/**
	 * 分页列表
	 * @param ids
	 *    用户ids
	 * @param status
	 *     状态
	 * @param page
	 *  分页
	 * @return
	 */
	DataGrid<GroupInsuranceOrder> findPage(List<Long> ids, Integer status, Page<GroupInsuranceOrder> page);

	/**
	 * 订单详情
	 * @param id
	 * @return
	 */
	GroupInsuranceOrder findById(Long id);

	List<GroupInsuranceOrder> findListEffectiveItem();

	void effectiveOrder(Long orderId);

	List<GroupInsuranceOrder> findListExpirationItem();

	void expirationOrder(Long orderId);

	/**
	 * 根据订单编号查找
	 * @param groupOrderSn
	 * @return
	 */
	GroupInsuranceOrder findByOrderSn(String groupOrderSn);

	/**
	 * 是否已完成5步
	 * @param orderId
	 * @return
	 */
	boolean isComplete(Long orderId);
}
