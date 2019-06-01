package com.crm.controller.admin.group;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
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
import com.crm.controller.admin.BaseController;
import com.crm.model.group.GroupInsuranceCompany;
import com.crm.model.group.GroupInsuranceGuarantee;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.group.Guarantee;
import com.crm.poi.ImportExcelUtil;
import com.crm.service.group.GroupInsuranceGuaranteeService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.util.CommonUtils;
import com.crm.util.Constant;
import com.crm.util.DateUtil;
import com.crm.util.IDCardUtils;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.kit.HttpKit;
import com.jfinal.kit.PathKit;
public class GroupInsuranceController extends BaseController<GroupInsuranceOrder>{
	@Inject
	private GroupInsuranceOrderService groupInsuranceOrderService;
	@Inject
	private GroupInsuranceGuaranteeService groupInsuranceGuaranteeService;
	@Inject
	private GroupInsurancePersonService groupInsurancePersonService;
	
	//团险理赔类型
	public static final int GROUP_CLAIM_TYPE =1;
	/**
	 * 去团险首页
	 */
	public void index() {
		//获取品牌集合
		//setAttr("brands", brandService.selectList());
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
		
		renderJson(groupInsuranceOrderService.selectPage(params, getPage()));
	}
	
	/**
	 * 添加页面
	 */
	public void add() {
		//获取品牌集合
		//setAttr("brands", brandService.selectList());
		//setAttr("claimItemConfigs", claimItemConfigService.findRoots());
		//setAttr("claimDataConfigs", claimDataConfigService.findAll());
		render("add.html");
	}
	
