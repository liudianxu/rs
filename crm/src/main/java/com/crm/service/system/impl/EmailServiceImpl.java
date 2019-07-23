package com.crm.service.system.impl;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.alibaba.fastjson.JSONObject;
import com.crm.model.cuntomerinfo.CustomerInfo;
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.group.GroupInsurancePersonLog;
import com.crm.model.system.Setting;
import com.crm.service.group.GroupInsuranceGuaranteeService;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.impl.GroupInsurancePersonServiceImpl;
import com.crm.service.system.EmailService;
import com.crm.util.Constant;
import com.crm.util.DateUtil;
import com.crm.util.MailUtil;
import com.jfinal.aop.Inject;
import com.jfinal.kit.PathKit;
import com.jfinal.plugin.ehcache.CacheKit;
import com.jfinal.render.RenderManager;

public class EmailServiceImpl implements EmailService{
   @Inject
   private GroupInsuranceOrderService groupInsuranceOrderService;
   @Inject
   private GroupInsuranceGuaranteeService groupInsuranceGuaranteeService;
	@Override
	public void sendChangePersonEmail(Long id,List<GroupInsurancePersonLog> logs) throws IOException {
		 GroupInsuranceOrder order = groupInsuranceOrderService.findById(id);
		try {
			FileInputStream template  = new FileInputStream( PathKit.getWebRootPath()+"/excel/保全申请书.xlsx");
			XSSFWorkbook workBook = new XSSFWorkbook(template);
			XSSFSheet sheet=workBook.getSheetAt(0);
			/*水平垂直居中*/
			XSSFCellStyle cellStyle = workBook.createCellStyle();
			cellStyle.setAlignment(HorizontalAlignment.CENTER);
			cellStyle.setAlignment(HorizontalAlignment.CENTER);
			/*设置字体样式*/
			XSSFFont cellFont = workBook.createFont();
			//cellFont.setBoldweight(XSSFFont.BOLDWEIGHT_BOLD);
			cellFont.setFontHeight((short) 300);
			cellStyle.setFont(cellFont);

			int add=0;
			int subtract=0;
			BigDecimal amout=BigDecimal.ZERO;
			BigDecimal origin = BigDecimal.ZERO;
			for (GroupInsurancePersonLog groupInsurancePersonLog : logs) {
				if(groupInsurancePersonLog.get("change")!=null) {
				amout = amout.add(groupInsurancePersonLog.getBigDecimal("change"));
				if(groupInsurancePersonLog.getInt("status")==0) {
					add++;
				}
				else if(groupInsurancePersonLog.getInt("status")==2) {
					subtract++;
				}
			}
			}
			
			
			//List<GroupInsurancePersonLog> persons = GroupInsurancePersonLog.findByOrderId(id);
			order.put("add",add);
			order.put("subtract",subtract);
			order.put("amout",amout);
			order.put("persons",logs);
			String json = order.toJson();
			String content = RenderManager.me().getEngine().getTemplate("/mail/protection.html").renderToString((java.util.Map<?, ?>) JSONObject.parseObject(json, Map.class));

			/*数据写入单元格*/
			    XSSFRow row=sheet.getRow(2);
			    row.getCell(1).setCellValue(order.getStr("customer_name"));
			    row.getCell(4).setCellValue(order.getStr("policy_num"));
			    XSSFRow row2=sheet.getRow(3);
			    row2.getCell(1).setCellValue(order.getStr("policy_expiration_date"));
			    row2.getCell(4).setCellValue(order.getStr("annual_premium"));
			    XSSFRow row3=sheet.getRow(4);
			    row3.getCell(1).setCellValue(order.getStr("update_time"));
			    row3.getCell(4).setCellValue(DateUtil.formatDate(DateUtil.addDays(logs.get(0).getDate("policy_effective_date"), 1), "yyyy-MM-dd HH:mm:ss"));
			    
			    if(order.getInt("insurance_type")==0) {
			    	 XSSFRow row5=sheet.getRow(5);
					    row5.getCell(1).setCellValue(order.getStr("death_compensation"));
					    row5.getCell(4).setCellValue(order.getStr("disability_compensation"));
					    XSSFRow row6=sheet.getRow(6);
					    row6.getCell(1).setCellValue(order.getStr("medical_compensation"));
					    row6.getCell(4).setCellValue(order.getStr("hospitalization_compensation"));
					    XSSFRow row7=sheet.getRow(7);
					    row7.getCell(1).setCellValue(order.getStr("tardy_job_compensation"));
					    row7.getCell(4).setCellValue(order.getStr("law_compensation"));
			    }
			    
			    XSSFRow row8=sheet.getRow(8);
			    row8.getCell(1).setCellValue(amout.toString());
			    XSSFRow row9=sheet.getRow(9);
			    row9.getCell(1).setCellValue(""+add+"");
			    row9.getCell(4).setCellValue(""+subtract+"");
			    
			    XSSFCellStyle borderStyle = (XSSFCellStyle)workBook.createCellStyle();  
			    borderStyle.setBorderBottom(BorderStyle.THIN);   
	            borderStyle.setBorderTop(BorderStyle.THIN);   
	            borderStyle.setBorderLeft(BorderStyle.THIN);   
	            borderStyle.setBorderRight(BorderStyle.THIN);   
			    int i =14;
				for (GroupInsurancePersonLog groupInsurancePersonLog : logs) {
					XSSFRow rows=sheet.createRow(i);
					XSSFCell cell0 =rows.createCell(0);
					cell0.setCellStyle(borderStyle);
					cell0.setCellValue(groupInsurancePersonLog.getStr("name"));
					XSSFCell cell1 =rows.createCell(1);
					cell1.setCellStyle(borderStyle);
					cell1.setCellValue(groupInsurancePersonLog.getStr("id_num"));
					XSSFCell cell2 =rows.createCell(2);
					cell2.setCellStyle(borderStyle);
					cell2.setCellValue(groupInsurancePersonLog.getInt("gender")==1?"男":"女");
					XSSFCell cell3 =rows.createCell(3);
					cell3.setCellStyle(borderStyle);
					cell3.setCellValue(groupInsurancePersonLog.getStr("job_type"));
					XSSFCell cell4 =rows.createCell(4);
					cell4.setCellStyle(borderStyle);
					cell4.setCellValue(groupInsurancePersonLog.getInt("status")==0?"进保":"退保");
				    i++;
				}
			    
				
			/******workBook写入输出流**/
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			workBook.write(baos);
			baos.flush();
			baos.close();
			Setting setting = CacheKit.get(Constant.CHACHE_NAME, Constant.CHACHE_NAME);
			String smtpHost = setting.get("smtpHost");
			String smtpPort =setting.get("smtpPort");
			String smtpUsername = setting.get("smtpUsername");
			String smtpPassword = setting.get("smtpPassword");
			//for(String email:emailList){
				  /***每次都需要新建输入流  防止发送给第二个用户的时候 邮件内容为空*/
				  byte[] bt = baos.toByteArray();
				  InputStream is = new ByteArrayInputStream(bt, 0, bt.length);
				  MailUtil mailUtil=new MailUtil(smtpHost,smtpUsername,smtpPassword);
				  
				  CustomerInfo customerInfo = CustomerInfo.dao.findById(order.getLong("insure_customer_id"));
				  if(customerInfo.get("email")!=null) {
				  mailUtil.sendMail("保全申请书", customerInfo.get("email"), content ,"保全申请书.xlsx", is,null);
				  }
				  if(order.get("brand_service_emial")!=null) {
				  mailUtil.sendMail("保全申请书", order.get("brand_service_emial"), content ,"保全申请书.xlsx", is,null);
				  }
				//}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}		
	}

}
