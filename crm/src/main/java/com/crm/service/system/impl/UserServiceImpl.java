package com.crm.service.system.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.crm.component.DataGrid;
import com.crm.model.system.User;
import com.crm.model.system.UserRole;
import com.crm.service.system.UserService;
import com.jfinal.kit.HashKit;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.SqlPara;
import com.util.Constant;

public class UserServiceImpl implements UserService {

	private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

	@Override
	public Ret resetPwd(Long id) {
		User user = selectById(id);
		user.set("password", HashKit.sha256(user.getStr("salt") + Constant.INIT_PASSWORD));
		if(user.update()) {
			return Ret.ok("msg", "重置成功！");
		}
		return Ret.fail("msg", "重置失败！");
	}

	@Override
	public void modifyPassword(long userid, String newPwd) {
		User.dao.set("password", newPwd).set("id", userid).update();
	}

	@Override
	public DataGrid<User> selectPage(Map<String, String> params, Page<User> page) {
		DataGrid<User> datagrid = new DataGrid<>();
		StringBuffer sql = new StringBuffer();
		sql.append("select a.*,m.ip lastLoginIp,m.login_at lastLoginDate from sys_user a  ");
		sql.append("left join (select * from sys_log_login l order by l.login_at desc  limit 1 ) as m ");
		sql.append("on a.id = m.admin_id ");
		sql.append("where 1=1 ");
		if(StringUtils.isNotBlank(params.get("name"))){
			sql.append(" and a.name like '%").append(params.get("name")).append("%' ");
		}
		if(StringUtils.isNotBlank(params.get("username"))){
			sql.append(" and a.username like '%").append(params.get("username")).append("%' ");
		}
		sql.append("order by a.create_time desc ");
		SqlPara sqlPara = new SqlPara();
		sqlPara.setSql(sql.toString());
		Page<User> brands = User.dao.paginate(page.getPageNumber(), page.getPageSize(), sqlPara);
		
		datagrid.setCount(brands.getTotalRow());
		datagrid.setData(brands.getList());
		
		return datagrid;
	}

	@Override
	public User selectById(Long id) {
		return User.dao.findById(id);
	}

	@Override
	public Ret add(User user, Long[] roles) {
		boolean isOk= false;
		if(roles != null && roles.length > 0) {
					if(user.save()) {
						List<UserRole> userRoles = new ArrayList<>();
						for(long roleId : roles) {
							UserRole userRole = new UserRole();
							userRole.set("userid", user.getLong("id"));
							userRole.set("roleid", roleId);
							userRoles.add(userRole);
						}
						Db.batch("insert into sys_user_role(userid, roleid) values(?, ?)", 
								"userid,roleid", userRoles, 100);
						isOk = true;
					}
					
			if(isOk) {
				return Ret.ok("msg", "添加成功！");
			}
			return Ret.fail("msg", "添加失败！");
		} else {
			if(user.save()) {
				return Ret.ok("msg", "添加成功！");
			}
			
			return Ret.fail("msg", "添加失败！");
		}
	}

	public Ret update(User user, Long[] roles) {
		//只能更新真实姓名、邮箱、联系电话、状态
		User oldAdmin = User.dao.findById((Long)user.get("id"));
    	oldAdmin.set("name", user.get("name"))
    	.set("username", user.get("username"))
    	.set("name", user.get("name"));
    	if(user.get("password")!=null){
    		oldAdmin.set("password", HashKit.sha256(oldAdmin.get("salt").toString() + user.get("password")));
    	}
    	oldAdmin.set("email", user.get("email"))
    	.set("department", user.get("department"))
    	.set("status", user.get("status"));
				if(oldAdmin.update()) {
					Db.delete("delete from sys_user_role where userid=?", oldAdmin.getLong("id"));
					List<UserRole> userRoles = new ArrayList<>();
					if(roles!=null) {
					for(long roleId : roles) {
						UserRole userRole = new UserRole();
						userRole.set("userid", oldAdmin.getLong("id"));
						userRole.set("roleid", roleId);
						userRoles.add(userRole);
					}
					Db.batch("insert into sys_user_role(userid, roleid) values(?, ?)", 
							"userid,roleid", userRoles, 100);
					}
		}
		return Ret.ok("msg", "修改成功！");
	}

}