	/**
	 * 编辑页面
	 * @param id
	 */
	public void edit(Long id) {
		//获取品牌集合
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		//GroupInsuranceCompany company = GroupInsuranceCompany.dao.findById((Long)order.get("company_id"));
		//setAttr("brands", brandService.selectList());
		setAttr("order", order);
		//setAttr("company", company);
		int size = 0;
		Map<Long,List<Guarantee>> guaranteeMap = new HashMap<>();
		List<GroupInsuranceGuarantee> groupInsuranceGuarantees = groupInsuranceGuaranteeService.findByOrderId(id);
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
	 * 编辑页面
	 * @param id
	 */
	public void view(Long id) {
		//获取品牌集合
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
		//GroupInsuranceCompany company = GroupInsuranceCompany.dao.findById((Long)order.get("company_id"));
		//if(order.get("brand_id")!=null) {
		//setAttr("brand", Brand.dao.findById((Long)order.get("brand_id")));
		//}
		setAttr("order", order);
		//setAttr("company", company);
		int size = 0;
		Map<Long,List<Guarantee>> guaranteeMap = new HashMap<>();
		List<GroupInsuranceGuarantee> groupInsuranceGuarantees = groupInsuranceGuaranteeService.findByOrderId(id);
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
					plans.add(guaranteeMap.get(guarant.get("id")).get(i).getValue());
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
	public void saveBaseInfo(Long hiddenCompanyId, GroupInsuranceCompany company, GroupInsuranceOrder order) throws Exception {
		Map<String, Object> data = new HashMap<>();
		
		//若企业不存在，应保存企业信息
		if(hiddenCompanyId == null || hiddenCompanyId <= 0) {
			/*if(companyService.findByNameAndLicence(company.get("name"),company.get("licence_num")) != null){
				data.put("msg", "企业已经存在，请勿重复保存！");
				renderJson(data);
				return;
			}*/
			if(StringUtils.isBlank(company.get("phone"))) {
				data.put("msg", "请填写联系人手机号！");
				renderJson(data);
				return;
			}
			//GroupInsuranceCompany pCompany = companyService.saveCompany(company);
			//order.set("company_id",pCompany.get("id"));
		} else {
			GroupInsuranceCompany pCompany = GroupInsuranceCompany.dao.findById(hiddenCompanyId);
			pCompany.set("name",company.get("name"));
			pCompany.set("id_num",company.get("id_num"));
			pCompany.set("licence_num",company.get("licence_num"));
			pCompany.set("licence_type",company.get("licence_type"));
			pCompany.set("contacts",company.get("contacts"));
			pCompany.set("industry_category",company.get("industry_category"));
			pCompany.set("main_business",company.get("main_business"));
			pCompany.set("phone",company.get("phone"));
			pCompany.set("address",company.get("address"));
			pCompany.set("email",company.get("email"));
			pCompany.set("insured_address",company.get("insured_address"));
			//companyService.update(pCompany);
			//order.set("company_id",pCompany.get("id"));
		}
		
		Date policyEffectiveDate = DateUtil.parseDate(DateUtil.formatDate(order.get("policy_effective_date"),"yyyy-MM-dd") + " 00:00:00");
		Date policyExpirationDate = DateUtil.parseDate(DateUtil.formatDate(order.get("policy_expiration_date"),"yyyy-MM-dd") + " 23:59:59");
		
		//设置生效时间
		order.set("policy_effective_date",policyEffectiveDate);
		//设置终止时间
		order.set("policy_expiration_date",policyExpirationDate);
		
		if(order.get("id")==null) {
			GroupInsuranceOrder createdOrder = groupInsuranceOrderService.create(order);
			data.put("code", Constant.RESPONSE_CODE_SUCCESS);
			data.put("msg", "新增成功");
			data.put("orderId", createdOrder.get("id"));
		}
		else {
			GroupInsuranceOrder existsOrder = GroupInsuranceOrder.dao.findById((Long)order.get("id"));
			existsOrder.set("company_id",order.get("company_id"));
			existsOrder.set("type",order.get("type"));
			existsOrder.set("brand_id",order.get("brand_id"));
			existsOrder.set("insurance_type",order.get("insurance_type"));
			existsOrder.set("plan_name",order.get("plan_name"));
			existsOrder.set("policy_effective_date",order.get("policy_effective_date"));
			existsOrder.set("policy_expiration_date",order.get("policy_expiration_date"));
			existsOrder.set("policy_num",order.get("policy_num"));
			existsOrder.set("premium",order.get("premium"));
			existsOrder.set("subject_info", order.get("subject_info"));
			data.put("msg", "更新成功");
			data.put("code", Constant.RESPONSE_CODE_SUCCESS);
			groupInsuranceOrderService.update(existsOrder);
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
		String json = HttpKit.readData(getRequest());
		JSONObject obj=JSON.parseObject(json);
		JSONArray jsarr=obj.getJSONArray("guaranteeList");
		if(jsarr!=null) {
		Long hiddenOrderIdForGuarantee = obj.getLong("hiddenOrderIdForGuarantee");
		//保存之前先根据order_id，删除已有项目
		if(!groupInsurancePersonService.existsGuatantee(hiddenOrderIdForGuarantee)) {
			groupInsuranceGuaranteeService.deleteByOrderId(hiddenOrderIdForGuarantee);
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
	public void saveGuaranteeDesc(Long hiddenOrderIdForGuarantee2, String guarantee_desc) {
		Map<String, Object> data = new HashMap<>();
		GroupInsuranceOrder existsOrder = GroupInsuranceOrder.dao.findById(hiddenOrderIdForGuarantee2);
		existsOrder.set("guarantee_desc",guarantee_desc);
		existsOrder.update();
		data.put("orderId", hiddenOrderIdForGuarantee2);
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
	public void findGuaranteeSchemes(Long orderId) {
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
	 */
	public void addPerson(Long hiddenOrderId, GroupInsurancePerson person) {
		Map<String, Object> data = new HashMap<>();
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
		if(!IDCardUtils.isValidatedAllIdcard(person.get("id_num"))) {
			data.put("msg", "证件号码不合法!");
			renderJson(data);
			return;
		}
		
		
		
		if((int)person.get("id_type")==0) {
			if(CommonUtils.isOdd(person.get("id_num").toString().charAt(person.get("id_num").toString().length() - 2))) {
				person.set("gender",Constant.FEMALE);
			} else {
				person.set("gender",Constant.MALE);
			}
			
			try {
				person.set("birth",DateUtil.parseDate(person.get("id_num").toString().substring(6, 14), new String[]{"yyyyMMdd"}));
			} catch (ParseException e) {
				e.printStackTrace();
			}
		} else {
			person.set("gender",person.get("person.gender"));
			person.set("birth",new Date());
		}
		person.set("create_time", new Date());
		person.set("order_id",hiddenOrderId);
		
		//更新
		if(person.get("id")!=null) {
			GroupInsurancePerson newPerson = GroupInsurancePerson.dao.findById((Long)person.get("id"));
			newPerson.set("birth", person.get("birth"))
			.set("gender", person.get("gender"))
			.set("id_num", person.get("id_num"))
			.set("id_type", person.get("id_type"))
			.set("name", person.get("name"))
			.set("occupation_category", person.get("occupation_category"))
			.set("phone", person.get("phone"))
			.set("remark", person.get("remark"))
			.set("guarantee_id", person.get("guarantee_id")).update();
		}
		else {
			person.save();
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
	public void queryPersonByOrderId(Long orderId) {
		Map<String, Object> data = new HashMap<>();
		List<GroupInsurancePerson> persons = groupInsurancePersonService.findByOrderId(orderId);
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
	 */
	public void importPerson(String filePath, Long hiddenOrderIdForImport) {
		Map<String, Object> data = new HashMap<>();
          
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
                	break;
                } else {
                	continue;
                }
            }
            //姓名、证件类型、证件号码、保障方案、职位类别中有一项为空就不保存
            if(StringUtils.isBlank(String.valueOf(lo.get(1))) || StringUtils.isBlank(String.valueOf(lo.get(2))) 
            		|| StringUtils.isBlank(String.valueOf(lo.get(3))) || StringUtils.isBlank(String.valueOf(lo.get(6))) 
            		|| StringUtils.isBlank(String.valueOf(lo.get(7)))) {
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
            person.set("phone",String.valueOf(lo.get(8)));
            GroupInsuranceGuarantee groupInsuranceGuarantee = groupInsuranceGuaranteeService.findByOrderIdAndPlan(hiddenOrderIdForImport, String.valueOf(lo.get(7)));
            if(groupInsuranceGuarantee!=null) {
                person.set("guarantee_id",groupInsuranceGuarantee.get("id"));
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
	 * 保存服务信息
	 * @param hiddenOrderIdForGuarantee4
	 * @param service_person
	 * @param service_phone
	 * @param prompt_info
	 * @param claim_flow
	 */
	public void saveServiceInfo(Long hiddenOrderIdForGuarantee5, String service_person, 
			String service_phone, String prompt_info, String claim_flow) {
		Map<String, Object> data = new HashMap<>();
		
		GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(hiddenOrderIdForGuarantee5);
		order.set("service_person",service_person);
		order.set("service_phone",service_phone);
		order.set("prompt_info",prompt_info);
		order.set("claim_flow",claim_flow);
		order.update();
		 data.put("msg", "保存成功");
	     data.put("code", Constant.RESPONSE_CODE_SUCCESS);
	     renderJson(data);
	     return;
	}
	
	/**
	 * 删除人员
	 */
	public void delete(String ids) {
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
	
	
	
}