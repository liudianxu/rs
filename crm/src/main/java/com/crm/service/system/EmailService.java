package com.crm.service.system;

import java.io.IOException;
import java.util.List;

import com.crm.model.group.GroupInsurancePerson;

public interface EmailService {

	public void sendChangePersonEmail(Long id) throws IOException;
}
