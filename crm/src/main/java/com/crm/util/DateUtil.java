package com.crm.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.commons.lang3.time.DateUtils;


public class DateUtil extends DateUtils {

	private static String[] parsePatterns = { "yyyy-MM-dd",
			"yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM", "yyyy/MM/dd",
			"yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy/MM", "yyyy.MM.dd",
			"yyyy.MM.dd HH:mm:ss", "yyyy.MM.dd HH:mm", "yyyy.MM" };

	/**
	 * 得到当前日期字符串 格式（yyyy-MM-dd）
	 */
	public static String getDate() {
		return getDate("yyyy-MM-dd");
	}

	/**
	 * 得到当前日期字符串 格式（yyyy-MM-dd） pattern可以为："yyyy-MM-dd" "HH:mm:ss" "E"
	 */
	public static String getDate(String pattern) {
		return DateFormatUtils.format(new Date(), pattern);
	}

	/**
	 * 得到日期字符串 默认格式（yyyy-MM-dd） pattern可以为："yyyy-MM-dd" "HH:mm:ss" "E"
	 */
	public static String formatDate(Date date, Object... pattern) {
		String formatDate = null;
		if (pattern != null && pattern.length > 0) {
			formatDate = DateFormatUtils.format(date, pattern[0].toString());
		} else {
			formatDate = DateFormatUtils.format(date, "yyyy-MM-dd");
		}
		return formatDate;
	}

	/**
	 * 得到日期时间字符串，转换格式（yyyy-MM-dd HH:mm:ss）
	 */
	public static String formatDateTime(Date date) {
		return formatDate(date, "yyyy-MM-dd HH:mm:ss");
	}

	/**
	 * 得到当前时间字符串 格式（HH:mm:ss）
	 */
	public static String getTime() {
		return formatDate(new Date(), "HH:mm:ss");
	}

	/**
	 * 得到当前日期和时间字符串 格式（yyyy-MM-dd HH:mm:ss）
	 */
	public static String getDateTime(String pattern) {
		String p = pattern == null ? "yyyy-MM-dd HH:mm:ss" : pattern;
		return formatDate(new Date(), p);
	}

	/**
	 * 得到当前日期和时间字符串 格式（yyyy-MM-dd HH:mm:ss）
	 */
	public static String getDateTime() {
		return formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
	}
	
	/**
	 * 得到当前年份字符串 格式（yyyy）
	 */
	public static String getYear() {
		return formatDate(new Date(), "yyyy");
	}

	/**
	 * 得到当前月份字符串 格式（MM）
	 */
	public static String getMonth() {
		return formatDate(new Date(), "MM");
	}
	
	/**
	 * 得到月份字符串 格式（MM）
	 * @param num 增减月份数
	 * @return
	 */
	public static String getMonth(Date date) {
		return formatDate(date, "MM");
	}

	/**
	 * 得到当天字符串 格式（dd）
	 */
	public static String getDay() {
		return formatDate(new Date(), "dd");
	}

	/**
	 * 得到当前星期字符串 格式（E）星期几
	 */
	public static String getWeek() {
		return formatDate(new Date(), "E");
	}

	/**
	 * 日期型字符串转化为日期 格式 { "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm",
	 * "yyyy/MM/dd", "yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy.MM.dd",
	 * "yyyy.MM.dd HH:mm:ss", "yyyy.MM.dd HH:mm" }
	 */
	public static Date parseDate(Object str) {
		if (str == null) {
			return null;
		}
		try {
			return parseDate(str.toString(), parsePatterns);
		} catch (ParseException e) {
			return null;
		}
	}

	public static Date parseDate(Object str,String pattern) {
		if (str == null) {
			return null;
		}
		return parseDate(str.toString(), pattern);
	}
	
	
	/**
	 * 获取过去的天数
	 * 
	 * @param date
	 * @return
	 */
	public static long pastDays(Date date) {
		long t = new Date().getTime() - date.getTime();
		return t / (24 * 60 * 60 * 1000);
	}

	/**
	 * 获取过去的小时
	 * 
	 * @param date
	 * @return
	 */
	public static long pastHour(Date date) {
		long t = new Date().getTime() - date.getTime();
		return t / (60 * 60 * 1000);
	}

	/**
	 * 获取过去的分钟
	 * 
	 * @param date
	 * @return
	 */
	public static long pastMinutes(Date date) {
		long t = new Date().getTime() - date.getTime();
		return t / (60 * 1000);
	}

