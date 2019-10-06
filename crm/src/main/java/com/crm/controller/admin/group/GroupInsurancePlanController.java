package com.crm.controller.admin.group;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.crm.controller.admin.BaseController;
import com.crm.model.group.GroupInsuranceGuarantee;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePlan;
import com.crm.model.group.Guarantee;
import com.crm.service.group.GroupInsuranceGuaranteeService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.util.Constant;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.kit.HttpKit;

public class GroupInsurancePlanController extends BaseController {
	@Inject
	private GroupInsuranceGuaranteeService groupInsuranceGuaranteeService;
	@Inject
	private GroupInsurancePersonService groupInsurancePersonService;
	@Inject
	private GroupInsuranceOrderService orderService;
	/**
	 * 列表分页查询
	 */
	public void selectByPage() {
		renderJson(GroupInsurancePlan.selectPage(getPage()));
	}
	
	public void savePlan() {
		BaseResponse res = new BaseResponse();
		GroupInsurancePlan plan = getModel(GroupInsurancePlan.class);
		plan.set("create_time", new Date());
		if(plan.get("id")==null) {
		if(plan.save()) {
         res.setCode(Constant.RESPONSE_CODE_SUCCESS);
         res.setData(plan.getLong("id"));
         res.setMessage("保存成功");
          renderJson(res);
		  return;
		}
		}
		else {
			if(plan.update()) {
		         res.setCode(Constant.RESPONSE_CODE_SUCCESS);
		         res.setData(plan.getLong("id"));
		         res.setMessage("保存成功");
		          renderJson(res);
				  return;
				}
		}
		
		
	}
	
	public void index() {
		render("index.html");
	}
	
	public void add() {
		render("add.html");
	}
	
