package com.crm.service.system.impl;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.crm.model.group.GroupInsurancePerson;
import com.crm.model.system.Setting;
import com.crm.service.system.EmailService;
import com.crm.util.Constant;
import com.crm.util.MailUtil;
import com.jfinal.kit.PathKit;
import com.jfinal.plugin.ehcache.CacheKit;

public class EmailServiceImpl implements EmailService{

	@Override
	public void sendChangePersonEmail(List<GroupInsurancePerson> persons) throws IOException {
		try {
			FileInputStream template  = new FileInputStream( PathKit.getWebRootPath()+"/excel/人员邮件模板.xlsx");
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

			/*数据写入单元格*/
			for(int j=0 ; j<persons.size(); j++){
			    XSSFRow row=sheet.createRow(j+1);
			    row.createCell(0).setCellValue(persons.get(j).getStr("name"));
			    row.createCell(1).setCellValue(persons.get(j).getStr("policy_num"));
			    row.createCell(2).setCellValue(persons.get(j).getStr("name"));
			    row.createCell(3).setCellValue(persons.get(j).getStr("status"));
			    row.createCell(4).setCellValue(persons.get(j).getStr("create_time")); //产品线
			    row.createCell(4).setCellValue(persons.get(j).getStr("policy_expiration_date")); //产品线
			    row.createCell(4).setCellValue(persons.get(j).getStr("premium")); //产品线
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
				  mailUtil.sendMail("hahah", "825562306@qq.com", "sds" ,"人员邮件模板.xlsx", is,null);
				//}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}		
	}

}
