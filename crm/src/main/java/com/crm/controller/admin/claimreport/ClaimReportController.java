package com.crm.controller.admin.claimreport;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.claimreport.ClaimReport;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.system.User;
import com.crm.service.claimreport.ClaimReportService;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.system.AdminLoginService;
import com.crm.util.Constant;
import com.crm.util.DateUtil;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.kit.StrKit;
/**
 * 理赔管理信息控制类
 * @author chenglongw
 *
 */
public class ClaimReportController extends BaseController<ClaimReport> {
	
	@Inject
	private CustomerInfoService customerInfoService;
	@Inject
	private ClaimReportService claimReportService;
    @Inject
    private AdminLoginService adminLoginService;
    @Inject
	private GroupInsuranceOrderService groupInsuranceOrderService;
    @Inject
	private GroupInsurancePersonService personService;
    
     /**
      * 列表获取
     */
	public void list() {
		Map<String, String> params = new HashMap<>();
		//查询参数
		params.put("customerName", getPara("customer_name"));
		params.put("policyNum", getPara("policy_num"));
		params.put("persionName", getPara("persion_name"));
		params.put("certNo", getPara("cert_no"));
		params.put("status", getPara("status"));
		DataGrid<ClaimReport> dataGrid = claimReportService.selectPage(params, getPage());
		List<ClaimReport> claimReports = dataGrid.getData();
		dataGrid.setData(claimReports);
		renderJson(dataGrid);
	}
	
	/**
	 * 去添加页面
	 */
	public void add() {
		List<CustomerInfo> customerInfos = customerInfoService.selectList();
		setAttr("customerInfos", customerInfos);
		render("add.html");
	}
	
	/**
	 * 查询保单号
	 */
	public void getPolicyNum() {
		Long customerId = getParaToLong("customer_id");
		List<GroupInsuranceOrder> groupInsuranceOrders = groupInsuranceOrderService.queryByCustomerId(customerId);
		renderJson(groupInsuranceOrders);
		
	}
	
	/**
	 * 查询人员保单号
	 */
	public void getPersion() {
		String policyNum = getPara("policy_num");
		List<GroupInsurancePerson> groupInsurancePersons = personService.findByPolicyNum(policyNum);
		renderJson(groupInsurancePersons);
		
	}
	
	/**
	 * 查询人员身份证号码
	 */
	public void getCertNo() {
		String id = getPara("id");
		GroupInsurancePerson groupInsurancePerson = GroupInsurancePerson.dao.findById(id);
		renderJson(groupInsurancePerson);
		
	}
	
	/**
	 * 去编辑页面
	 */
	public void edit() {
		Long id = getParaToLong("id");
		if(id==null) {
			render("index.html");
			return;
		}
		ClaimReport claimReport = ClaimReport.dao.findById(id);
		if(claimReport==null) {
			render("index.html");
			return;
		}
		List<CustomerInfo> customerInfos = customerInfoService.selectList();
		setAttr("customerInfos", customerInfos);
		setAttr("claimReport", claimReport);
		render("edit.html");
	}
	
	/**
	 * 保存
	 */
	public void save(){
		ClaimReport claimReport = getModel(ClaimReport.class);
		 BaseResponse response = new BaseResponse();
 		
 		if(StrKit.isBlank(claimReport.getStr("customer_id"))) {
 			response.setCode(Constant.RESPONSE_CODE_FAIL);
 			response.setMessage("保存失败！客户保险公司名称不能为空");
 			renderJson(response);
 			return;
 		}
 		if(StrKit.isBlank(claimReport.getStr("policy_num"))) {
 			response.setCode(Constant.RESPONSE_CODE_FAIL);
 			response.setMessage("保存失败！保单号不能为空");
 			renderJson(response);
 			return;
 		}
 		if(StrKit.isBlank(claimReport.getStr("person_id"))) {
 			response.setCode(Constant.RESPONSE_CODE_FAIL);
 			response.setMessage("保存失败！伤者姓名不能为空");
 			renderJson(response);
 			return;
 		}
 		GroupInsurancePerson groupInsurancePerson = GroupInsurancePerson.dao.findById(claimReport.getStr("person_id"));
 		claimReport.set("persion_name", groupInsurancePerson.get("name"));
 		//新增操作
 		if(claimReport.getLong("id") == null) {
 			User admin = adminLoginService.getLoginAdminWithSessionId(getCookie(Constant.COOKIE_SESSION_ID_NAME));
 			if(admin==null) {
 				response.setCode(Constant.RESPONSE_CODE_FAIL);
 				response.setMessage("添加失败！");
 				renderJson(response);
 			}
 			claimReport.set("create_time", DateUtil.getDateTime(null));
 			if(claimReportService.add(claimReport) == null) {
 				response.setCode(Constant.RESPONSE_CODE_FAIL);
 				response.setMessage("添加失败！");
 			} else {
 				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
 				response.setMessage("添加成功！");
 			}
 		}
 		//编辑操作
 		else {
 			if(claimReportService.update(claimReport) == null) {
 				response.setCode(Constant.RESPONSE_CODE_FAIL);
 				response.setMessage("编辑失败！");
 			} else {
 				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
 				response.setMessage("编辑成功！");
 			}
 		}
 		
 		renderJson(response);
	}
	
	  
	  /**
	   * 删除
	   */
	  public void delete() {
			BaseResponse response = new BaseResponse();
			Long id = getParaToLong("id");
			if(id == null) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！");
				renderJson(response);
				return;
			}
			
			if(!claimReportService.delete(id)) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！");
			} else {
				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
				response.setMessage("已删除！");
			}
			
			renderJson(response);
		}
	  
	  
	  
}
