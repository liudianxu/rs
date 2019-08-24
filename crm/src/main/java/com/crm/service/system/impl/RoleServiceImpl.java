package com.crm.service.system.impl;


import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.crm.component.DataGrid;
import com.crm.model.system.Role;
import com.crm.model.system.RoleCustomers;
import com.crm.model.system.RolePermission;
import com.crm.service.system.RoleService;
import com.jfinal.aop.Before;
import com.jfinal.kit.Kv;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;
import com.jfinal.plugin.activerecord.tx.Tx;

public class RoleServiceImpl implements RoleService {
	
	private Logger logger = LoggerFactory.getLogger(RoleServiceImpl.class);

	@Override
	public List<Role> selectRolesByUserId(Long userId) {
		StringBuffer sqlSb = new StringBuffer();
		sqlSb.append("select r.id,r.name,case when ar.userid=?")
			.append(" then 1 else 0 end checked ")
			.append("from sys_role r left join sys_user_role ar on ")
			.append(" r.id=ar.roleid  where  ar.userid=? and r.state=1 ")
			.append("order by convert(name using gbk)");
		
		return Role.dao.find(sqlSb.toString(), userId, userId);
	}

	@Before(Tx.class)
	@Override
	public void saveAuthorize(Long roleId, String[] permissions) {
		//删除授权信息
		Db.update("delete from sys_role_permission where roleid = ?", roleId);
		//保存授权信息
		if(permissions!=null) {
		StringBuffer inStr = new StringBuffer();
		for(int i=0; i<permissions.length; i++) {
			inStr.append("'")
				.append(permissions[i])
				.append("'");
			if(i < permissions.length - 1) {
				inStr.append(",");
			}
		}
		//String sql = "select id from sys_permission where permission_sign in (" + inStr.toString() + ")";
		//List<Long> ids = Db.query(sql);
		List<RolePermission> rolePermissions = new ArrayList<>();
		for(String permissionId : permissions) {
			RolePermission rolePermission = new RolePermission();
			rolePermission.set("permissionid", permissionId)
				.set("roleid", roleId);
			rolePermissions.add(rolePermission);
		}
		Db.batchSave(rolePermissions, permissions.length);
		}
	}
	
	@Before(Tx.class)
	@Override
	public void saveCustomerAuthorize(Long roleId, String[] customers) {
		//删除授权信息
		Db.update("delete from sys_role_customer where roleid = ?", roleId);
		//保存授权信息
		if(customers!=null) {
			
		StringBuffer inStr = new StringBuffer();
		for(int i=0; i<customers.length; i++) {
				inStr.append("'")
				.append(customers[i])
				.append("'");
				if(i < customers.length - 1) {
					inStr.append(",");
				}
		}
		List<RoleCustomers> roleCustomers = new ArrayList<>();
		for(String customerId : customers) {
			if(!customerId.contains("g")) {
				RoleCustomers roleCustomer = new RoleCustomers();
				roleCustomer.set("customerid", customerId)
				.set("roleid", roleId);
				roleCustomers.add(roleCustomer);
			}
		}
		Db.batchSave(roleCustomers, customers.length);
		}
	}

	@Override
	public DataGrid<Role> selectByPage(Page<Role> page, Kv params) {
		DataGrid<Role> dataGrid = new DataGrid<>();
		try {
			SqlPara sqlPara = new SqlPara();
			sqlPara.setSql("select * from sys_role order by create_time desc");
			page = Role.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
			
			dataGrid.setCount(page.getTotalRow());
			dataGrid.setData(page.getList());
			
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("查询出现异常", e);
		}
		
		return dataGrid;
	}

	@Override
	public Role selectById(Long id) {
		// TODO Auto-generated method stub
		return Role.dao.findById(id);
	}

	@Override
	public List<Role> selectList(Kv params) {
		String whereStr = " where 1=1 ";
		List<Object> objs = new ArrayList<>();
		if(params.notNull("state")) {
			whereStr += "and state=? ";
			objs.add(params.get("state"));
		}
		
		return Role.dao.find("select * from sys_role" + whereStr + "order by convert(name using gbk)", objs.toArray());
	}

	@Override
	public Ret add(Role role) {
		role.save();
		return null;
	}

	@Override
	public Ret update(Role role) {
		role.update();
		return null;
	}

}
