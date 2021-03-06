package com.crm.controller.admin.claimreport;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.claimreport.ClaimReport;
import com.crm.model.claimreport.ClaimReportPush;
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

import cn.hutool.http.HttpUtil;
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
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
			/*if (admin != null) {
				List<CustomerInfo> customers = permissionService.findCustomerByUserId(admin.getLong("id"));
				if(CollectionUtil.isNotEmpty(customers)) {
					for (CustomerInfo customerInfo : customers) {
						customerIds += customerInfo.getLong("id")+",";
					}
				}
			}*/
		}
		params.put("customerName", getPara("customer_name"));
		params.put("policyNum", getPara("policy_num"));
		params.put("persionName", getPara("persion_name"));
		params.put("certNo", getPara("cert_no"));
		params.put("status", getPara("status"));
		DataGrid<ClaimReport> dataGrid = claimReportService.selectPage(params, getPage(),admin.getLong("id"));
		List<ClaimReport> claimReports = dataGrid.getData();
		dataGrid.setData(claimReports);
		renderJson(dataGrid);
	}
	
	/**
	 * 去添加页面
	 */
	public void add() {
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
		List<CustomerInfo> customerInfos = customerInfoService.selectList(admin.getLong("id"));
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
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
		List<CustomerInfo> customerInfos = customerInfoService.selectList(admin.getLong("id"));
		setAttr("customerInfos", customerInfos);
		setAttr("claimReport", claimReport);
		render("edit.html");
	}
	
	/**
	 * 去查看页面
	 */
	public void view() {
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
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
		List<CustomerInfo> customerInfos = customerInfoService.selectList(admin.getLong("id"));
		setAttr("customerInfos", customerInfos);
		setAttr("claimReport", claimReport);
		render("view.html");
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
 			claimReport.set("user_id", admin.getLong("id"));
 			claimReport.set("create_time", DateUtil.getDateTime(null));
 			claimReport.set("status", "0");
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
	  
	  
	  /**
	   * 理赔推进
	   */
	  public void push() {
		  BaseResponse response = new BaseResponse();
		  ClaimReportPush claimReportPush = getModel(ClaimReportPush.class);
		  Long  reportId = claimReportPush.getLong("claim_report_id");
		  ClaimReport report =  ClaimReport.dao.findById(reportId);
		  try {
			  //结案
			  if(claimReportPush.getInt("status")==2) {
				  report.set("finish_time", new Date());
			  }
		  report.set("status", claimReportPush.getInt("status")).update();
		  claimReportPush.set("create_time", new Date());
		  claimReportPush.save();
		  }
		  catch (Exception e) {
			  e.printStackTrace();
			  response.setCode(Constant.RESPONSE_CODE_FAIL);
			  response.setMessage(e.getMessage());
			  renderJson(response);
			  return;
		}
		  response.setCode(Constant.RESPONSE_CODE_SUCCESS);
		  response.setMessage("推进成功");
		  renderJson(response);
		  return;
	  }
	  
}