	/**
	 * 转换为时间（天,时:分:秒.毫秒）
	 * 
	 * @param timeMillis
	 * @return
	 */
	public static String formatDateTime(long timeMillis) {
		long day = timeMillis / (24 * 60 * 60 * 1000);
		long hour = (timeMillis / (60 * 60 * 1000) - day * 24);
		long min = ((timeMillis / (60 * 1000)) - day * 24 * 60 - hour * 60);
		long s = (timeMillis / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);
		long sss = (timeMillis - day * 24 * 60 * 60 * 1000 - hour * 60 * 60
				* 1000 - min * 60 * 1000 - s * 1000);
		return (day > 0 ? day + "," : "") + hour + ":" + min + ":" + s + "."
				+ sss;
	}

	/**
	 * 获取两个日期之间的天数
	 * 
	 * @param before
	 * @param after
	 * @return
	 */
	public static double getDistanceOfTwoDate(Date before, Date after) {
		long beforeTime = before.getTime();
		long afterTime = after.getTime();
		return (afterTime - beforeTime) / (1000 * 60 * 60 * 24);
	}

	 /** 
     * 获取当月的 天数 
     * */  
    public static int getCurrentMonthDay() {
        Calendar a = Calendar.getInstance();
        a.set(Calendar.DATE, 1);
        a.roll(Calendar.DATE, -1);
        return a.get(Calendar.DATE);
    }
  
    /** 
     * 根据年 月 获取对应的月份 天数 
     * */  
    public static int getDaysByYearMonth(int year, int month) {
        Calendar a = Calendar.getInstance();
        a.set(Calendar.YEAR, year);
        a.set(Calendar.MONTH, month - 1);
        a.set(Calendar.DATE, 1);
        a.roll(Calendar.DATE, -1);
        return a.get(Calendar.DATE);
    }  
      
    /** 
     * 根据日期 找到对应日期的 星期 
     */  
    public static String getDayOfWeekByDate(String date) {  
        String dayOfweek = "-1";  
        try {  
            SimpleDateFormat myFormatter = new SimpleDateFormat("yyyy-MM-dd");  
            Date myDate = myFormatter.parse(date);  
            SimpleDateFormat formatter = new SimpleDateFormat("E");  
            String str = formatter.format(myDate);  
            dayOfweek = str;  
        } catch (Exception e) {  
            e.printStackTrace();
        }  
        return dayOfweek;  
    }  
    
    /**
     * 根据年、月获取当月第一天
     * @param year
     * @param month
     * @return
     */
    public static String getFirstDayByYearMonth(int year, int month) {
    	Calendar a = Calendar.getInstance();
        a.set(Calendar.YEAR, year);
        a.set(Calendar.MONTH, month - 1);
        a.set(Calendar.DAY_OF_MONTH, 1);
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd"); 
        
        return format.format(a.getTime());
    }
    
    /**
     * 根据年、月获取当月最后一天
     * @param year
     * @param month
     * @return
     */
    public static String getLastDayByYearMonth(int year, int month) {
    	Calendar a = Calendar.getInstance();
        a.set(Calendar.YEAR, year);
        a.set(Calendar.MONTH, month);
        a.set(Calendar.DAY_OF_MONTH, 0);
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd"); 
        
        return format.format(a.getTime());
    }
    
