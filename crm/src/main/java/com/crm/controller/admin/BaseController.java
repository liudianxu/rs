package com.crm.controller.admin;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Page;

public class BaseController<T> extends Controller {
	
	public void index() {
		render("index.html");
	}

	/**
	 * 获取分页信息
	 * 
	 * @return
	 */
	protected Page<T> getPage() {
		int page = getParaToInt("page");
		int size = getParaToInt("limit");

		return new Page<T>(null, page, size, 0, 0);
	}
	
	
	
}
