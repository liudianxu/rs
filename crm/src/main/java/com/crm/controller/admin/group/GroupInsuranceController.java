package com.crm.controller.admin.group;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceGuarantee;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.group.GroupInsurancePersonLog;
import com.crm.model.group.Guarantee;
import com.crm.model.group.GuaranteeDetail;
import com.crm.poi.ImportExcelUtil;
import com.crm.service.brand.BrandService;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.group.GroupInsuranceGuaranteeService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.groupinfo.GroupInfoService;
import com.crm.service.system.EmailService;
import com.crm.service.system.UserService;
import com.crm.util.CommonUtils;
import com.crm.util.Constant;
import com.crm.util.DateUtil;
import com.crm.util.IDCardUtils;
import com.jfinal.aop.Inject;
import com.jfinal.core.paragetter.Para;
import com.jfinal.kit.HttpKit;
import com.jfinal.kit.PathKit;
public class GroupInsuranceController extends BaseController<GroupInsuranceOrder>{
	@Inject
	private GroupInsuranceOrderService groupInsuranceOrderService;
	@Inject
	private GroupInsuranceGuaranteeService groupInsuranceGuaranteeService;
	@Inject
	private GroupInsurancePersonService groupInsurancePersonService;
	@Inject
	private BrandService brandService;
	@Inject
	private CustomerInfoService customerInfoService;
	@Inject
	private GroupInfoService groupInfoService;
	@Inject
	private UserService userService;
	@Inject
	private EmailService emailService;
	@Inject
	private GroupInsurancePersonService personService;
	
	//团险理赔类型
	public static final int GROUP_CLAIM_TYPE =1;
	/**
	 * 去团险首页
	 */
	public void index() {
		//获取品牌集合
		setAttr("brands", brandService.selectList());
		render("index.html");
	}
	
	
	/**
	 * 列表分页查询
	 */
	public void selectByPage() {
       Map<String,String> params = new HashMap<>();
		
       //查询参数
       params.put("order_sn", getPara("order_sn"));
       params.put("brand_id", getPara("brand_id"));
       params.put("policy_num", getPara("policy_num"));
       params.put("company_name", getPara("company_name"));
       params.put("status", getPara("status"));
       params.put("type", getPara("type"));
       params.put("insurance_type", getPara("insurance_type"));
       //params.put("is_on_sale", getPara("is_on_sale"));
		
       DataGrid<GroupInsuranceOrder> dataGrid = groupInsuranceOrderService.selectPage(params, getPage());
       List<GroupInsuranceOrder> groupInsuranceOrders = dataGrid.getData();
       for (GroupInsuranceOrder groupInsuranceOrder : groupInsuranceOrders) {
    	   groupInsuranceOrder.put("person", groupInsuranceOrder.get("person_num")+"/"+groupInsuranceOrder.get("total_person_sum"));
    	   if((groupInsuranceOrder.get("annual_premium")!=null)
    			   &&(groupInsuranceOrder.get("annual_premium")!="")
    			   &&(groupInsuranceOrder.get("person_num")!=null)
    			   &&(groupInsuranceOrder.get("person_num")!="")){
    		   BigDecimal fre=BigDecimal.ZERO;
    		   List<GroupInsurancePerson> persons = personService.findByOrderId(groupInsuranceOrder.getLong("id"));
    		   for (GroupInsurancePerson person : persons) {
    			   if(person.get("premium")!=null) {
    				   if(person.getInt("status")==0||person.getInt("status")==1) {
    				   fre = fre.add(person.getBigDecimal("premium"));
    				   }
			}
    		   }
    		   groupInsuranceOrder.put("totalPremium",fre);    	   }
       }
       dataGrid.setData(groupInsuranceOrders);
		renderJson(dataGrid);
	}
	
	/**
	 * 添加页面
	 */
	public void add() {
		//获取品牌集合
		setAttr("brands", brandService.selectList());
		setAttr("groups", groupInfoService.selectList());
		setAttr("admins", userService.selectList());
		render("add.html");
	}
	