    public static Date getDaysAgo(Date date,int interval){
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.DAY_OF_MONTH, -interval);
		return calendar.getTime();
	}
    
    public static Date getMonthsAgo(Date date,int interval){
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.MONTH, -interval);
		return calendar.getTime();
	}
    
    /**获取到指定月份的第一天
     * @param date
     * @return
     */
    public static Date getFirstDayOfMonth(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.MONTH, 0);
		calendar.set(Calendar.DAY_OF_MONTH, 1);
		return calendar.getTime();
	}
    
    
    public static Date getNextDayBegin(String datetime) {
    	Date date = parseDate(datetime);
    	
    	Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.DAY_OF_MONTH, 1);
		Date nextDay = calendar.getTime();
		String dayStr = formatDate(nextDay, "yyyy-MM-dd");
		dayStr += " 00:00:00";
		
		return parseDate(dayStr);
    }
    
    public static Date getNextYearEnd(String datetime) {
    	Date date = parseDate(datetime);
    	
    	Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.YEAR, 1);
		Date nextYearDay = calendar.getTime();
		String dayStr = formatDate(nextYearDay, "yyyy-MM-dd");
		dayStr += " 23:59:59";
		
		return parseDate(dayStr);
    }
    
    /**
     * 将日期转换成范围等级
     * T01	一级	距评级时点0.5年（包含）内
	 * T02	二级	距评级时点1年（包含）内
	 * T03	三级	距评级时点1.5年（包含）内
	 * T04	四级	距评级时点2年（包含）内
	 * T05	五级	距评级时点2.5年（包含）内
	 * T06	六级	距评级时点3年（包含）内
	 * T07	七级	距评级时点3.5年（包含）内
	 * T08	八级	距评级时点4年（包含）内
	 * T09	九级	距评级时点4.5年（包含）内
	 * T10	十级	距评级时点5年（包含）内
	 * T99	其他	距评级时点5年（不包含）外
	 * 
     * @param pointDate
     * @param theDate
     * @return
     */
    public static String transferToTimeLevel(String pointDate, String theDate) {
    	String result = null;
    	
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        Calendar c1 = Calendar.getInstance();
        Calendar c2 = Calendar.getInstance();
        try {
			c1.setTime(sdf.parse(pointDate));
			c2.setTime(sdf.parse(theDate));
			//年
			int year1 = c1.get(Calendar.YEAR);
			int year2 = c2.get(Calendar.YEAR);
			//月
			int month1 = c1.get(Calendar.MONTH);
			int month2 = c2.get(Calendar.MONTH);
			//日
			int day1 = c1.get(Calendar.DATE);
			int day2 = c2.get(Calendar.DATE);
			
			switch (year1 - year2) {
			case 0:
				if((month1 - month2) >= 6) {
					if((day1 - day2) > 0) {
						result = "T02";
					} else {
						result = "T01";
					}
				} else {
					result = "T01";
				}
				break;
			case 1:
				if((month1 - month2) >= 6) {
					if((day1 - day2) > 0) {
						result = "T04";
					} else {
						result = "T03";
					}
				} else if((month1 - month2) >= 0) {
					if((day1 - day2) > 0) {
						result = "T03";
					} else {
						result = "T02";
					}
				} else if((month1 - month2) >= -6) {
					if(((month1 - month2) == -6) && ((day1 - day2) <= 0)) {
						result = "T01";
					} else {
						result = "T02";
					}
				} else {
					result = "T01";
				}
				break;
			case 2:
				if((month1 - month2) >= 6) {
					if((day1 - day2) > 0) {
						result = "T06";
					} else {
						result = "T05";
					}
				} else if((month1 - month2) >= 0) {
					if((day1 - day2) > 0) {
						result = "T05";
					} else {
						result = "T04";
					}
				} else if((month1 - month2) >= -6) {
					if(((month1 - month2) == -6) && ((day1 - day2) <= 0)) {
						result = "T03";
					} else {
						result = "T04";
					}
				} else {
					result = "T03";
				}
				break;
			case 3:
				if((month1 - month2) >= 6) {
					if((day1 - day2) > 0) {
						result = "T08";
					} else {
						result = "T07";
					}
				} else if((month1 - month2) >= 0) {
					if((day1 - day2) > 0) {
						result = "T07";
					} else {
						result = "T06";
					}
				} else if((month1 - month2) >= -6) {
					if(((month1 - month2) == -6) && ((day1 - day2) <= 0)) {
						result = "T05";
					} else {
						result = "T06";
					}
				} else {
					result = "T05";
				}
				break;
			case 4:
				if((month1 - month2) >= 6) {
					if((day1 - day2) > 0) {
						result = "T10";
					} else {
						result = "T09";
					}
				} else if((month1 - month2) >= 0) {
					if((day1 - day2) > 0) {
						result = "T09";
					} else {
						result = "T08";
					}
				} else if((month1 - month2) >= -6) {
					if(((month1 - month2) == -6) && ((day1 - day2) <= 0)) {
						result = "T07";
					} else {
						result = "T08";
					}
				} else {
					result = "T07";
				}
				break;
			case 5:
				if((month1 - month2) <= 0) {
					if(((month1 - month2) == 0) && ((day1 - day2) > 0)) {
						result = "T99";
					} else {
						result = "T10";
					}
				} else {
					result = "T99";
				}
				break;
			default:
				result = "T99";
				break;
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
    	
    	return result;
    }
    
    /**
     * 编号前缀日期
     * @return
     */
	public static String process() {
		
		return getDate("yyyyMMdd");
	}
    
    public static void main(String[] args) {
    	System.out.println(transferToTimeLevel("2018-1-23","2013-10-24"));
	}

    /**
     * 由出生日期计算年龄
     * 
     * @param birthDay
     * @return
     * @throws Exception
     */
    public static int calcAge(Date birthDay,Date effectDate) throws Exception {  
        Calendar cal = Calendar.getInstance();  
        if (cal.before(birthDay)) {  
            throw new IllegalArgumentException("出生日期不能晚于当前日期");  
        }  
        if(effectDate!=null){
        	cal.setTime(effectDate);  
       }

        int yearNow = cal.get(Calendar.YEAR);  
        int monthNow = cal.get(Calendar.MONTH);  
        int dayOfMonthNow = cal.get(Calendar.DAY_OF_MONTH);
       
        cal.setTime(birthDay);  
        int yearBirth = cal.get(Calendar.YEAR);  
        int monthBirth = cal.get(Calendar.MONTH);  
        int dayOfMonthBirth = cal.get(Calendar.DAY_OF_MONTH);  
  
        int age = yearNow - yearBirth;  
  
        if (monthNow <= monthBirth) {  
            if (monthNow == monthBirth) {  
                if (dayOfMonthNow < dayOfMonthBirth) age--;  
            }else{  
                age--;  
            }  
        }  
        return age;  
    }

    /**
     * 指定时间往后多少天
    * @param date
    * @param days
    * @return
    */
   public static Date getMonthAfterTimeByDate(Date date,Integer days){
  	 Calendar cal = Calendar.getInstance();
  	 cal.setTime(date);//设置起时间
  	 cal.add(Calendar.DAY_OF_MONTH, days);
  	 
	Date nextYearDay = cal.getTime();
	String dayStr = formatDate(nextYearDay, "yyyy-MM-dd");
	dayStr += " 23:59:59";
	
	return parseDate(dayStr);
  }

    /**
     * 处理消息列表时间(今天显示时分,早于今天且为年内显示月日,早于今年显示年月日)
     * @param date
     * @return
     */
	@SuppressWarnings("deprecation")
	public static Object changeListNewsDate(Date date) {
		Date nowDate = new Date();
		int diffMin = DateUtil.getDayString(date);
		//是今天
		if(diffMin==0) {
			return formatDate(date, "HH:mm");
		}
		else {
			//早于今天且为年内显示月日
		    if(nowDate.getYear()==date.getYear()) {
		    	return formatDate(date, "MM-dd");
		    }
		    //早于今年显示年月日
		    else if (nowDate.getYear()>date.getYear()){
		    	return formatDate(date, "yyyy-MM-dd");
		    }
		}
		return "";
	}

	/**
	 * 判断是否是今天
	 * @param startDate
	 * @return
	 */
	public static int getDayString(Date startDate){
		int offSet = Calendar.getInstance().getTimeZone().getRawOffset();
		long today = (System.currentTimeMillis()+offSet)/86400000;
		long start = (startDate.getTime()+offSet)/86400000;
		return (int) (start-today);
	}
	
	/**
     * 处理详情时间(年内显示月日时分,早于今年显示年月日时分)
     * @param date
     * @return
     */
	public static Object changeViewNewsDate(Date date) {
		   Date nowDate = new Date();
			//年内显示月日
		    if(nowDate.getYear()==date.getYear()) {
		    	return formatDate(date, "MM-dd HH:mm");
		    }
		    //早于今年显示年月日
		    else if (nowDate.getYear()>date.getYear()){
		    	return formatDate(date, "yyyy-MM-dd HH:mm");
		    }
		return "";
	}

	/**
     * 
     * 描述:获取下一个月的第一天.
     * 
     * @return
     */
    public static Date getPerFirstDayOfMonth() {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MONTH, -1);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMinimum(Calendar.DAY_OF_MONTH));
        return calendar.getTime();
    }

	
	  /**
     * 计算两个日期的时间差
     * 
     * @param theDate
     * @param nowDate
     * @return
     */
    public static long[] getDatePoor(Date theDate, Date nowDate) {
        long nd = 1000 * 24 * 60 * 60;
        long nh = 1000 * 60 * 60;
        long nm = 1000 * 60;
        long ns = 1000;
        // 获得两个时间的毫秒时间差异
        long diff = theDate.getTime() - nowDate.getTime();
        // 计算差多少天
        long day = diff / nd;
        // 计算差多少小时
        long hour = diff % nd / nh;
        // 计算差多少分钟
        long min = diff / nm;
        // 计算差多少秒//输出结果
        long sec = diff % nd % nh % nm / ns;
        
        return new long[] {sec, min, hour, day};
    }
}
