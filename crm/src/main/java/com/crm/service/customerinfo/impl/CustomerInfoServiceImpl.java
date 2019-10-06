package com.crm.service.customerinfo.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.DataGrid;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.system.Role;
import com.crm.model.system.RoleCustomers;
import com.crm.service.customerinfo.CustomerInfoService;
import com.crm.service.groupinfo.GroupInfoService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;
import com.jfinal.plugin.activerecord.tx.Tx;

/**
 * 客户信息服务接口实现类
 * @author chenglongw
 *
 */
public class CustomerInfoServiceImpl implements CustomerInfoService {
@Inject
private GroupInfoService groupInfoService;
	/**
	 * 分页列表
	 */
	@Override
	public DataGrid<CustomerInfo> selectPage(Map<String, String> params, Page<CustomerInfo> page,String customerIds) {
		DataGrid<CustomerInfo> datagrid = new DataGrid<>();
		StringBuffer sql = new StringBuffer();
		sql.append("select * from crm_customer_info where 1=1 ");
		if(StringUtils.isNotBlank(params.get("customerName"))){
			sql.append(" and customer_name like '%").append(params.get("customerName")).append("%' ");
		}
		if(StringUtils.isNotBlank(params.get("certNo"))){
			sql.append(" and cert_no ="+params.get("certNo"));
		}
		if(StringUtils.isNotBlank(customerIds)){
			sql.append(" and id in ("+customerIds+")");
		}
		sql.append(" and is_del=0 order by create_time desc ");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		Page<CustomerInfo> customerInfos = CustomerInfo.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		
		datagrid.setCount(customerInfos.getTotalRow());
		datagrid.setData(customerInfos.getList());
		
		return datagrid;
	}

	/**
	 * 新增
	 */
	@Override
	public CustomerInfo add(CustomerInfo customerInfo) {
		if(customerInfo.save()) {
			return customerInfo;
		}
		
		return null;
	}

	/**
	 * 更新
	 */
	@Override
	public CustomerInfo update(CustomerInfo customerInfo) {
		if(customerInfo.update()) {
			return customerInfo;
		}
		
		return null;
	}

	/**
	 * 删除
	 */
	@Override
	public boolean delete(Long id) {
		CustomerInfo customerInfo = CustomerInfo.dao.findById(id);
		customerInfo.set("is_del", 1);
		return customerInfo.update();
	}

	/**
	 * 获取集合
	 */
	@Override
	public List<CustomerInfo> selectList() {
		return CustomerInfo.dao.find("select * from crm_customer_info where is_del=0");
	}

	@Override
	public List<CustomerInfo> findByGroupId(Long id) {
		return CustomerInfo.dao.find("select * from crm_customer_info where group_id = ? and is_del=0",id);
	}

	@Override
	@Before(Tx.class)
	public void setSaveInfo( CustomerInfo customerInfo,List<Object> lo) {
		customerInfo.set("customer_name", lo.get(1));
		customerInfo.set("cert_no", lo.get(2));
        if(StringUtils.isNotBlank(lo.get(3).toString())) {
			switch (lo.get(3).toString()) {
			case "金融业":
				customerInfo.set("customer_industry", 1);
				break;
			case "房地产":
				customerInfo.set("customer_industry", 2);
				break;
			case "商业服务":
				customerInfo.set("customer_industry", 3);
				break;
			case "贸易":
				customerInfo.set("customer_industry", 4);
				break;
			case "生产":
				customerInfo.set("customer_industry", 5);
				break;
			case "运输/物流":
				customerInfo.set("customer_industry", 6);
				break;
			case "服务业":
				customerInfo.set("customer_industry", 7);
				break;
			case "文化传媒":
				customerInfo.set("customer_industry", 8);
				break;
			case "政府":
				customerInfo.set("customer_industry", 9);
				break;
	        case "其他":
	        	customerInfo.set("customer_industry", 10);
				break;
			default:
				break;
			}
		}
        if(StringUtils.isNotBlank(lo.get(4).toString())) {
			switch (lo.get(4).toString()) {
			case "营业执照":
			customerInfo.set("cert_type", 1);
			break;
		    case "税务登记证":
			customerInfo.set("cert_type", 2);
		    break;
	        case "组织机构代码证":
		    customerInfo.set("cert_type", 3);
	        break;
	        }
		}
        if(StringUtils.isNotBlank(lo.get(5).toString())) {
			customerInfo.set("company_nature", lo.get(5).toString());
		}
        if(StringUtils.isNotBlank(lo.get(6).toString())) {
		    customerInfo.set("email",lo.get(6));
        }
        if(StringUtils.isNotBlank(lo.get(7).toString())) {
		    customerInfo.set("group_id",groupInfoService.findByName(lo.get(7).toString()).getLong("id"));
        }
        customerInfo.set("create_time", new Date()).save();
        
	}

	@Override
	public CustomerInfo findByName(String string) {
		return CustomerInfo.dao.findFirst("select * from crm_customer_info where customer_name =?  and is_del=0",string);
	}

	@Override
	public List<CustomerInfo> findByIds(String customerIds) {
		return CustomerInfo.dao.find("select * from crm_customer_info where id in("+customerIds+") and is_del=0");
	}

}