	  public void delete() {
			BaseResponse response = new BaseResponse();
			Long id = getParaToLong("id");
			if(id == null) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！");
				renderJson(response);
				return;
			}
			if(orderService.queryByPland(id).size()>0) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！该计划已存在保单！");
				renderJson(response);
				return;
			}
			GroupInsurancePlan plan =GroupInsurancePlan.dao.findById(id);
			plan.set("is_del", 1);
			if(plan.update()) {
				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
				response.setMessage("删除成功");
			}
			
			renderJson(response);
		}
	
	public void edit() {
		Long id = getParaToLong("id");
		GroupInsurancePlan plan =GroupInsurancePlan.dao.findById(id);
		setAttr("plan", plan);
		int size = 0;

		Map<Long,List<Guarantee>> guaranteeMap = new HashMap<>();
		List<GroupInsuranceGuarantee> groupInsuranceGuarantees = groupInsuranceGuaranteeService.findByPlanId(id);
		List<BigDecimal> premiums =new ArrayList<>();  
		for (GroupInsuranceGuarantee groupInsuranceGuarantee : groupInsuranceGuarantees) {
        	  premiums.add(groupInsuranceGuarantee.getBigDecimal("premium"));
		} 
          setAttr("premiums", premiums);
		for (GroupInsuranceGuarantee groupInsuranceGuarantee : groupInsuranceGuarantees) {
			 String details = groupInsuranceGuarantee.get("details");
			 List<Guarantee> list = JSONObject.parseArray(details, Guarantee.class);
			 guaranteeMap.put(groupInsuranceGuarantee.get("id"), list);
			 size = list.size();
		}
        
    	if(!CollectionUtils.isEmpty(groupInsuranceGuarantees)) {
			List<Guarantee> resultGuarantees = new ArrayList<>();
			for(int i=0; i<size; i++) {
				Guarantee guarantee = new Guarantee();
				List<String> plans = new ArrayList<>();
				Long guarantId = null;
				for(GroupInsuranceGuarantee guarant : groupInsuranceGuarantees) {
					guarantId = guarant.get("id");
					if(guaranteeMap.get(guarant.get("id")).size()>i) {
						plans.add(guaranteeMap.get(guarant.get("id")).get(i).getValue());
					}
				}
				if(plans.size() < 5) {
					for(int j=7; j>=plans.size(); j--) {
						plans.add(null);
					}
				}
				guarantee.setPlan(plans);
				guarantee.setName(guaranteeMap.get(guarantId).get(i).getName());
				guarantee.setItem(guaranteeMap.get(guarantId).get(i).getItem());
				guarantee.setDescription(guaranteeMap.get(guarantId).get(i).getDescription());
				guarantee.setQuota(guaranteeMap.get(guarantId).get(i).getQuota());
				guarantee.setClaimInfo(guaranteeMap.get(guarantId).get(i).getClaimInfo());
				guarantee.setTip(guaranteeMap.get(guarantId).get(i).getTip());
				resultGuarantees.add(guarantee);
			}
			setAttr("guarantees", resultGuarantees);
		}
    	
    	//获取理赔测算
		//List<ClaimCalculation> calculations = claimCalculationService.findByTypeAndReferId(GROUP_CLAIM_TYPE,id);
		//setAttr("calculations", calculations);
		//理赔配置相关
		//setAttr("claimItemConfigs", claimItemConfigService.findRoots());
		//setAttr("claimDataConfigs", claimDataConfigService.findAll());
		render("edit.html");
	}
	/**
	 * 保存产品保障说明
	 * 
	 * @param hiddenOrderIdForGuaranteeDesc
	 * @param guaranteeDesc
	 * @return
	 */
	public void saveGuaranteeDesc() {
		Long hiddenOrderIdForGuarantee2 = getParaToLong("hiddenOrderIdForGuarantee2");
		GroupInsurancePlan plan = getModel(GroupInsurancePlan.class);
		plan.set("id", hiddenOrderIdForGuarantee2);
		Map<String, Object> data = new HashMap<>();
		plan.update();
		data.put("orderId", hiddenOrderIdForGuarantee2);
		data.put("message", "保存成功");
		data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		renderJson(data);
	}
	
	
	/**
	 * 保存保障方案
	 * 
	 * @param hiddenOrderIdForGuarantee
	 * @param guaranteeListForm
	 * @return
	 */
	public void saveGrantee() {
		Map<String, Object> data = new HashMap<>();
		// 获取参数组
		String[] premium= getParaValues("premium[]");
		String json = HttpKit.readData(getRequest());
		JSONObject obj=JSON.parseObject(json);
		JSONArray jsarr=obj.getJSONArray("guaranteeList");
		JSONArray premiumJsarr=obj.getJSONArray("premiumList");
		if(jsarr!=null) {
		Long planId = obj.getLong("hiddenPlanForGuarantee");
		//保存之前先根据order_id，删除已有项目
		if(!groupInsurancePersonService.existsGuatantee(planId)) {
			groupInsuranceGuaranteeService.deleteByPlanId(planId);
			if(planId==null) {
				data.put("code", Constant.RESPONSE_CODE_FAIL);
				data.put("msg", "请先保存基本信息");
				renderJson(data);
				return;
			}
		for(int i=0;i<jsarr.size();i++){
			JSONObject job = jsarr.getJSONObject(i);
			JSONArray plan=job.getJSONArray("plan");
			for(int j=0;j<plan.size();j++){
				JSONArray newAray = new JSONArray();
				GroupInsuranceGuarantee guarant = new GroupInsuranceGuarantee();
				guarant.set("name",Constant.GUARANTEE_PLAN_NAME_PREFIX + (j + 1));
				guarant.set("plan_id",planId);
				for(int m=0;m<jsarr.size();m++){
				JSONObject job2 = jsarr.getJSONObject(m);
				JSONArray plan2=job2.getJSONArray("plan");
				JSONObject pbjj = new JSONObject();
				if("".equals(plan2.get(j))) {
					continue;
			    }
				pbjj.put("item", job2.get("item"));
				pbjj.put("quota", job2.get("quota"));
				pbjj.put("description", job2.get("description"));
				pbjj.put("claimInfo", job2.get("claimInfo"));
				pbjj.put("tip", job2.get("tip"));
				pbjj.put("value", plan2.get(j));
				newAray.add(pbjj);
				}
				if(newAray.size() == 0) { 	
					continue;
				}
				guarant.set("premium", "".equals(premiumJsarr.get(j))?0:premiumJsarr.get(j));
				guarant.set("create_time", new Date());
				guarant.set("details", newAray.toString()).save();
			}
			break;
		}
			}
		else {
			List<GroupInsuranceGuarantee> guarantees = groupInsuranceGuaranteeService.findByPlanId(planId);
			if(jsarr.size()==0) {
				groupInsuranceGuaranteeService.deleteByPlanId(planId);
			}
			for(int i=0;i<jsarr.size();i++){
				JSONObject job = jsarr.getJSONObject(i);
				JSONArray plan=job.getJSONArray("plan");
				for(int j=0;j<plan.size();j++){
					JSONArray newAray = new JSONArray();
					//GroupInsuranceGuarantee guarant = new GroupInsuranceGuarantee();
					if("".equals(plan.get(j))) {
						continue;
				    }
					if(guarantees.get(j)==null) {
						JSONArray newArays = new JSONArray();
						GroupInsuranceGuarantee guarant = new GroupInsuranceGuarantee();
						guarant.set("name",Constant.GUARANTEE_PLAN_NAME_PREFIX + (j + 1));
						guarant.set("plan_id",planId);
						for(int m=0;m<jsarr.size();m++){
						JSONObject job2 = jsarr.getJSONObject(m);
						JSONArray plan2=job2.getJSONArray("plan");
						JSONObject pbjj = new JSONObject();
						if("".equals(plan2.get(j))) {
							continue;
					    }
						pbjj.put("item", job2.get("item"));
						pbjj.put("quota", job2.get("quota"));
						pbjj.put("description", job2.get("description"));
						pbjj.put("claimInfo", job2.get("claimInfo"));
						pbjj.put("tip", job2.get("tip"));
					
						pbjj.put("value", plan2.get(j));
						newArays.add(pbjj);
						}
						if(newAray.size() == 0) {
							continue;
						}
						guarant.set("create_time", new Date());
						guarant.set("details", newArays.toString()).save();
					}
					else {
					guarantees.get(j).set("name",Constant.GUARANTEE_PLAN_NAME_PREFIX + (j + 1));
					guarantees.get(j).set("plan_id",planId);
					for(int m=0;m<jsarr.size();m++){
					JSONObject job2 = jsarr.getJSONObject(m);
					JSONArray plan2=job2.getJSONArray("plan");
					JSONObject pbjj = new JSONObject();
					pbjj.put("item", job2.get("item"));
					pbjj.put("quota", job2.get("quota"));
					pbjj.put("description", job2.get("description"));
					pbjj.put("claimInfo", job2.get("claimInfo"));
					pbjj.put("tip", job2.get("tip"));
					if("".equals(plan2.get(j))) {
						continue;
				    }
					pbjj.put("value", plan2.get(j));
					newAray.add(pbjj);
					}
					if(newAray.size() == 0) {
						continue;
					}
					guarantees.get(j).set("create_time", new Date());
					guarantees.get(j).set("details", newAray.toString());
					guarantees.get(j).update();
					}
				}
				break;
		}
		}
		data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		data.put("msg", "保存成功");
		data.put("planId", planId);
		data.put("orderId", planId);
		GroupInsurancePlan plan = GroupInsurancePlan.dao.findById(planId);
		renderJson(data);
	}
	}
}