	/**
	 * 编辑页面
	 * @param id
	 */
	public void edit() {
		Long id = getParaToLong("id");
		//获取品牌集合
		setAttr("brands", brandService.selectList());
		setAttr("groups", groupInfoService.selectList());
		setAttr("admins", userService.selectList());
		
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		//GroupInsuranceCompany company = GroupInsuranceCompany.dao.findById((Long)order.get("company_id"));
		//setAttr("brands", brandService.selectList());
		setAttr("order", order);
		List<CustomerInfo> customers = customerInfoService.findByGroupId(order.getLong("insure_group_id"));
		setAttr("customers", customers);
		
		//setAttr("company", company);
		int size = 0;
		Map<Long,List<Guarantee>> guaranteeMap = new HashMap<>();
		List<GroupInsuranceGuarantee> groupInsuranceGuarantees = groupInsuranceGuaranteeService.findByOrderId(id);
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
	 * 保全页面
	 * @param id
	 */
	public void preserve() {
		Long id = getParaToLong("id");
		//获取品牌集合
		setAttr("brands", brandService.selectList());
		setAttr("groups", groupInfoService.selectList());
		setAttr("admins", userService.selectList());
		
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		//GroupInsuranceCompany company = GroupInsuranceCompany.dao.findById((Long)order.get("company_id"));
		//setAttr("brands", brandService.selectList());
		setAttr("order", order);
		List<CustomerInfo> customers = customerInfoService.findByGroupId(order.getLong("insure_group_id"));
		setAttr("customers", customers);
		
		//setAttr("company", company);
		int size = 0;
		Map<Long,List<Guarantee>> guaranteeMap = new HashMap<>();
		List<GroupInsuranceGuarantee> groupInsuranceGuarantees = groupInsuranceGuaranteeService.findByOrderId(id);
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
		render("preserve.html");
	}
	
	/**
	 * 编辑页面
	 * @param id
	 */
	public void view() {
		//获取品牌集合
		Long id = getParaToLong("id");
		setAttr("brands", brandService.selectList());
		setAttr("groups", groupInfoService.selectList());
		setAttr("admins", userService.selectList());
		
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		//GroupInsuranceCompany company = GroupInsuranceCompany.dao.findById((Long)order.get("company_id"));
		//setAttr("brands", brandService.selectList());
		setAttr("order", order);
		List<CustomerInfo> customers = customerInfoService.findByGroupId(order.getLong("insure_group_id"));
		setAttr("customers", customers);
		
		//setAttr("company", company);
		int size = 0;
		Map<Long,List<Guarantee>> guaranteeMap = new HashMap<>();
		List<GroupInsuranceGuarantee> groupInsuranceGuarantees = groupInsuranceGuaranteeService.findByOrderId(id);
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
    	setAttr("id", id);
    	
    	//获取理赔测算
		//List<ClaimCalculation> calculations = claimCalculationService.findByTypeAndReferId(GROUP_CLAIM_TYPE,id);
		//setAttr("calculations", calculations);
		//理赔配置相关
		//setAttr("claimItemConfigs", claimItemConfigService.findRoots());
		//setAttr("claimDataConfigs", claimDataConfigService.findAll());
		render("view.html");
	}
	
	/**
	 * 根据单位名称和证件号码查询企业是否存在
	 * @param companyName
	 * @param licenceNum
	 * @return
	 */
	public void checkCompany(String companyName, String licenceNum) {
		Map<String, Object> data = new HashMap<>();
		//GroupInsuranceCompany company = companyService.findByNameAndLicence(companyName, licenceNum);
		//if(company != null) {
		//	data.put("company", company);
	//	}
		renderJson(data);
	}
	

	
	/**
	 * 保存基本信息
	 * 
	 * @param hiddenCompanyId
	 * @param brandId
	 * @param company
	 * @param order
	 * @return
	 * @throws Exception 
	 */
	public void saveBaseInfo() throws Exception {
		Map<String, Object> data = new HashMap<>();
		GroupInsuranceOrder order = getModel(GroupInsuranceOrder.class);
        		
		Date policyEffectiveDate = DateUtil.parseDate(DateUtil.formatDate(order.get("policy_effective_date"),"yyyy-MM-dd") + " 00:00:00");
		Date policyExpirationDate = DateUtil.parseDate(DateUtil.formatDate(order.get("policy_expiration_date"),"yyyy-MM-dd") + " 23:59:59");
		
		order.set("status",GroupInsuranceOrder.Status.unfinished.ordinal());
		//是雇主责任险 直接为已出单
		if(order.getInt("insurance_type")==0) {
			order.set("status", 2);
		}
		//已过生效时间
		Date date = new Date();
		if(date.getTime()>policyEffectiveDate.getTime()) {
			order.set("status", 3);
		}
		//设置生效时间
		order.set("policy_effective_date",policyEffectiveDate);
		//设置终止时间
		order.set("policy_expiration_date",policyExpirationDate);
		//完成第一步
		order.set("step_one", 1);
		if(order.get("id")==null) {
			GroupInsuranceOrder createdOrder = groupInsuranceOrderService.create(order);
			
			JSONArray newAray = new JSONArray();
			if(order.getInt("insurance_type")==0) {
			newAray.add(new GuaranteeDetail("身故赔偿限额",order.get("death_compensation")));
			newAray.add(new GuaranteeDetail("残疾赔偿限额",order.get("disability_compensation")));
			newAray.add(new GuaranteeDetail("医疗补偿限额",order.get("medical_compensation")));
			newAray.add(new GuaranteeDetail("住院津贴赔偿限额",order.get("hospitalization_compensation")));
			newAray.add(new GuaranteeDetail("误工赔偿限额",order.get("tardy_job_compensation")));
			newAray.add(new GuaranteeDetail("法律费用赔偿限额",order.get("law_compensation")));
			GroupInsuranceGuarantee guarant = new GroupInsuranceGuarantee();
			guarant.set("name",Constant.GUARANTEE_PLAN_NAME_PREFIX + 1);
			guarant.set("order_id",createdOrder.getLong("id"));
			guarant.set("create_time", new Date());
			guarant.set("premium", order.get("annual_premium"));
			guarant.set("details", newAray.toString()).save();
			}
			data.put("code", Constant.RESPONSE_CODE_SUCCESS);
			data.put("msg", "新增成功");
			data.put("orderId", createdOrder.get("id"));
		}
		else {
			groupInsuranceGuaranteeService.deleteByOrderId(order.get("id"));
			JSONArray newAray = new JSONArray();
			if(order.getInt("insurance_type")==0) {
			newAray.add(new GuaranteeDetail("身故赔偿限额",order.get("death_compensation")));
			newAray.add(new GuaranteeDetail("残疾赔偿限额",order.get("disability_compensation")));
			newAray.add(new GuaranteeDetail("医疗补偿限额",order.get("medical_compensation")));
			newAray.add(new GuaranteeDetail("住院津贴赔偿限额",order.get("hospitalization_compensation")));
			newAray.add(new GuaranteeDetail("误工赔偿限额",order.get("tardy_job_compensation")));
			newAray.add(new GuaranteeDetail("法律费用赔偿限额",order.get("law_compensation")));
			GroupInsuranceGuarantee guarant = new GroupInsuranceGuarantee();
			guarant.set("name",Constant.GUARANTEE_PLAN_NAME_PREFIX + 1);
			guarant.set("order_id",order.get("id"));
			guarant.set("create_time", new Date());
			guarant.set("premium", order.get("annual_premium"));
			guarant.set("details", newAray.toString()).save();
			}
			
			data.put("orderId", order.get("id"));
			order.update();
			data.put("msg", "更新成功");
			data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		}
		renderJson(data);
		return;
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
		Long hiddenOrderIdForGuarantee = obj.getLong("hiddenOrderIdForGuarantee");
		//保存之前先根据order_id，删除已有项目
		if(!groupInsurancePersonService.existsGuatantee(hiddenOrderIdForGuarantee)) {
			groupInsuranceGuaranteeService.deleteByOrderId(hiddenOrderIdForGuarantee);
			if(hiddenOrderIdForGuarantee==null) {
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
				guarant.set("order_id",hiddenOrderIdForGuarantee);
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
			List<GroupInsuranceGuarantee> guarantees = groupInsuranceGuaranteeService.findByOrderId(hiddenOrderIdForGuarantee);
			if(jsarr.size()==0) {
				groupInsuranceGuaranteeService.deleteByOrderId(hiddenOrderIdForGuarantee);
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
						guarant.set("order_id",hiddenOrderIdForGuarantee);
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
					guarantees.get(j).set("order_id",hiddenOrderIdForGuarantee);
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
		data.put("orderId", hiddenOrderIdForGuarantee);
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(hiddenOrderIdForGuarantee);
		order.set("step_two", 1).update();
		//完成5步走更新为已出单
		if(groupInsuranceOrderService.isComplete(hiddenOrderIdForGuarantee)) {
			order.set("status", 2).update();
		}
		renderJson(data);
	}
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
		GroupInsuranceOrder groupInsuranceOrder = getModel(GroupInsuranceOrder.class);
		groupInsuranceOrder.set("id", hiddenOrderIdForGuarantee2);
		groupInsuranceOrder.set("step_three", 1);
		Map<String, Object> data = new HashMap<>();
		groupInsuranceOrder.update();
		//完成5步走更新为已出单
				if(groupInsuranceOrderService.isComplete(hiddenOrderIdForGuarantee2)) {
					groupInsuranceOrder.set("status", 2).update();
				}
		data.put("orderId", hiddenOrderIdForGuarantee2);
		data.put("msg", "保存成功");
		data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		renderJson(data);
	}

	/**
	 * 保存人员
	 */
	public void savePerson() {
		Map<String, Object> data = new HashMap<>();
		
		Long hiddenOrderIdForGuarantee3 = getParaToLong("hiddenOrderIdForGuarantee3");
		if(getPara("person")!=null) {
	        int person = getParaToInt("person");
	        if(person==0) {
				groupInsurancePersonService.deleteByOrderId(hiddenOrderIdForGuarantee3);
			}
		}
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(hiddenOrderIdForGuarantee3);
		
		order.set("id", hiddenOrderIdForGuarantee3);
		order.set("step_four", 1);
		order.update();
		//完成5步走更新为已出单
				if(groupInsuranceOrderService.isComplete(hiddenOrderIdForGuarantee3)) {
					order.set("status", 2).update();
		}
		data.put("orderId", hiddenOrderIdForGuarantee3);
		data.put("msg", "保存成功");
		data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		renderJson(data);
	}
	
	
	/**
	 * 查询保障方案
	 * 
	 * @param orderId
	 * @return
	 */
	public void findGuaranteeSchemes() {
		Long orderId = getParaToLong("orderId");
		Map<String, Object> data = new HashMap<>();
		List<GroupInsuranceGuarantee> guarantees = groupInsuranceGuaranteeService.findByOrderId(orderId);
		Map<Long, String> resultMap = new HashMap<>();
		if(!CollectionUtils.isEmpty(guarantees)) {
			for(GroupInsuranceGuarantee guarantee : guarantees) {
				resultMap.put(guarantee.get("id"), guarantee.get("name"));
			}
		}
		data.put("guarantees", resultMap);
		renderJson(data);
	}
	
	/**
	 * 新增、编辑人员
	 * 
	 * @param hiddenOrderId
	 * @param person
	 * @return
	 * @throws Exception 
	 */
	public void addPerson() throws Exception {
		Long hiddenOrderId = getParaToLong("hiddenOrderId");
		GroupInsurancePerson person = getModel(GroupInsurancePerson.class);
		Map<String, Object> data = new HashMap<>();
		GroupInsuranceOrder groupInsuranceOrder = GroupInsuranceOrder.dao.findById(hiddenOrderId);
		if(person.get("name")==null) {
			data.put("msg", "姓名不能为空！");
			renderJson(data);
			return;
		}
		if(person.get("id_type")==null) {
			data.put("msg", "证件类型不能为空！");
			renderJson(data);
			return;
		}
		if(person.get("id_num")==null) {
			data.put("msg", "证件号码不能为空！");
			renderJson(data);
			return;
		}
		if(person.get("guarantee_id")==null) {
			data.put("msg", "保障方案不能为空！");
			renderJson(data);
			return;
		}
		if(person.get("policy_effective_date")==null) {
			data.put("msg", "生效日期不能为空！");
			renderJson(data);
			return;
		}
		if(person.get("policy_expiration_date")==null) {
			data.put("msg", "生效日期不能为空！");
			renderJson(data);
			return;
		}
		
		if(groupInsuranceOrder.get("max_occupation_category")!=null&&person.get("occupation_category")!=null&&person.getInt("occupation_category")>groupInsuranceOrder.getInt("max_occupation_category"))
		{
			data.put("msg", "职业类别不能高于"+groupInsuranceOrder.getInt("max_occupation_category")+"类");
			renderJson(data);
			return;
		}
		
		if(person.getDate("policy_effective_date").getTime()<groupInsuranceOrder.getDate("policy_effective_date").getTime()
				||person.getDate("policy_expiration_date").getTime()>groupInsuranceOrder.getDate("policy_expiration_date").getTime()
				) 
		{
			data.put("msg", "需要与保单起止日期一致！");
			renderJson(data);
			return;
		}
		
		Date policyExpirationDate = DateUtil.parseDate(DateUtil.formatDate(person.get("policy_expiration_date"),"yyyy-MM-dd") + " 23:59:59");
		person.set("policy_expiration_date", policyExpirationDate);
		
		if(groupInsuranceOrder.get("max_review_time")!=null) {
			Integer maxTime = groupInsuranceOrder.get("max_review_time");
			Date date = groupInsuranceOrder.getDate("policy_effective_date");
			Date reviewTime = DateUtil.addDays(date, maxTime);
			 long diff = person.getDate("policy_effective_date").getTime() - reviewTime.getTime();
			 if(diff>0) {
				 data.put("msg", "已超过追溯日期!");
					renderJson(data);
					return;
			 }
		}
		if(person.get("policy_num")==null) {
			person.set("policy_num", groupInsuranceOrder.get("policy_num"));
		}
		
		
		if((int)person.get("id_type")==0) {
			if(!IDCardUtils.isValidatedAllIdcard(person.get("id_num"))) {
				data.put("msg", "证件号码不合法!");
				renderJson(data);
				return;
			}
			
			if(CommonUtils.isOdd(person.get("id_num").toString().charAt(person.get("id_num").toString().length() - 2))) {
				person.set("gender",Constant.FEMALE);
			} else {
				person.set("gender",Constant.MALE);
			}
			try {
				Date birth = DateUtil.parseDate(person.get("id_num").toString().substring(6, 14), new String[]{"yyyyMMdd"});
				person.set("birth",birth);
				if(groupInsuranceOrder.get("max_insurance_age")!=null){
					int maxAge = groupInsuranceOrder.get("max_insurance_age");
					int age = DateUtil.calcAge(birth, new Date());
					if(age>maxAge) {
						data.put("msg", "已超过最大年龄!");
						renderJson(data);
						return;
					}
				}
				if(groupInsuranceOrder.get("min_insurance_age")!=null){
					int minAge = groupInsuranceOrder.get("min_insurance_age");
					int age = DateUtil.calcAge(birth, new Date());
					if(age<minAge) {
						data.put("msg", "小于最小年龄!");
						renderJson(data);
						return;
					}
				}
			} catch (ParseException e) {
				e.printStackTrace();
			}
		} else {
			person.set("gender",person.get("person.gender"));
			person.set("birth",new Date());
		}
		
		person.set("create_time", new Date());
		person.set("order_id",hiddenOrderId);
		
		//计算保费
		long[] getDate = DateUtil.getDatePoor(person.getDate("policy_expiration_date"), person.getDate("policy_effective_date")); 
		GroupInsuranceGuarantee guarantee = GroupInsuranceGuarantee.dao.findById(person.getLong("guarantee_id"));
		BigDecimal premium = null;
		if(groupInsuranceOrder.getInt("insurance_type")==0) {
			premium = groupInsuranceOrder.getBigDecimal("annual_premium");
		}
		else{
			premium = guarantee.getBigDecimal("premium");
		}
		BigDecimal totelPre = premium.multiply(new BigDecimal(getDate[3])).divide(new BigDecimal(365),2, BigDecimal.ROUND_HALF_UP);
		person.set("premium", totelPre);
		//更新
		if(person.get("id")!=null) {
			person.set("birth", person.get("birth"))
			.set("gender", person.get("gender"))
			.set("id_num", person.get("id_num"))
			.set("id_type", person.get("id_type"))
			.set("name", person.get("name"))
			.set("occupation_category", person.get("occupation_category"))
			.set("phone", person.get("phone"))
			.set("remark", person.get("remark"))
			.set("guarantee_id", person.get("guarantee_id")).update();
			
			if(person.get("status")!=null) {
				GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
				groupInsurancePersonLog
				.set("customer_id", groupInsuranceOrder.getLong("insure_customer_id"))
				.set("policy_num", person.get("policy_num"))
				.set("name", person.get("name"))
				.set("order_id", person.getLong("order_id"))
				.set("change",person.get("premium"))
				.set("policy_effective_date", person.getDate("policy_effective_date"))
				.set("create_time", new Date());
				if(person.getInt("status")==2) {
					groupInsurancePersonLog.set("status",2);
				}
				else {
					groupInsurancePersonLog.set("status",0);
				}
				groupInsurancePersonLog.save();
			}
		}
		else {
			person.save();
			GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
			groupInsurancePersonLog
			.set("customer_id", groupInsuranceOrder.getLong("insure_customer_id"))
			.set("policy_num", person.get("policy_num"))
			.set("status", 0)
			.set("name", person.get("namename"))
			.set("change",person.get("premium"))
			.set("order_id",hiddenOrderId)
			.set("policy_effective_date", person.getDate("policy_effective_date"))
			.set("create_time", new Date()).save();
		}
		
		data.put("msg", "保存成功");
		data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		renderJson(data);
	}
	
	/**
	 * 根据订单id查找人员
	 * @param hiddenOrderId
	 * @param person
	 */
	public void queryPersonByOrderId() {
		Long orderId = getParaToLong("orderId");
		Map<String, Object> data = new HashMap<>();
		List<GroupInsurancePerson> persons = groupInsurancePersonService.findByOrderId(orderId);
		/*for (GroupInsurancePerson groupInsurancePerson : persons) {
			groupInsurancePerson.set("policy_effective_date", DateUtil.formatDate(groupInsurancePerson.getDate("policy_effective_date"), "yyyy-MM-dd"));
			groupInsurancePerson.set("policy_expiration_date", DateUtil.formatDate(groupInsurancePerson.getDate("policy_expiration_date"), "yyyy-MM-dd"));
		}*/
		if(CollectionUtils.isNotEmpty(persons)) {
			data.put("code", Constant.RESPONSE_CODE_SUCCESS);
			data.put("data", persons);
			renderJson(data);
		}
		renderJson(data);
		return;
	}
	
	/**
	 * Excel导入人员信息
	 * 
	 * @param filePath
	 * @param hiddenOrderId
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	public void importPerson(@Para("filePath") String filePath) throws Exception {
		Map<String, Object> data = new HashMap<>();
		Long hiddenOrderIdForImport = getParaToLong("hiddenOrderIdForImport");
        InputStream in =null;  
        List<List<Object>> listob = null;  

        if(filePath.isEmpty()){  
           data.put("msg", "文件导入错误！");  
        } else {
        	filePath = filePath.substring(filePath.indexOf("/upload"));
        	String pathPrefix = PathKit.getWebRootPath();
        	File file = new File(pathPrefix + filePath);
        	try {
    			in = new FileInputStream(file);
    			listob = new ImportExcelUtil().getBankListByExcel(in, file.getName(), 14);  
    			in.close();  
    		} catch (IOException e) {
    			e.printStackTrace();
    		} catch (Exception e) {
    			e.printStackTrace();
    		}  
        }
        
        if(listob.size() > 514) {
        	data.put("msg", "一次导入人数请不要超过500条！");
        	renderJson(data);
        	return;
        }
        
        GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(hiddenOrderIdForImport);
        //该处可调用service相应方法进行数据保存到数据库中，现只对数据输出  
        for (int i = 0; i < listob.size(); i++) {  
            List<Object> lo = listob.get(i);  
            if(i == 0) {
            	if(!"序号".equals(String.valueOf(lo.get(0)))) {
                	data.put("msg", "Excel文件格式不正确，请按模板导入！");
                	renderJson(data);
                	return;
                } else {
                	continue;
                }
            }
            //姓名、证件类型、证件号码、保障方案、职位类别中有一项为空就不保存
            if(StringUtils.isBlank(String.valueOf(lo.get(1))) || StringUtils.isBlank(String.valueOf(lo.get(2))) 
            		|| StringUtils.isBlank(String.valueOf(lo.get(3))) || StringUtils.isBlank(String.valueOf(lo.get(6))) 
            		|| StringUtils.isBlank(String.valueOf(lo.get(7)))||
            		StringUtils.isBlank(String.valueOf(lo.get(8)))||
            				StringUtils.isBlank(String.valueOf(lo.get(9)))||
            				StringUtils.isBlank(String.valueOf(lo.get(10)))) {
            	continue;
            }
            GroupInsurancePerson person = new GroupInsurancePerson();
            person.set("name",String.valueOf(lo.get(1)));
            switch (String.valueOf(lo.get(2))) {
			case "身份证":
				person.set("id_type",0);
				try {
					person.set("birth",DateUtil.parseDate(String.valueOf(lo.get(3)).substring(6, 14), new String[]{"yyyyMMdd"}));
				} catch (ParseException e) {
					e.printStackTrace();
				}
				if(CommonUtils.isOdd(String.valueOf(lo.get(3)).charAt(String.valueOf(lo.get(3)).length() - 2))) {
					person.set("gender",Constant.FEMALE);
				} else {
					person.set("gender",Constant.MALE);
				}
				break;
			case "护照":
				person.set("id_type",1);
				break;
			}
            person.set("id_num",String.valueOf(lo.get(3)));
            person.set("occupation_category",String.valueOf(lo.get(6)));
            
            if(order.get("max_occupation_category")!=null&&Integer.parseInt(person.get("occupation_category"))>order.getInt("max_occupation_category"))
    		{
    			data.put("msg", "职业类别不能高于"+order.getInt("max_occupation_category")+"类");
    			renderJson(data);
    			return;
    		}
            
            
            person.set("phone",String.valueOf(lo.get(10)));
            person.set("remark",String.valueOf(lo.get(11)));
            if(lo.get(12)==null) {
            	  person.set("policy_num",order.get("policy_num"));
            }
            person.set("policy_num",String.valueOf(lo.get(12)));
            person.set("policy_effective_date",lo.get(8).toString() + " 00:00:00");
            person.set("policy_expiration_date",lo.get(9).toString() + " 23:59:59");
            person.set("order_id",hiddenOrderIdForImport);
            
            if(order.get("max_insurance_age")!=null){
				int maxAge = order.get("max_insurance_age");
				int age = DateUtil.calcAge(person.getDate("birth"), new Date());
				if(age>maxAge) {
					data.put("msg", ""+person.getStr("name")+"已超过最大年龄!");
					renderJson(data);
					return;
				}
			}
            
            GroupInsuranceGuarantee groupInsuranceGuarantee = groupInsuranceGuaranteeService.findByOrderIdAndPlan(hiddenOrderIdForImport, String.valueOf(lo.get(7)));
            if(groupInsuranceGuarantee!=null) {
                person.set("guarantee_id",groupInsuranceGuarantee.get("id"));
                DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
                long[] getDate = DateUtil.getDatePoor(format.parse(person.get("policy_expiration_date")),format.parse(person.get("policy_effective_date"))); 
        		GroupInsuranceGuarantee guarantee = GroupInsuranceGuarantee.dao.findById(person.getLong("guarantee_id"));
        		BigDecimal premium = guarantee.getBigDecimal("premium");
        		BigDecimal totelPre = premium.multiply(new BigDecimal(getDate[3])).divide(new BigDecimal(365),2, BigDecimal.ROUND_HALF_UP);
        		person.set("premium", totelPre);
        		
        		
        		GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
        		groupInsurancePersonLog
        		.set("customer_id", order.getLong("insure_customer_id"))
        		.set("policy_num", person.get("policy_num"))
        		.set("status", 0)
        		.set("name", person.get("name"))
        		.set("order_id", person.getLong("order_id"))
        		.set("change",person.get("premium"))
        		.set("policy_effective_date", format.parse(person.get("policy_expiration_date")))
        		.set("create_time", new Date()).save();
            }
            
         
    		
            person.set("order_id",hiddenOrderIdForImport);
            person.set("create_time", new Date());
            person.save();
        }  
        data.put("msg", "导入成功");
        data.put("orderId", hiddenOrderIdForImport);
        data.put("code", Constant.RESPONSE_CODE_SUCCESS);
    	renderJson(data);
    	return;
	}
	
	/**
	 * 批量增退保模板
	 * 
	 * @param filePath
	 * @param hiddenOrderId
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	public void exportBatchPersonBtn(@Para("filePath") String filePath) throws Exception {
		Map<String, Object> data = new HashMap<>();
		Long hiddenOrderIdForImport = getParaToLong("hiddenOrderIdForImport");
        InputStream in =null;  
        List<List<Object>> listob = null;  

        if(filePath.isEmpty()){  
           data.put("msg", "文件导入错误！");  
        } else {
        	filePath = filePath.substring(filePath.indexOf("/upload"));
        	String pathPrefix = PathKit.getWebRootPath();
        	File file = new File(pathPrefix + filePath);
        	try {
    			in = new FileInputStream(file);
    			listob = new ImportExcelUtil().getBankListByExcel(in, file.getName(), 9);  
    			in.close();  
    		} catch (IOException e) {
    			e.printStackTrace();
    		} catch (Exception e) {
    			e.printStackTrace();
    		}  
        }
        
        if(listob.size() > 514) {
        	data.put("msg", "一次导入人数请不要超过500条！");
        	renderJson(data);
        	return;
        }
        
        GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(hiddenOrderIdForImport);
        
        List<GroupInsurancePersonLog> logs = new ArrayList<>();
        //该处可调用service相应方法进行数据保存到数据库中，现只对数据输出  
        for (int i = 0; i < listob.size(); i++) {  
            List<Object> lo = listob.get(i);  
            if(i == 0) {
            	if(!"序号".equals(String.valueOf(lo.get(0)))) {
            		data.put("msg", "Excel文件格式不正确，请按模板导入！");
                	renderJson(data);
                	return;
                } else {
                	continue;
                }
            }
            //姓名、证件类型、证件号码、保障方案、职位类别中有一项为空就不保存
            if(StringUtils.isBlank(String.valueOf(lo.get(1))) || StringUtils.isBlank(String.valueOf(lo.get(2))) 
            		|| StringUtils.isBlank(String.valueOf(lo.get(3)))
            		||StringUtils.isBlank(String.valueOf(lo.get(7)))
            		||StringUtils.isBlank(String.valueOf(lo.get(8)))||
            				StringUtils.isBlank(String.valueOf(lo.get(9)))) {
            	continue;
            }
            String idNum = String.valueOf(lo.get(3));

            if(String.valueOf(lo.get(1)).equals("减保")) {
                GroupInsurancePerson person = groupInsurancePersonService.findByIdNumAndOrderId(idNum,hiddenOrderIdForImport);
                if(person==null) {
                	{
                    	data.put("msg", "未找到"+String.valueOf(lo.get(2))+"的承保信息");
                    	renderJson(data);
                    	return;
                    }
                }
                else {
                	if(!person.getStr("name").equals(String.valueOf(lo.get(2)))) 
                     {
                     	data.put("msg", "身份证为"+idNum+"的人员信息不匹配");
                     	renderJson(data);
                     	return;
                     }
                }
                GroupInsuranceGuarantee groupInsuranceGuarantee = groupInsuranceGuaranteeService.findByOrderIdAndPlan(hiddenOrderIdForImport, String.valueOf(lo.get(7)));
                if(groupInsuranceGuarantee!=null) {
                    DateFormat format = new SimpleDateFormat("yyyy-MM-dd");  
                    person.set("guarantee_id",groupInsuranceGuarantee.get("id"));
                    person.set("remark",String.valueOf(lo.get(10)));
                    person.set("job_type",String.valueOf(lo.get(4)));
                    Date policy_expiration_date = format.parse(String.valueOf(lo.get(8)));
                    Date newDate = DateUtil.addDays(policy_expiration_date, 1);
                    person.set("policy_expiration_date", newDate);
                    person.set("status", 2);
            		long[] getDate = DateUtil.getDatePoor(newDate, person.getDate("policy_effective_date")); 
            		GroupInsuranceGuarantee guarantee = GroupInsuranceGuarantee.dao.findById(person.getLong("guarantee_id"));
            		BigDecimal premium = guarantee.getBigDecimal("premium");
            		BigDecimal totelPre = premium.multiply(new BigDecimal(getDate[3])).divide(new BigDecimal(365),2, BigDecimal.ROUND_HALF_UP);
            		person.set("premium", totelPre);
            		person.update();
            		
            		   GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
                 		groupInsurancePersonLog
                 		.set("customer_id", order.getLong("insure_customer_id"))
                 		.set("policy_num", person.get("policy_num"))
                 		.set("status", 2)
                 		.set("name", person.get("name"))
                 		.set("order_id", person.getLong("order_id"))
                 		.set("person_id", person.getLong("id"))
                 		.set("job_type",String.valueOf(lo.get(4)))
                 		.set("change",person.get("premium"))
                 		.set("policy_effective_date", person.get("policy_expiration_date"))
                 		.set("create_time", new Date()).save();
                 		groupInsurancePersonLog.put("id_num",person.get("id_num"));
                  		groupInsurancePersonLog.put("job_type",person.get("job_type"));
                  		groupInsurancePersonLog.put("gender",person.get("gender"));
                  		groupInsurancePersonLog.put("premium",person.get("premium"));

                 		logs.add(groupInsurancePersonLog);
                }
              
                
            }
            else if(String.valueOf(lo.get(1)).equals("加保")){
            	 GroupInsurancePerson person = new GroupInsurancePerson();
                 person.set("name",String.valueOf(lo.get(2)));
                 person.set("id_type",0);
     					person.set("birth",DateUtil.parseDate(String.valueOf(lo.get(3)).substring(6, 14), new String[]{"yyyyMMdd"}));
     				if(CommonUtils.isOdd(String.valueOf(lo.get(3)).charAt(String.valueOf(lo.get(3)).length() - 2))) {
     					person.set("gender",Constant.FEMALE);
     				} else {
     					person.set("gender",Constant.MALE);
     				}
                 person.set("id_num",String.valueOf(lo.get(3)));
                 //person.set("occupation_category",String.valueOf(lo.get(6)));
                 //person.set("phone",String.valueOf(lo.get(10)));
                 person.set("remark",String.valueOf(lo.get(10)));
                 person.set("job_type",String.valueOf(lo.get(4)));
                 person.set("policy_num",order.get("policy_num"));
                 person.set("policy_effective_date",String.valueOf(lo.get(8)));
                 person.set("policy_expiration_date",order.get("policy_expiration_date"));
                 person.set("order_id",hiddenOrderIdForImport);
                 
                 if(order.get("max_insurance_age")!=null){
     				int maxAge = order.get("max_insurance_age");
     				int age = DateUtil.calcAge(DateUtil.parseDate(String.valueOf(lo.get(3)).substring(6, 14), new String[]{"yyyyMMdd"}), new Date());
     				if(age>maxAge) {
     					data.put("msg", ""+person.getStr("name")+"已超过最大年龄!");
     					renderJson(data);
     					return;
     				}
     			}
                 
                 GroupInsuranceGuarantee groupInsuranceGuarantee = groupInsuranceGuaranteeService.findByOrderIdAndPlan(hiddenOrderIdForImport, String.valueOf(lo.get(7)));
                 if(groupInsuranceGuarantee!=null) {
                     person.set("guarantee_id",groupInsuranceGuarantee.get("id"));
                     DateFormat format = new SimpleDateFormat("yyyy-MM-dd");  
                     long[] getDate = DateUtil.getDatePoor(format.parse(person.get("policy_expiration_date").toString()),format.parse(person.get("policy_effective_date").toString())); 
             		GroupInsuranceGuarantee guarantee = GroupInsuranceGuarantee.dao.findById(person.getLong("guarantee_id"));
             		BigDecimal premium = guarantee.getBigDecimal("premium");
             		BigDecimal totelPre = premium.multiply(new BigDecimal(getDate[3])).divide(new BigDecimal(365),2, BigDecimal.ROUND_HALF_UP);
             		person.set("premium", totelPre);
             		
             		
                 }
                 
              
         		
                 person.set("order_id",hiddenOrderIdForImport);
                 person.set("create_time", new Date());
                 person.save();
                 
                 GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
          		groupInsurancePersonLog
          		.set("customer_id", order.getLong("insure_customer_id"))
          		.set("policy_num", person.get("policy_num"))
          		.set("status", 0)
          		.set("name", person.get("name"))
          		.set("order_id", person.getLong("order_id"))
          		.set("person_id", person.getLong("id"))
          		.set("change",person.get("premium"))
          		.set("policy_effective_date", person.get("policy_expiration_date"))
          		.set("create_time", new Date()).save();
          		groupInsurancePersonLog.put("id_num",person.get("id_num"));
          		groupInsurancePersonLog.put("job_type",person.get("job_type"));
          		groupInsurancePersonLog.put("gender",person.get("gender"));
        		groupInsurancePersonLog.put("premium",person.get("premium")==null?BigDecimal.ZERO:person.get("premium"));
          		logs.add(groupInsurancePersonLog);
            }
            
        }  
        new Thread(new Runnable(){
			public void run() {
		        try {
					emailService.sendChangePersonEmail(hiddenOrderIdForImport,logs);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			}).start();
        
        //发送邮件
        data.put("msg", "导入成功");
        data.put("orderId", hiddenOrderIdForImport);
        data.put("code", Constant.RESPONSE_CODE_SUCCESS);
    	renderJson(data);
    	return;
	}
	
	
	/**
	 * 批量修改层级模板
	 * 
	 * @param filePath
	 * @param hiddenOrderId
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	public void exportChangePersonBtn(@Para("filePath") String filePath) throws Exception {
		Map<String, Object> data = new HashMap<>();
		Long hiddenOrderIdForImport = getParaToLong("hiddenOrderIdForImport");
        InputStream in =null;  
        List<List<Object>> listob = null;  
        List<GroupInsurancePersonLog> logs = new ArrayList<>();
        if(filePath.isEmpty()){  
           data.put("msg", "文件导入错误！");  
        } else {
        	filePath = filePath.substring(filePath.indexOf("/upload"));
        	String pathPrefix = PathKit.getWebRootPath();
        	File file = new File(pathPrefix + filePath);
        	try {
    			in = new FileInputStream(file);
    			listob = new ImportExcelUtil().getBankListByExcel(in, file.getName(), 8);  
    			in.close();  
    		} catch (IOException e) {
    			e.printStackTrace();
    		} catch (Exception e) {
    			e.printStackTrace();
    		}  
        }
        
        if(listob.size() > 514) {
        	data.put("msg", "一次导入人数请不要超过500条！");
        	renderJson(data);
        	return;
        }
        
        GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(hiddenOrderIdForImport);
        //该处可调用service相应方法进行数据保存到数据库中，现只对数据输出  
        for (int i = 0; i < listob.size(); i++) {  
            List<Object> lo = listob.get(i);  
            if(i == 0) {
            	if(!"序号".equals(String.valueOf(lo.get(1)))) {
            		data.put("msg", "Excel文件格式不正确，请按模板导入！");
                	renderJson(data);
                	return;
                } else {
                	continue;
                }
            }
            //姓名、证件类型、证件号码、保障方案、职位类别中有一项为空就不保存
            if(StringUtils.isBlank(String.valueOf(lo.get(1))) || StringUtils.isBlank(String.valueOf(lo.get(2))) 
            		|| StringUtils.isBlank(String.valueOf(lo.get(6)))
            		||StringUtils.isBlank(String.valueOf(lo.get(7)))
            		||StringUtils.isBlank(String.valueOf(lo.get(8)))||
            				StringUtils.isBlank(String.valueOf(lo.get(9)))) {
            	continue;
            }
            String idNum = String.valueOf(lo.get(3));

                GroupInsurancePerson person = groupInsurancePersonService.findByIdNumAndOrderId(idNum,hiddenOrderIdForImport);
                if(person==null) {
                	{
                    	data.put("msg", "未找到"+String.valueOf(lo.get(2))+"的承保信息");
                    	renderJson(data);
                    	return;
                    }
                }
                else {
                	if(!person.getStr("name").equals(String.valueOf(lo.get(2)))) 
                     {
                     	data.put("msg", "身份证为"+idNum+"的人员信息不匹配");
                     	renderJson(data);
                     	return;
                     }
                }
                GroupInsuranceGuarantee groupInsuranceGuarantee = groupInsuranceGuaranteeService.findByOrderIdAndPlan(hiddenOrderIdForImport, String.valueOf(lo.get(7)));
                GroupInsuranceGuarantee newGroupInsuranceGuarantee = groupInsuranceGuaranteeService.findByOrderIdAndPlan(hiddenOrderIdForImport, String.valueOf(lo.get(8)));
                if(groupInsuranceGuarantee==null) {
                	data.put("msg", "未找到方案"+String.valueOf(lo.get(7))+"");
                 	renderJson(data);
                 	return;
                }
                if(newGroupInsuranceGuarantee!=null) {
                	 DateFormat format = new SimpleDateFormat("yyyy-MM-dd");  
                     person.set("guarantee_id",newGroupInsuranceGuarantee.get("id"));
                     person.set("remark",String.valueOf(lo.get(11)));
                     Date policy_expiration_date = format.parse(String.valueOf(lo.get(9)));
                     Date newDate = DateUtil.addDays(policy_expiration_date, 1);
                     person.set("policy_expiration_date", newDate);
             		long[] getDate = DateUtil.getDatePoor(newDate, person.getDate("policy_effective_date")); 
             		GroupInsuranceGuarantee guarantee = GroupInsuranceGuarantee.dao.findById(person.getLong("guarantee_id"));
             		BigDecimal premium = guarantee.getBigDecimal("premium");
             		BigDecimal totelPre = premium.multiply(new BigDecimal(getDate[3])).divide(new BigDecimal(365),2, BigDecimal.ROUND_HALF_UP);
             		person.set("premium", totelPre);
             		person.update();
             		
             		
             		GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
            		groupInsurancePersonLog
            		.set("customer_id", order.getLong("insure_customer_id"))
            		.set("policy_num", person.get("policy_num"))
            		.set("status", 4)
            		.set("name", person.get("name"))
            		.set("order_id", person.getLong("order_id"))
            		.set("change",person.get("premium"))
            		.set("policy_effective_date", person.getDate("policy_effective_date"))
            		.set("create_time", new Date()).save();
            		groupInsurancePersonLog.put("id_num",person.get("id_num"));
              		groupInsurancePersonLog.put("job_type",person.get("job_type"));
              		groupInsurancePersonLog.put("gender",person.get("gender"));
            		groupInsurancePersonLog.put("premium",person.get("premium")==null?BigDecimal.ZERO:person.get("premium"));

            		logs.add(groupInsurancePersonLog);
                }
                else {
                	data.put("msg", "未找到变更方案"+String.valueOf(lo.get(7))+"");
                 	renderJson(data);
                 	return;
                }
        
        }
        
        new Thread(new Runnable(){
			public void run() {
		        try {
					emailService.sendChangePersonEmail(hiddenOrderIdForImport,logs);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			}).start();
        data.put("msg", "导入成功");
        data.put("orderId", hiddenOrderIdForImport);
        data.put("code", Constant.RESPONSE_CODE_SUCCESS);
    	renderJson(data);
    	return;
	}
	
	
	/**
	 * 保存服务信息
	 * @param hiddenOrderIdForGuarantee4
	 * @param service_person
	 * @param service_phone
	 * @param prompt_info
	 * @param claim_flow
	 */
	public void saveServiceInfo() {
		Map<String, Object> data = new HashMap<>();
		Long hiddenOrderIdForGuarantee5 =getParaToLong("hiddenOrderIdForGuarantee5");
        GroupInsuranceOrder order = getModel(GroupInsuranceOrder.class);
        order.set("id", hiddenOrderIdForGuarantee5);
        order.set("step_fifth", 1);
		 order.update();
		//完成5步走更新为已出单
			if(groupInsuranceOrderService.isComplete(hiddenOrderIdForGuarantee5)) {
				order.set("status", 2).update();
			}
		 data.put("msg", "保存成功");
	     data.put("code", Constant.RESPONSE_CODE_SUCCESS);
	     renderJson(data);
	     return;
	}
	
	/**
	 * 删除人员
	 */
	public void delete() {
		String ids = getPara("ids");
		Map<String, Object> data = new HashMap<>();
		try {
		groupInsurancePersonService.delete(ids);
		}
		catch (Exception e) {
			e.printStackTrace();
			 data.put("msg", "刪除失败!"+e.getMessage());
		     data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		     renderJson(data);
		     return;
		}
		 data.put("msg", "刪除成功");
	     data.put("code", Constant.RESPONSE_CODE_SUCCESS);
	     renderJson(data);
	     return;
	}
	
	/**
	 * 删除订单
	 * 
	 */
	public void deleteOrder(Long id) {
		Map<String, Object> data = new HashMap<>();
		try {
		groupInsuranceOrderService.delete(id);
		}
		catch (Exception e) {
			e.printStackTrace();
			 data.put("msg", "刪除失败!"+e.getMessage());
		     data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		     renderJson(data);
		     return;
		}
		 data.put("msg", "刪除成功");
	     data.put("code", Constant.RESPONSE_CODE_SUCCESS);
	     renderJson(data);
	     return;
	}
	
	/**
	 * 选择单位
	 */
	public void selectCustomer() {
		Long id = getParaToLong("id");
		List<Map<String, Object>> data = new ArrayList<>();
		List<CustomerInfo> customerInfos = customerInfoService.findByGroupId(id);
		for (CustomerInfo customerInfo : customerInfos) {
			Map<String, Object> item = new HashMap<>();
			item.put("name", customerInfo.get("customer_name"));
			item.put("value", customerInfo.get("id"));
			data.add(item);
		}
		renderJson(data);
	}
	
	/**
	 * 退保
	 */
	public void cancelPerson() {
		Map<String, Object> data = new HashMap<>();
		Long id = getParaToLong("personId");
		GroupInsurancePerson person = GroupInsurancePerson.dao.findById(id);
		GroupInsuranceOrder groupInsuranceOrder = GroupInsuranceOrder.dao.findById(person.getLong("order_id"));

		person.set("status", 2);
		long[] getDate = DateUtil.getDatePoor(new Date(), person.getDate("policy_effective_date")); 
		GroupInsuranceGuarantee guarantee = GroupInsuranceGuarantee.dao.findById(person.getLong("guarantee_id"));
		if(guarantee!=null) {
		BigDecimal premium = guarantee.getBigDecimal("premium");
		BigDecimal totelPre = premium.multiply(new BigDecimal(getDate[3])).divide(new BigDecimal(365),2, BigDecimal.ROUND_HALF_UP);
		person.set("premium", totelPre);
		person.update();
		}
		   List<GroupInsurancePersonLog> logs = new ArrayList<>();

		GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
		groupInsurancePersonLog
		.set("customer_id", groupInsuranceOrder.getLong("insure_customer_id"))
		.set("policy_num", person.get("policy_num"))
		.set("status", 2)
		.set("name", person.get("name"))
		.set("order_id", person.getLong("order_id"))
		.set("change",person.get("premium"))
		.set("policy_effective_date", person.getDate("policy_effective_date"))
		.set("create_time", new Date()).save();
		groupInsurancePersonLog.put("id_num",person.get("id_num"));
  		groupInsurancePersonLog.put("job_type",person.get("job_type"));
  		groupInsurancePersonLog.put("gender",person.get("gender"));
		groupInsurancePersonLog.put("premium",person.get("premium")==null?BigDecimal.ZERO:person.get("premium"));
		
		logs.add(groupInsurancePersonLog);
		
		
		  new Thread(new Runnable(){
				public void run() {
			        try {
						emailService.sendChangePersonEmail(person.getLong("order_id"),logs);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
				}).start();
		  
		data.put("msg", "保存成功");
		data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		renderJson(data);
	}
	
	/**
	 * 进保
	 */
	public void comePerson() {
		Map<String, Object> data = new HashMap<>();
		Long id = getParaToLong("personId");
		GroupInsurancePerson person = GroupInsurancePerson.dao.findById(id);
		GroupInsuranceOrder groupInsuranceOrder = GroupInsuranceOrder.dao.findById(person.getLong("order_id"));
		person.set("status", 0);
		long[] getDate = DateUtil.getDatePoor(person.getDate("policy_expiration_date"), person.getDate("policy_effective_date")); 
		GroupInsuranceGuarantee guarantee = GroupInsuranceGuarantee.dao.findById(person.getLong("guarantee_id"));
		if(guarantee!=null) {
		BigDecimal premium = guarantee.getBigDecimal("premium");
		BigDecimal totelPre = premium.multiply(new BigDecimal(getDate[3])).divide(new BigDecimal(365),2, BigDecimal.ROUND_HALF_UP);
		person.set("premium", totelPre);
		person.update();
		}
		   List<GroupInsurancePersonLog> logs = new ArrayList<>();

		  GroupInsurancePersonLog groupInsurancePersonLog = new GroupInsurancePersonLog();
		groupInsurancePersonLog
		.set("customer_id", groupInsuranceOrder.getLong("insure_customer_id"))
		.set("policy_num", person.get("policy_num"))
		.set("status", 0)
		.set("name", person.get("name"))
		.set("order_id", person.getLong("order_id"))
		.set("change",person.get("premium"))
		.set("policy_effective_date", person.getDate("policy_effective_date"))
		.set("create_time", new Date()).save();
		groupInsurancePersonLog.put("id_num",person.get("id_num"));
  		groupInsurancePersonLog.put("job_type",person.get("job_type"));
  		groupInsurancePersonLog.put("gender",person.get("gender"));
		groupInsurancePersonLog.put("premium",person.get("premium")==null?BigDecimal.ZERO:person.get("premium"));

    		logs.add(groupInsurancePersonLog);
		
		
		  new Thread(new Runnable(){
				public void run() {
			        try {
						emailService.sendChangePersonEmail(person.getLong("order_id"),logs);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
				}).start();
		
		data.put("msg", "保存成功");
		data.put("code", Constant.RESPONSE_CODE_SUCCESS);
		renderJson(data);
	}
	
	/**
	 * 人员增删记录页面
	 */
	public void personLog() {
		render("personLog.html");
	}
	
	public void getPersonLog() {
		String customerName = getPara("customer_name");
		String policyNum = getPara("policy_num");
		String name = getPara("name");
		String createTime = getPara("create_time");
		String policyEffectiveDate = getPara("policy_effective_date");
		String insurance_type = getPara("insurance_type");
		int page = getParaToInt("page");
		int size = getParaToInt("limit");
		renderJson(GroupInsurancePersonLog.selectPage(page,size,customerName,policyNum,name,createTime,policyEffectiveDate,insurance_type));
	}
	
}