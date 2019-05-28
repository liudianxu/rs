package com.crm.service.system.impl;

import com.crm.service.system.AdminAuthService;

public class AdminAuthServiceImpl implements AdminAuthService {

	@Override
	public boolean isSuperAdmin(Long adminId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean hasRole(Long adminId, String[] roleNameArray) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean hasPermission(Long adminId, String actionKey) {
		// TODO Auto-generated method stub
		return false;
	}

}
