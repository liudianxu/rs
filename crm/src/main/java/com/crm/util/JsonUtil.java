package com.crm.util;

import java.util.List;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

/**
 * 
 * 
 * @version: 1.00.00
 * @description: JSON工具类
 * @copyright: Copyright (c) 2018 易联众  All Rights Reserved
 * @company: 保睿通（厦门）信息科技有限公司
 * @author: ldx
 * @date: 2018年11月23日 上午10:37:07
 * @history:
 */
public class JsonUtil {
	/**
     * List<T> 转 json 
     */
    public static <T> String listToJson(List<T> ts) {
        String jsons = JSON.toJSONString(ts);
        return jsons;
    }

    /**
     * json 转 List<T>
     */
    public static <T> List<T> jsonToList(String jsonString, Class<T> clazz) {
        @SuppressWarnings("unchecked")
        List<T> ts = (List<T>) JSONArray.parseArray(jsonString, clazz);
        return ts;
    }
            

}
