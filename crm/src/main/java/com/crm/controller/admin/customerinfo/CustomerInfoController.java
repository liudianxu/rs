package com.crm.controller.admin.customerinfo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.model.system.Area;
import com.crm.model.system.User;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.groupinfo.GroupInfoService;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.AreaService;
import com.crm.util.Constant;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.kit.StrKit;
/**
 * 客户信息控制类
 * @author chenglongw
 *
 */
public class CustomerInfoController extends BaseController<CustomerInfo> {
	
	@Inject
	private CustomerInfoService customerInfoService;
	@Inject
	private GroupInfoService groupInfoService;
    @Inject
    private AdminLoginService adminLoginService;
    @Inject
	private AreaService areaService;
    
     /**
      * 列表获取
     */
	public void list() {
		Map<String, String> params = new HashMap<>();
		//查询参数
		params.put("customerName", getPara("customer_name"));
		params.put("certNo", getPara("cert_no"));
		DataGrid<CustomerInfo> dataGrid = customerInfoService.selectPage(params, getPage());
		List<CustomerInfo> customerInfos = dataGrid.getData();
		for (CustomerInfo customerInfo : customerInfos) {
			if(customerInfo.get("group_id")!=null){
				GroupInfo groupInfo = GroupInfo.dao.findById(customerInfo.getLong("group_id"));
				customerInfo.put("groupName", groupInfo.getStr("group_name"));
			}
		}
		dataGrid.setData(customerInfos);
		renderJson(dataGrid);
	}
	
	/**
	 * 去添加页面
	 */
	public void add() {
		List<GroupInfo> groups = groupInfoService.selectList();
		setAttr("groups", groups);
		List<Area> roots = areaService.findRoots();
		setAttr("roots", roots);
		render("add.html");
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
		CustomerInfo customerInfo = CustomerInfo.dao.findById(id);
		if(customerInfo==null) {
			render("index.html");
			return;
		}
		Area area = Area.dao.findById(customerInfo.get("address").toString());
		Area city = new Area();
		Area province = new Area();
		if(area.get("grade").toString()!=null&&area.get("grade").toString().equals("2")){
			city = Area.dao.findById(area.get("parent_id").toString());
		}else{
			city=area;
			area = new Area(); 
		}
		if(city.get("grade").toString()!=null&&city.get("grade").toString().equals("1")){
			province = Area.dao.findById(city.get("parent_id").toString());
		}
		List<Area> roots = areaService.findRoots();
		List<GroupInfo> groups = groupInfoService.selectList();
		setAttr("groups", groups);
		setAttr("roots", roots);
		setAttr("province", province);
		setAttr("city", city);
		setAttr("area", area);
		setAttr("customerInfo", customerInfo);
		render("edit.html");
	}
	
	/**
	 * 保存客户信息
	 * @param CustomerInfo
	 */
	  public void save(){
		 CustomerInfo customerInfo = getModel(CustomerInfo.class);
		 BaseResponse response = new BaseResponse();
  		
  		if(StrKit.isBlank(customerInfo.getStr("customer_name"))) {
  			response.setCode(Constant.RESPONSE_CODE_FAIL);
  			response.setMessage("保存失败！客户名称不能为空");
  			renderJson(response);
  			return;
  		}
  		//新增操作
  		if(customerInfo.getLong("id") == null) {
  			User admin = adminLoginService.getLoginAdminWithSessionId(getCookie(Constant.COOKIE_SESSION_ID_NAME));
  			if(admin==null) {
  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  				response.setMessage("添加失败！");
  				renderJson(response);
  			}
  			customerInfo.set("creator", admin.get("name"));
  			if(customerInfoService.add(customerInfo) == null) {
  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  				response.setMessage("添加失败！");
  			} else {
  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
  				response.setMessage("添加成功！");
  			}
  		}
  		//编辑操作
  		else {
  			if(getPara("areaId")!=null&&!getPara("areaId").equals("")) {
  				customerInfo.set("address", getPara("areaId"));
  				if(customerInfoService.update(customerInfo) == null) {
  	  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  	  				response.setMessage("编辑失败！");
  	  			} else {
  	  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
  	  				response.setMessage("编辑成功！");
  	  			}
  				renderJson(response);
  	  		}else if(getPara("cityId")!=null&&!getPara("cityId").equals("")){
  	  		customerInfo.set("address", getPara("cityId"));
  	  		    if(customerInfoService.update(customerInfo) == null) {
	  				response.setCode(Constant.RESPONSE_CODE_FAIL);
	  				response.setMessage("编辑失败！");
	  			} else {
	  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
	  				response.setMessage("编辑成功！");
	  			}
				renderJson(response);
  	  		}else if(getPara("provinceId")!=null&&!getPara("provinceId").equals("")){
  	  		customerInfo.set("address", getPara("provinceId"));
  	  		    if(customerInfoService.update(customerInfo) == null) {
	  				response.setCode(Constant.RESPONSE_CODE_FAIL);
	  				response.setMessage("编辑失败！");
	  			} else {
	  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
	  				response.setMessage("编辑成功！");
	  			}
				renderJson(response);
  	  		}
  		}
  		
  		renderJson(response);
	}
	
	  
	  /**
	   * 删除客户信息
	   * @param id
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
			
			if(!customerInfoService.delete(id)) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！");
			} else {
				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
				response.setMessage("已删除！");
			}
			
			renderJson(response);
		}
	  
	  
	  
}
