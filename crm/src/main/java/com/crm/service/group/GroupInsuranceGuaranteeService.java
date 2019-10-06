package com.crm.service.group;

import java.util.List;

import com.crm.model.group.GroupInsuranceGuarantee;

/**
 * 
 * 
 * @version: 1.00.00
 * @description:团险保障详情接口
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年2月1日 
 * @history:
 */
public interface GroupInsuranceGuaranteeService {

	List<GroupInsuranceGuarantee> findByPlanId(Long orderId);

	void deleteByPlanId(Long hiddenOrderIdForGuarantee);

	GroupInsuranceGuarantee findByOrderIdAndPlan(Long hiddenOrderIdForImport, String valueOf);

	GroupInsuranceGuarantee findByEOrderIdAndPlan(Long long1, String string);

	List<GroupInsuranceGuarantee> findByOrderId(Long orderId);


}
