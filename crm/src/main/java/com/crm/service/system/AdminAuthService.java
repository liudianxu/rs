package com.crm.service.system;

public interface AdminAuthService {

	boolean isSuperAdmin(Long adminId);
	
	boolean hasRole(Long adminId, String[] roleNameArray);
	
	boolean hasPermission(Long adminId, String actionKey);
}
