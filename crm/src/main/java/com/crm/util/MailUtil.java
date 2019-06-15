package com.crm.util;

import java.io.InputStream;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;
import javax.mail.util.ByteArrayDataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MailUtil {
 
    private String host;
    private String user;
    private String password;
 
    static Logger logger = LoggerFactory.getLogger(MailUtil.class);
 
    public MailUtil(String host, String user, String password){
        this.host = host;
        this.user = user;
        this.password = password;
    }
 
  public   boolean sendMail(String subject, String toMail, String content,String fileName, InputStream is,String ccList) {
        boolean isFlag = false;
        try {
            Properties props = new Properties();
            props.put("mail.smtp.host", host);   // 指定SMTP服务器
            props.put("mail.smtp.auth", "true"); // 指定是否需要SMTP验证
            Session session = Session.getDefaultInstance(props);
            session.setDebug(false);
 

            MimeMessage message = new MimeMessage(session);
            try {
                //指定发送人
                message.setFrom(new InternetAddress(user));  
                //指定接收人
                message.addRecipient(Message.RecipientType.TO, new InternetAddress(toMail)); 
                //指定抄送人
                if(ccList!=null && !"".equals(ccList)){
                    message.addRecipients(Message.RecipientType.CC,ccList);
                }
                //设置标题
                message.setSubject(subject);
                message.addHeader("charset", "UTF-8");
 
                /*添加正文内容*/
                //一个Multipart对象包含一个或多个bodypart对象，组成邮件正文
                Multipart multipart = new MimeMultipart();   
 
                MimeBodyPart contentPart = new MimeBodyPart();
                contentPart.setText(content,"UTF-8");
                contentPart.setHeader("Content-Type", "text/html; charset=UTF-8");
                multipart.addBodyPart(contentPart);
 
                /*添加附件*/
                if(is != null) {
                    MimeBodyPart fileBody = new MimeBodyPart();
                    DataSource source = new ByteArrayDataSource(is, "application/msexcel");
                    fileBody.setDataHandler(new DataHandler(source));
                    // 中文乱码问题
                    fileBody.setFileName(MimeUtility.encodeText(fileName));
                    multipart.addBodyPart(fileBody);
                }
 
                message.setContent(multipart);
                message.setSentDate(new Date());
                message.saveChanges();
                Transport transport = session.getTransport("smtp");             
                transport.connect(host, user, password);
                transport.sendMessage(message, message.getAllRecipients());
                transport.close();
                isFlag = true;
                logger.info(Calendar.getInstance().getTime()+":#Send mail to"+toMail+"success #");
            } catch (Exception e) {
                  logger.info(Calendar.getInstance().getTime()+":#Send mail to"+toMail+"error #");
                logger.info(e.toString());
                e.printStackTrace();
                isFlag = false;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return isFlag;
    }
}