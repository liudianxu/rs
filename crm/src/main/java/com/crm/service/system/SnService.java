package com.crm.service.system;

import com.crm.model.system.Sn.Type;

public interface SnService {

	String generate(Type type) throws Exception;
}
