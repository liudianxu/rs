package com.crm.controller.common;

import java.io.File;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.io.FilenameUtils;

import com.alibaba.fastjson.JSONArray;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.util.DateUtil;
import com.crm.web.bean.BaseResponse;
import com.jfinal.core.Controller;
import com.jfinal.kit.PathKit;
import com.jfinal.kit.StrKit;
import com.jfinal.upload.UploadFile;
/**
 * 
 * 
 * @version: 1.00.00
 * @description:文件操作类
 * @copyright: Copyright (c) 2018 易联众 All Rights Reserved
 * @company: 保睿通(厦门)信息科技有限公司
 * @author: ldx
 * @date: 2019年1月24日 
 * @history:
 */
public class FileController extends Controller {
	private final int MAXSize = 1 * 1024 * 1024; // 1M  
	 //图片上传目录
		private String filedir = PathKit.getWebRootPath();
	/**
	 * 文件上传
	 */
	public void upload() {
		BaseResponse resp = new BaseResponse();
	        try {
	            UploadFile file = getFile();
	            System.out.println("--------file--------");
	            
	            String path = UUID.randomUUID()+ "." + FilenameUtils.getExtension(file.getOriginalFileName());
	            //文件重命名
	            System.out.println(file.getUploadPath()+System.getProperty("file.separator")+DateUtil.getDate("yyyyMM")+System.getProperty("file.separator") +path);
	            getFile("file").getFile().renameTo(new File(file.getUploadPath()+System.getProperty("file.separator")+DateUtil.getDate("yyyyMM")+System.getProperty("file.separator") +path));
	            Map<String ,String> map = new HashMap<String, String>();
	           //文件路径
	            map.put("filePath", "/upload/"+DateUtil.getDate("yyyyMM")+"/"+path);
	            resp.setData(map);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        renderJson(resp);
	}
	
	public void uploadTem() {
		Long id =getParaToLong("id");
		BaseResponse resp = new BaseResponse();
	        try {
	            UploadFile file = getFile();
	            System.out.println("--------file--------");
	            
	            String path = UUID.randomUUID()+ "." + FilenameUtils.getExtension(file.getOriginalFileName());
	            //文件重命名
	            getFile("file").getFile().renameTo(new File(file.getUploadPath()+System.getProperty("file.separator")+DateUtil.getDate("yyyyMM")+System.getProperty("file.separator") +path));
	            Map<String ,String> map = new HashMap<String, String>();
	           //文件路径
	            map.put("filePath", "/upload/"+DateUtil.getDate("yyyyMM")+"/"+path);
	            GroupInsuranceOrder order = GroupInsuranceOrder.dao.findById(id);
	            order.set("excel_tem", map.get("filePath")).update();
	            resp.setData(map);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        renderJson(resp);
	}
	
	
	/**
	 * 富文本图片上传
	 */
	public void layeditUpload() {
		BaseResponse resp = new BaseResponse();
	        try {
	            UploadFile file = getFile();
	            System.out.println("--------file--------");
	            
	            String path = UUID.randomUUID()+ "." + FilenameUtils.getExtension(file.getOriginalFileName());
	            //文件重命名
	            getFile("file").getFile().renameTo(new File(file.getUploadPath()+System.getProperty("file.separator")+DateUtil.getDate("yyyyMM")+System.getProperty("file.separator") +path));
	            Map<String ,String> map = new HashMap<String, String>();
	           //文件路径
	            map.put("src", "/upload/"+DateUtil.getDate("yyyyMM")+"/"+path);
	            resp.setData(map);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        renderJson(resp);
	}
	
	public void wangUpload() {
		BaseResponse resp = new BaseResponse();
        try {
            UploadFile file = getFile();
            System.out.println("--------file--------");
            
            String path = UUID.randomUUID()+ "." + FilenameUtils.getExtension(file.getOriginalFileName());
            //文件重命名
            getFile("file").getFile().renameTo(new File(file.getUploadPath()+System.getProperty("file.separator")+DateUtil.getDate("yyyyMM")+System.getProperty("file.separator") +path));
            Map<String ,String> map = new HashMap<String, String>();
           //文件路径
            map.put("src", "/upload/"+DateUtil.getDate("yyyyMM")+"/"+path);
            resp.setData(map);
        } catch (Exception e) {
            e.printStackTrace();
        }
        renderJson(resp);
	}
	
	
}
