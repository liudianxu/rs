package com.crm.controller.admin.customerinfo;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.controller.admin.BaseController;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceGuarantee;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.model.system.Area;
import com.crm.model.system.Permission;
import com.crm.model.system.Role;
import com.crm.model.system.RoleCustomers;
import com.crm.model.system.User;
import com.crm.poi.ImportExcelUtil;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.groupinfo.GroupInfoService;
import com.crm.service.system.AdminLoginService;
import com.crm.service.system.AreaService;
import com.crm.service.system.PermissionService;
import com.crm.service.system.RoleService;
import com.crm.util.CommonUtils;
import com.crm.util.Constant;
import com.crm.util.DateUtil;
import com.crm.util.IDCardUtils;
import com.crm.web.bean.BaseResponse;
import com.jfinal.aop.Inject;
import com.jfinal.core.paragetter.Para;
import com.jfinal.kit.PathKit;
import com.jfinal.kit.StrKit;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.http.HttpUtil;
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
	@Inject
	private PermissionService permissionService;
	@Inject
	private GroupInsuranceOrderService orderService;
	@Inject
	private RoleService roleService;
     /**
      * 列表获取
     */
	public void list() {
		Map<String, String> params = new HashMap<>();
		//查询参数
		params.put("customerName", getPara("customer_name"));
		params.put("certNo", getPara("cert_no"));
		
		String customerIds = "";
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
		
		DataGrid<CustomerInfo> dataGrid = customerInfoService.selectPage(params, getPage(),customerIds.length()>1?customerIds.substring(0,customerIds.length()-1):"",admin.getLong("id"));
		List<CustomerInfo> customers = dataGrid.getData();
		for (CustomerInfo customerInfo : customers) {
			if(customerInfo.get("group_id")!=null){
				GroupInfo groupInfo = GroupInfo.dao.findById(customerInfo.getLong("group_id"));
				customerInfo.put("groupName", groupInfo.getStr("group_name"));
			}
		}
		dataGrid.setData(customers);
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
			/*if (admin != null) {
				List<CustomerInfo> customers = permissionService.findCustomerByUserId(admin.getLong("id"));
				if(CollectionUtil.isNotEmpty(customers)) {
					for (CustomerInfo customerInfo : customers) {
						customerIds += customerInfo.getLong("id")+",";
					}
				}
			}*/
		}
		List<GroupInfo> groups = groupInfoService.selectList(admin.getLong("id"));
		setAttr("groups", groups);
		List<Area> roots = areaService.findRoots();
		setAttr("roots", roots);
		render("add.html");
	}
	
	/**
	 * 去编辑页面
	 */
	public void edit() {
		String sessionId = this.getCookie(Constant.COOKIE_SESSION_ID_NAME);
		User admin=new User();
		if (sessionId != null) {
			 admin = adminLoginService.getLoginAdminWithSessionId(sessionId);
			if (admin == null) {
				String loginIp = HttpUtil.getClientIP(this.getRequest());
				admin = adminLoginService.loginWithSessionId(sessionId, loginIp);
			}
		}
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
		if(customerInfo.get("address")!=null) {
		Area area = Area.dao.findById(customerInfo.get("address").toString());
		Area city = new Area();
		Area province = new Area();
		if(area.get("grade").toString()!=null&&area.get("grade").toString().equals("2")){
			city = Area.dao.findById(area.get("parent_id").toString());
		}else if(area.get("grade").toString()!=null&&area.get("grade").toString().equals("0")){
			province = area;
			area = new Area(); 
		}else{
			city=area;
			area = new Area(); 
		}
		if(city.get("grade")!=null){
			province = Area.dao.findById(city.get("parent_id").toString());
		}
		setAttr("province", province);
		setAttr("city", city);
		setAttr("area", area);
		}
		List<Area> roots = areaService.findRoots();
		List<GroupInfo> groups = groupInfoService.selectList(admin.getLong("id"));
		setAttr("groups", groups);
		setAttr("roots", roots);
		
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
  			}
  			customerInfo.set("creator", admin.get("name"));
  			customerInfo.set("user_id", admin.get("id"));
  			if(customerInfoService.add(customerInfo) == null) {
  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  				response.setMessage("添加失败！");
  			} else {
  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
  				response.setMessage("添加成功！");
  				List<Role> roles = roleService.selectRolesByUserId(admin.getLong("id"));
  				RoleCustomers roleCustomer = new RoleCustomers();
				roleCustomer.set("customerid", customerInfo.getLong("id"))
				.set("roleid", roles.get(0).getLong("id"));
				roleCustomer.save();
  			}
  			renderJson(response);
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
  	  		}else {
  	  			customerInfo.set("address",null);
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
			if(orderService.queryByCustomerId(id).size()>0) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！该客户已存在保单！");
				renderJson(response);
				return;
			}
			if(!customerInfoService.delete(id)) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！");
			} else {
				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
				response.setMessage("删除成功");
			}
			
			renderJson(response);
		}
	  
	  
	  public void export(@Para("filePath") String filePath) throws Exception {
			Map<String, Object> data = new HashMap<>();
	        InputStream in =null;  
	        List<List<Object>> listob = null;  

	        if(filePath.isEmpty()){  
	           data.put("message", "文件导入错误！");  
	        } else {
	        	filePath = filePath.substring(filePath.indexOf("/upload"));
	        	String pathPrefix = PathKit.getWebRootPath();
	        	File file = new File(pathPrefix + filePath);
	        	try {
	    			in = new FileInputStream(file);
	    			listob = new ImportExcelUtil().getBankListByExcel(in, file.getName(), 13);  
	    			in.close();  
	    		} catch (IOException e) {
	    			e.printStackTrace();
	    		} catch (Exception e) {
	    			e.printStackTrace();
	    		}  
	        }
	        
	        if(listob.size() > 514) {
	        	data.put("message", "一次导入人数请不要超过500条！");
	        	renderJson(data);
	        	return;
	        }
	        //该处可调用service相应方法进行数据保存到数据库中，现只对数据输出  
	        for (int i = 0; i < listob.size(); i++) {  
	            List<Object> lo = listob.get(i);  
	            if(i == 0) {
	            	if(!"序号".equals(String.valueOf(lo.get(0)))) {
	                	data.put("message", "Excel文件格式不正确，请按模板导入！");
	                	renderJson(data);
	                	return;
	                } else {
	                	continue;
	                }
	            }
	            //姓名、证件类型、证件号码、保障方案、职位类别中有一项为空就不保存
	            if(StringUtils.isBlank(String.valueOf(lo.get(1))) || StringUtils.isBlank(String.valueOf(lo.get(2)))) {
	            	//mes+="表格第"+i+"行存在未填写信息，请确认！";
	            	continue;
	            }
	            if(customerInfoService.findByName(lo.get(1).toString())!=null) {
	            	data.put("message", "已存在客户"+lo.get(1));
                	renderJson(data);
                	return;
	            }
	            if(StringUtils.isNotBlank(lo.get(7).toString())) {
	            	if(groupInfoService.findByName(lo.get(7).toString())==null) {
	            		data.put("message", "未找到集团！");
	                	renderJson(data);
	                	return;
	            	}
	            }
	            CustomerInfo customerInfo = new CustomerInfo();
	            customerInfoService.setSaveInfo(customerInfo,lo);
  			User admin = adminLoginService.getLoginAdminWithSessionId(getCookie(Constant.COOKIE_SESSION_ID_NAME));
	    	List<Role> roles = roleService.selectRolesByUserId(admin.getLong("id"));
			RoleCustomers roleCustomer = new RoleCustomers();
	     	roleCustomer.set("customerid", customerInfo.getLong("id"))
		    .set("roleid", roles.get(0).getLong("id"));
		   roleCustomer.save();
	    	
		}
            data.put("code", Constant.RESPONSE_CODE_SUCCESS);
            data.put("message", "导入成功");
    	renderJson(data);
    	return;
	  }
	  
}
