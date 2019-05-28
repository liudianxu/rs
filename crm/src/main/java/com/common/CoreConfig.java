package com.common;

import java.sql.Connection;

import com.alibaba.druid.filter.stat.StatFilter;
import com.alibaba.druid.wall.WallFilter;
import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.json.MixedJsonFactory;
import com.jfinal.kit.Prop;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.plugin.ehcache.EhCachePlugin;
import com.jfinal.server.undertow.UndertowServer;
import com.jfinal.template.Engine;
import com.router.AdminRoutes;
import com.util.Constant;
import com.util.DateUtil;
import com.util.DesString;


public class CoreConfig extends JFinalConfig {
	
	private static Prop p;
	private WallFilter wallFilter;

	public static void main(String[] args) {
		UndertowServer.start(CoreConfig.class);
	}
	
	static void loadConfig() {
		if (p == null) {
			p = PropKit.use("application-dev.properties").appendIfExists("application.properties");
		}
	}
	
	public static DruidPlugin getDruidPlugin(String database) {
		loadConfig();
		return new DruidPlugin(p.get(database + "jdbcUrl"), p.get(database + "user"), 
				DesString.decrypt(p.get(database + "password").trim(), Constant.COMMON_KEY));
	}
	
	@Override
	public void configConstant(Constants me) {
		loadConfig();
		me.setDevMode(p.getBoolean("devMode", false));
		me.setJsonFactory(MixedJsonFactory.me());
		me.setInjectDependency(true);
		//上传路径
		me.setBaseUploadPath("upload/"+DateUtil.getDate("yyyyMM"));
		//映射接口实现
		AopKit.mapping();
	}

	@Override
	public void configRoute(Routes me) {
		me.add(new AdminRoutes());
	}

	@Override
	public void configEngine(Engine me) {
		me.setDevMode(true);
		me.addSharedFunction("/views/admin/common/layout.html");
	}

	@Override
	public void configPlugin(Plugins me) {
		wallFilter = new WallFilter();			// 加强数据库安全
		wallFilter.setDbType("mysql");
		
		DruidPlugin druidPlugin = getDruidPlugin("");
		druidPlugin.addFilter(wallFilter);
		druidPlugin.addFilter(new StatFilter());	// 添加 StatFilter 才会有统计数据
		me.add(druidPlugin);
		ActiveRecordPlugin arp = new ActiveRecordPlugin(druidPlugin);
		arp.setTransactionLevel(Connection.TRANSACTION_READ_COMMITTED);
		MappingKit.mapping(arp);
		me.add(arp);
		arp.setShowSql(p.getBoolean("devMode", false));
		
		me.add(new EhCachePlugin());
	}

	
	@Override
	public void configInterceptor(Interceptors me) {
		
	}

	@Override
	public void configHandler(Handlers me) {
		// TODO Auto-generated method stub
		
	}

}
