package com.crm.service.system;

import java.io.IOException;
import java.util.List;

import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.group.GroupInsurancePersonLog;

public interface EmailService {

	public void sendChangePersonEmail(Long id, List<GroupInsurancePersonLog> logs) throws IOException;
}
