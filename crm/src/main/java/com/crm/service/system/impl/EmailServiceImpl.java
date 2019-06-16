package com.crm.service.system.impl;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
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
import com.crm.model.group.GroupInsuranceOrder;
import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.group.GroupInsurancePersonLog;
import com.crm.model.system.Setting;
import com.crm.service.group.GroupInsuranceOrderService;
import com.crm.service.group.impl.GroupInsurancePersonServiceImpl;
import com.crm.service.system.EmailService;
import com.crm.util.Constant;
import com.crm.util.MailUtil;
import com.jfinal.aop.Inject;
import com.jfinal.kit.PathKit;
import com.jfinal.plugin.ehcache.CacheKit;
import com.jfinal.render.RenderManager;

public class EmailServiceImpl implements EmailService{
   @Inject
   private GroupInsuranceOrderService groupInsuranceOrderService;
	@Override
	public void sendChangePersonEmail(Long id) throws IOException {
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

			

			
			
			List<GroupInsurancePersonLog> persons = GroupInsurancePersonLog.findByOrderId(id);
		
			order.put("persons",persons);
			String json = order.toJson();
			String content = RenderManager.me().getEngine().getTemplate("/mail/protection.html").renderToString((java.util.Map<?, ?>) JSONObject.parseObject(json, Map.class));

			/*数据写入单元格*/
			    XSSFRow row=sheet.getRow(2);
			    row.getCell(1).setCellValue(order.getStr("customer_name"));
			    row.getCell(4).setCellValue(order.getStr("policy_num"));
			    XSSFRow row2=sheet.getRow(3);
			    row2.getCell(1).setCellValue(order.getStr("policy_expiration_date"));
			    row2.getCell(4).setCellValue(order.getStr("order_sn"));
			    XSSFRow row3=sheet.getRow(4);
			    row3.getCell(1).setCellValue(order.getStr("update_time"));
			    row3.getCell(4).setCellValue(order.getStr("order_sn"));
			    XSSFRow row4=sheet.getRow(7);
			    row4.getCell(1).setCellValue(order.getStr("premium"));
			    XSSFRow row5=sheet.getRow(8);
			    row5.getCell(1).setCellValue(1);
			    row5.getCell(4).setCellValue(2);
			    
			    XSSFCellStyle borderStyle = (XSSFCellStyle)workBook.createCellStyle();  
			    borderStyle.setBorderBottom(BorderStyle.THIN);   
	            borderStyle.setBorderTop(BorderStyle.THIN);   
	            borderStyle.setBorderLeft(BorderStyle.THIN);   
	            borderStyle.setBorderRight(BorderStyle.THIN);   
			    int i =13;
				for (GroupInsurancePersonLog groupInsurancePersonLog : persons) {
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
				  mailUtil.sendMail("保全申请书", "825562306@qq.com", content ,"保全申请书.xlsx", is,null);
				//}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}		
	}

}
