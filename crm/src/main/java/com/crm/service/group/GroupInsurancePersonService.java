package com.crm.service.group;

import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.model.group.GroupInsurancePerson;
import com.jfinal.plugin.activerecord.Page;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险人员接口
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */
public interface GroupInsurancePersonService {

	List<GroupInsurancePerson> findByOrderId(Long orderId);
	
	List<GroupInsurancePerson> findByPolicyNum(String policyNum);

	boolean existsGuatantee(Long hiddenOrderIdForGuarantee);

	void delete(String ids);

	/**
	 * 根据身份证号码查找团险用户
	 * @param idNum
	 *        身份证号码
	 * @return
	 */
	List<GroupInsurancePerson> findByIdNum(String idNum);


	/**
	 * 根据身份证号码和订单号查找
	 * @param idNum
	 * @param orderId
	 * @return
	 */
	GroupInsurancePerson findByIdNumAndOrderId(String idNum, Object orderId);

	void deleteByOrderId(Long hiddenOrderIdForGuarantee3);

	DataGrid<GroupInsurancePerson> selectPage(Map<String, String> params, Page<GroupInsurancePerson> page, String customerIds);
	
	GroupInsurancePerson findById(Long id, int type);

}
