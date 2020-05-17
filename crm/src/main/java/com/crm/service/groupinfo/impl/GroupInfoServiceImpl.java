package com.crm.service.groupinfo.impl;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.groupinfo.GroupInfo;
import com.crm.model.system.Role;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.GroupInsurancePersonService;
import com.crm.service.groupinfo.GroupInfoService;
import com.crm.service.system.RoleService;
import com.jfinal.aop.Inject;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;

/**
 * 客户信息服务接口实现类
 * @author chenglongw
 *
 */
public class GroupInfoServiceImpl implements GroupInfoService {

	@Inject
    private GroupInsuranceOrderService ordersService;
	@Inject
	private GroupInsurancePersonService personService;
	@Inject
	private CustomerInfoService cusService;
	@Inject
	private RoleService roleService;
	/**
	 * 分页列表
	 */
	@Override
	public DataGrid<GroupInfo> selectPage(Map<String, String> params, Page<GroupInfo> page,String customerIds,Long adminId) {
		DataGrid<GroupInfo> datagrid = new DataGrid<>();
		StringBuffer sql = new StringBuffer();
		sql.append("select DISTINCT g.* from crm_group_info g ");
		sql.append("where 1=1 ");
		//sql.append("left join crm_customer_info c on c.group_id =g.id where 1=1 ");
		if(StringUtils.isNotBlank(params.get("groupName"))){
			sql.append(" and g.group_name like '%").append(params.get("groupName")).append("%' ");
		}
		if(StringUtils.isNotBlank(params.get("certNo"))){
			sql.append(" and g.cert_no ="+params.get("certNo"));
		}
	/*	if(StringUtils.isNotBlank(customerIds)){
			sql.append(" and c.id in ("+customerIds+")");
		}*/
		sql.append(" and g.is_del=0  ");
		List<Role> roles = roleService.selectRolesByUserId(adminId);
		Integer m=null;
		for (Role role : roles) {
			 if(role.getStr("name").contains("管理员")) {
				 m=1;
			 }
		}
		if(m==null) {
			sql.append(" and g.user_id="+adminId+"");
		}
		sql.append(" order by g.create_time desc");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		Page<GroupInfo> groupInfos = GroupInfo.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		
		datagrid.setCount(groupInfos.getTotalRow());
		datagrid.setData(groupInfos.getList());
		
		return datagrid;
	}

	/**
	 * 新增
	 */
	@Override
	public GroupInfo add(GroupInfo groupInfo) {
		if(groupInfo.save()) {
			return groupInfo;
		}
		
		return null;
	}

	/**
	 * 更新
	 */
	@Override
	public GroupInfo update(GroupInfo groupInfo) {
		if(groupInfo.update()) {
			return groupInfo;
		}
		
		return null;
	}

	/**
	 * 删除
	 */
	@Override
	public boolean delete(Long id) {
		GroupInfo groupInfo = GroupInfo.dao.findById(id);
		groupInfo.set("is_del", 1);
		return groupInfo.update();
	}

	/**
	 * 获取集合
	 */
	@Override
	public List<GroupInfo> selectList(Long adminId) {
		String sql="select * from crm_group_info where is_del=0 ";
		List<Role> roles = roleService.selectRolesByUserId(adminId);
		Integer m=null;
		for (Role role : roles) {
			 if(role.getStr("name").contains("管理员")) {
				 m=1;
			 }
		}
		if(m==null) {
			sql+="and user_id="+adminId+"";
		}
		return GroupInfo.dao.find(sql);
	}

	@Override
	public GroupInfo findByName(String string) {
		return GroupInfo.dao.findFirst("select * from crm_group_info where group_name = ? and is_del=0 ",string);
	}

	@Override
	public void setSaveInfo(GroupInfo groupInfo, List<Object> lo) {
		groupInfo.set("group_name", lo.get(1));
		groupInfo.set("cert_no", lo.get(2));
        if(StringUtils.isNotBlank(lo.get(3).toString())) {
			switch (lo.get(3).toString()) {
			case "金融业":
				groupInfo.set("group_industry", 1);
				break;
			case "房地产":
				groupInfo.set("group_industry", 2);
				break;
			case "商业服务":
				groupInfo.set("group_industry", 3);
				break;
			case "贸易":
				groupInfo.set("group_industry", 4);
				break;
			case "生产":
				groupInfo.set("group_industry", 5);
				break;
			case "运输/物流":
				groupInfo.set("group_industry", 6);
				break;
			case "服务业":
				groupInfo.set("group_industry", 7);
				break;
			case "文化传媒":
				groupInfo.set("group_industry", 8);
				break;
			case "政府":
				groupInfo.set("group_industry", 9);
				break;
	        case "其他":
	        	groupInfo.set("group_industry", 10);
				break;
			default:
				break;
			}
		}
        if(StringUtils.isNotBlank(lo.get(4).toString())) {
			switch (lo.get(4).toString()) {
			case "营业执照":
				groupInfo.set("cert_type", 1);
			break;
		    case "税务登记证":
		    	groupInfo.set("cert_type", 2);
		    break;
	        case "组织机构代码证":
	        	groupInfo.set("cert_type", 3);
	        break;
	        }
		}
        if(StringUtils.isNotBlank(lo.get(5).toString())) {
        	groupInfo.set("company_nature", lo.get(5).toString());
		}
        if(StringUtils.isNotBlank(lo.get(6).toString())) {
        	groupInfo.set("email",lo.get(6));
        }
        groupInfo.set("create_time", new Date()).save();		
	}

	@Override
	public List<GroupInfo> findByCustomerIds(String customerIds,String type) {
		StringBuffer sql = new StringBuffer();
		sql.append("select DISTINCT g.* from crm_group_info g ");
		sql.append("left join crm_customer_info c on c.group_id =g.id  ");
		//sql.append("left join crm_group_insurance_orders o on o.insure_customer_id =c.id where 1=1");
		if(StringUtils.isNotBlank(customerIds)){
			sql.append(" where c.id in ("+customerIds+")");
		}
		sql.append(" and g.is_del=0  order by g.create_time desc ");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		
		List<GroupInfo> infos = GroupInfo.dao.find(sqlPara);
		for (GroupInfo groupInfo : infos) {
			 List<GroupInsuranceOrder> orders = ordersService.findByGroupId(groupInfo.getLong("id"),type);
			 groupInfo.put("orderCount",orders.size());
			 BigDecimal amount = BigDecimal.ZERO;
			 BigDecimal fre = BigDecimal.ZERO;
			 int num=0;
			 int personNum=0;
			 for (GroupInsuranceOrder order : orders) {
				 amount=amount.add(order.getBigDecimal("premium"));
				 if(order.get("person_num")==null) {
					 num=0;
				 }
				 else {
				 num=num+order.getInt("person_num");
				 }
				 List<GroupInsurancePerson> persons = personService.findByOrderId(order.getLong("id"));
				   for (GroupInsurancePerson person : persons) {
	    			   if(person.get("premium")!=null) {
	    				   if(person.getInt("status")==0||person.getInt("status")==1) {
	    				   fre = fre.add(person.getBigDecimal("premium"));
	    				   personNum=personNum+1;
	    				   }
				}
	    		   }
			 groupInfo.put("totalPre",amount);
			 groupInfo.put("totalNum",personNum);
			 groupInfo.put("fre",fre);
			 groupInfo.put("personNum",personNum);
			 }
		}
		return infos;
	}



}
