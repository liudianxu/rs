package com.crm.service.system.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.crm.component.AuthTree;
import com.crm.component.TreeGrid;
import com.crm.model.system.Permission;
import com.crm.service.system.PermissionService;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;

import cn.hutool.core.collection.CollectionUtil;

public class PermissionServiceImpl implements PermissionService {

	@Override
	public TreeGrid<Permission> selectPermissionTree(Map<String, String> params) {
		TreeGrid<Permission> treeGrid = new TreeGrid<>();
		
		StringBuffer sql = new StringBuffer();
		sql.append("select * from sys_permission where 1=1 ");
		if(StringUtils.isNotBlank(params.get("name"))){
			sql.append(" and name like '%").append(params.get("name")).append("%' ");
		}
		sql.append(" order by sort ");
		List<Permission> permissions = Permission.dao.find(sql.toString());
		
		if(CollectionUtil.isNotEmpty(permissions)) {
			for(Permission p : permissions) {
				p.put("lay_is_open", false);
			}
			treeGrid.setCount(permissions.size());
			treeGrid.setData(permissions);
			treeGrid.setTip("操作成功！");
		}
		
		return treeGrid;
	}

	@Override
	public Ret add(Permission permission) {
		if(permission.save()) {
			permission.set("value", permission.get("id")).update();
			return Ret.ok("msg", "添加成功！");
		}
		
		return Ret.fail("msg", "添加失败！");
	}

	@Override
	public boolean delete(Long id) {
		return Permission.dao.deleteById(id);

	}

	/**
	 * 是否存在下级分类
	 * @param id
	 * @return
	 */
	@Override
	public boolean existChildren(Long id) {
		Permission permission =  Permission.dao.findFirst("select * from sys_permission where pid = ? ",id );
		return permission==null?false:true;
	}

	/**
	 * @author ldx
	 * 获取权限树
	 */
	@Override
	public AuthTree<Permission> selectAuthTree(Long roleId) {
		StringBuffer sql = new StringBuffer();
		sql.append("select * from sys_permission  ");
		List<Permission> permissions =  Permission.dao.find(sql.toString());
		List<Permission> list = new ArrayList<>();
		List<Permission> rolePermission = new ArrayList<>();
		if(roleId!=null) {
			 rolePermission =  Permission.dao.find("select s.* from sys_role_permission sr left join sys_permission s on s.id=sr.permissionid    where sr.roleid = ? ",roleId);
		} 
		//递归调用
	     list.add(recursiveTree(permissions.get(0).getLong("id"),rolePermission));
		 AuthTree<Permission> authTree = new AuthTree<>();
		 Map<String,List<Permission>> map = new HashMap<>();
		 map.put("trees", list);
		 authTree.setData(map);
		return authTree;
	}

	/**
	 * @author ldx
	  * 递归调用
	 * @param cid
	 *       第一个权限
	 * @param rolePermission
	 *        角色权限
	 * @return
	 */
	public Permission recursiveTree(Long cid,List<Permission> rolePermission) {
		 List<Permission> list = new ArrayList<>();
		Permission node = Permission.dao.findById(cid);
		//获取子权限
	    List<Permission> childTreeNodes  = getChildTreeById(cid,rolePermission);
	    for(Permission child : childTreeNodes){
	    	Permission n = recursiveTree(child.getLong("id"),rolePermission);
	    	if(child.getLong("id")==n.getLong("id")) {
	    		n.put("checked",child.get("checked"));
	    	}
	    	if(rolePermission!=null) {
	    		node.put("checked",child.get("checked"));
	    	}
	    	if(node.getList()==null) {
	    		list.add(n);
	    		node.setList(list);
	    	}
	    	else {
	        node.getList().add(n);
	    	}
	    }
	    node.put("list",node.getList());
	    return node;
	}
	
	public List<Permission> getChildTreeById(Long cid,List<Permission> rolePermission){
		StringBuffer sql = new StringBuffer();
		sql.append("select * from sys_permission  ");
		List<Permission> permissions =  Permission.dao.find(sql.toString());
	    List<Permission> list = new ArrayList<>();
	    if(null != permissions){
	        for (Permission d : permissions) {
	            if(null != cid){
	                if (cid==d.getLong("pid")) {
	                	if(rolePermission!=null) {
	                		for (Permission permission : rolePermission) {
	                			//编辑时默认选中
	                			  if (cid==permission.getLong("pid")) {
	                				  d.put("checked",true);
	                			  }
							}
	                    list.add(d);
	                	}
	                }
	        	}
	        }
	    }
	    return list;
	}

	@Override
	public int deletePermissionByRoleId(Long roleId) {
		return Db.delete("delete from sys_role_permission where roleId = ? ", roleId);

	}

	@Override
	public List<Permission> findByUserId(Long userId,int type) {
		StringBuffer sb = new StringBuffer();
		sb.append("select s.* from sys_permission s  ");
		sb.append("left join sys_role_permission sp on sp.permissionid = s.id ");
		sb.append("left join sys_role sr on sr.id = sp.roleid ");
		sb.append("left join sys_user_role sur on sur.roleid=sr.id ");
		sb.append("where sur.userid = ? ");
		if(type==1) {
		sb.append( " and s.type=? and s.pid=1 ");
		}
		else {
		sb.append(" and s.type=? ");
		}
		return Permission.dao.find(sb.toString(), userId,type);
	}

	@Override
	public List<Permission> findChildren(Long id) {
		StringBuffer sb = new StringBuffer();
		sb.append("select s.* from sys_permission s where s.pid=? and type=1  ");
		return Permission.dao.find(sb.toString(), id);
	}

	@Override
	public Ret update(Permission permission) {
		Permission  oldPermission = Permission.dao.findById(permission.getLong("id"));
		oldPermission.set("name", permission.get("name"))
		.set("type", permission.get("type"))
		.set("url", permission.get("url"))
		.set("state", permission.get("state"))
		.set("description", permission.get("description"));
		if(oldPermission.update()) {
			return Ret.ok("msg", "修改成功！");
		}
		
		return Ret.fail("msg", "修改失败！");
	}

}
