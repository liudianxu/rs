package com.crm.controller.admin.groupinfo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.controller.admin.BaseController;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.model.system.Area;
import com.crm.model.system.User;
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
public class GroupInfoController extends BaseController<GroupInfo> {
	
	@Inject
	private GroupInfoService service;
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
		params.put("groupName", getPara("group_name"));
		params.put("certNo", getPara("certn_no"));
		
		renderJson(service.selectPage(params, getPage()));
	}
	
	/**
	 * 去添加页面
	 */
	public void add() {
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
		GroupInfo groupInfo = GroupInfo.dao.findById(id);
		if(groupInfo==null) {
			render("index.html");
			return;
		}
		Area area = Area.dao.findById(groupInfo.get("address").toString());
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
		setAttr("roots", roots);
		setAttr("groupInfo", groupInfo);
		setAttr("province", province);
		setAttr("city", city);
		setAttr("area", area);
		render("edit.html");
	}
	
	/**
	 * 保存客户信息
	 * @param GroupInfo
	 */
	  public void save(){
		 GroupInfo groupInfo = getModel(GroupInfo.class);
		 BaseResponse response = new BaseResponse();
  		
  		if(StrKit.isBlank(groupInfo.getStr("group_name"))) {
  			response.setCode(Constant.RESPONSE_CODE_FAIL);
  			response.setMessage("保存失败！集团名称不能为空");
  			renderJson(response);
  			return;
  		}
  		//新增操作
  		if(groupInfo.getLong("id") == null) {
  			User admin = adminLoginService.getLoginAdminWithSessionId(getCookie(Constant.COOKIE_SESSION_ID_NAME));
  			if(admin==null) {
  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  				response.setMessage("添加失败！");
  				renderJson(response);
  			}
  			groupInfo.set("creator", admin.get("name"));
  			if(service.add(groupInfo) == null) {
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
  				groupInfo.set("address", getPara("areaId"));
  				if(service.update(groupInfo) == null) {
  	  				response.setCode(Constant.RESPONSE_CODE_FAIL);
  	  				response.setMessage("编辑失败！");
  	  			} else {
  	  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
  	  				response.setMessage("编辑成功！");
  	  			}
  				renderJson(response);
  	  		}else if(getPara("cityId")!=null&&!getPara("cityId").equals("")){
  	  		    groupInfo.set("address", getPara("cityId"));
  	  		    if(service.update(groupInfo) == null) {
	  				response.setCode(Constant.RESPONSE_CODE_FAIL);
	  				response.setMessage("编辑失败！");
	  			} else {
	  				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
	  				response.setMessage("编辑成功！");
	  			}
				renderJson(response);
  	  		}else if(getPara("provinceId")!=null&&!getPara("provinceId").equals("")){
  	  		    groupInfo.set("address", getPara("provinceId"));
  	  		    if(service.update(groupInfo) == null) {
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
			
			if(!service.delete(id)) {
				response.setCode(Constant.RESPONSE_CODE_FAIL);
				response.setMessage("删除失败！");
			} else {
				response.setCode(Constant.RESPONSE_CODE_SUCCESS);
				response.setMessage("已删除！");
			}
			
			renderJson(response);
		}
	  
	  
	  
}
