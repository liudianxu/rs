package com.crm.util;

import com.jfinal.plugin.activerecord.Model;

import org.apache.commons.jexl2.Expression;
import org.apache.commons.jexl2.JexlContext;
import org.apache.commons.jexl2.JexlEngine;
import org.apache.commons.jexl2.MapContext;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.builder.CompareToBuilder;

import java.util.Arrays;
import java.util.Iterator;
import java.util.Map;

/**
 * 
 * @version: 1.00.00
 * @description: 常用工具类
 * @copyright: Copyright (c) 2017 易联众  All Rights Reserved
 * @company: 易联众健康医疗控股有限公司
 * @author: Rock
 * @date: 2017年8月29日 上午9:28:49
 * @history:
 */
public class CommonUtils{

	/**
	 * 判断一个整数是否为偶数
	 * @param a
	 * @return
	 */
	public static boolean isOdd(int a){   
	    if((a&1) != 1){
	        return true;   
	    }   
	    return false;   
	}

	public static int getRepeat(Long[] parentIds, Long id, Long[] parentIds2, Long id3, Object grade, Object grade2, Map<Long, Integer> orderMap) {
		Long[] ids1 = (Long[]) ArrayUtils.add(parentIds, id);
		Long[] ids2 = (Long[]) ArrayUtils.add(parentIds2, id3);
		Iterator<Long> iterator1 = Arrays.asList(ids1).iterator();
		Iterator<Long> iterator2 = Arrays.asList(ids2).iterator();
		CompareToBuilder compareToBuilder = new CompareToBuilder();
		while (iterator1.hasNext() && iterator2.hasNext()) {
			Long id1 = iterator1.next();
			Long id2 = iterator2.next();
			Integer order1 = orderMap.get(id1);
			Integer order2 = orderMap.get(id2);
			compareToBuilder.append(order1, order2).append(id1, id2);
			if (!iterator1.hasNext() || !iterator2.hasNext()) {
				compareToBuilder.append(grade.toString(), grade2.toString());
			}
		}
		return compareToBuilder.toComparison();
	}

	/**
 * java将字符串转换成可执行代码 工具类
 *
 * @param jexlExp
 * @param map
 * @return
 */
	public static Object convertToCode(String jexlExp, Map<String, Object> map) {
		
		
		
    JexlEngine jexl = new JexlEngine();
    Expression expression = jexl.createExpression(jexlExp);
    JexlContext jc = new MapContext();
    for (String key : map.keySet()) {
        jc.set(key, map.get(key));
    }
    if (null == expression.evaluate(jc)) {
        return "";
    }
    return expression.evaluate(jc);
}

}
