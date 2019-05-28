/**
 * AJAX调用后端
 * @param apiMethod
 * @param type
 * @param callback
 * @param time
 * @param dataType
 * @param asyncBoolean
 */
function remoteService(url, type, callback, time, dataType, asyncBoolean) {
	if (type == null || type == undefined) {
		type = "POST";
	}
	if (time == null || time == undefined) {
		time = 10000;
	}
	if (dataType == null || dataType == undefined) {
		dataType = "json";
	}
	if (asyncBoolean == null || asyncBoolean == undefined) {
		asyncBoolean = true;
	}
	$.ajax({
		url : url,
		dataType : dataType,
		type : type,
		contentType : "application/json",
		async : asyncBoolean,
		timeout : time,
		success : callback,
		error : errorFun
	});

	function errorFun(error) {
		console.log(error);
	}
}

/**
 * Form表单提交
 * @param form
 * @param apiMethod
 * @param callback
 * @param time
 * @param dataType
 * @param asyncBoolean
 */
function remoteServiceForm(form, url, callback, time, dataType,
		asyncBoolean) {
	console.log(form.serialize());
	if (time == null || time == undefined) {
		time = 10000;
	}
	if (dataType == null || dataType == undefined) {
		dataType = "json";
	}
	if (asyncBoolean == null || asyncBoolean == undefined) {
		asyncBoolean = true;
	}
	$.ajax({
		cache : true,
		dataType : dataType,
		type : "POST",
		url : url,
		data : form.serialize(),
		async : asyncBoolean,
		success : callback,
		error : function(request) {
			console.info(request.status);
		}
	});
}

/**
 * 数组转JSON字符串
 * @param formArray
 * @returns
 */
function arrayToJson(formArray) {
	var dataArray = {};
	$.each(formArray, function() {
		if (dataArray[this.name]) {
			if (!dataArray[this.name].push) {
				dataArray[this.name] = [ dataArray[this.name] ];
			}
			dataArray[this.name].push(this.value || '');
		} else {
			dataArray[this.name] = this.value || '';
		}
	});
	return JSON.stringify(dataArray);
}

//去掉str头尾的空格
function trim(str){
	if(str == null || str == undefined)
		return str;
	var reg_left=/^[\s]*/g;//匹配开头的空白
	var reg_right=/[\s]*$/g;//匹配结尾的空白
	return str.replace(reg_left,"").replace(reg_right,"");
}

//扩展数组的indexOf方法
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
//扩展数组的remove方法
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

/**
 *  采用问号挂参的方式，为 a 链接追加 returnUrl 参数
 */
function appendReturnUrl(target) {
	var returnUrl;
	var currentUrl = location.pathname;
	if (currentUrl.indexOf("/login") != 0 && currentUrl.indexOf("/reg") != 0) {
		returnUrl = "?returnUrl=" + currentUrl;
		var link = $(target);
		link.attr("href", link.attr("href") + returnUrl);
	}
}