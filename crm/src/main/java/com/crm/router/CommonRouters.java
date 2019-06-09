package com.crm.router;

import com.crm.controller.common.AreaController;
import com.crm.controller.common.FileController;
import com.jfinal.config.Routes;

public class CommonRouters extends Routes {

	@Override
	public void config() {
		setBaseViewPath("/WEB-INF/views/common");
		add("/common/file", FileController.class, "/file");
		add("/common/area", AreaController.class);
	}

}
