define(['jQuery'], function($) {
  var _config = {
    _baseUrl:"/api/" ,
  };
  (function($) {
    var timerout = 30 * 1000;
    $.api = function(type, funname, data, callback,async,header) {

      if(type == "get")
        data["atool_timestamp"] = new Date().getTime();

      $.ajax({
        type: type,
        url: _config._baseUrl + funname,
        data: (data != null && type == "post") ? JSON.stringify(data) : data,
        dataType: "json",
        async: async || true,
        timeout: timerout,
        contentType: "application/json;charset=utf-8",
        complete: function(xhr, status) {
          var is_ok = true,ret;
          try {
            ret = xhr.responseJSON;
          } catch (e) {
            is_ok = false;
          }
          if(is_ok && ret!=undefined ){
            callback(ret);
          }else {
            callback({status:{code:-1,message:"网络貌似有点问题哟!"}});
          }
        },
        headers:header || {}
      });
    };

    $.fn.css3 = function(css,value){
      var c1 = '-webkit-'+css,c2 = '-moz-'+css,c3 = '-ms-'+css,c4 = '-o-'+css;
      this.css(css,value).css(c1,value).css(c2,value).css(c3,value).css(c4,value);
    } 
  })(jQuery);

});



function goHome(){
  window.open("/#/index","main");
}

function checkMobile(mobile) {
  var myreg = /^((1)+\d{10})$/;
  if (myreg.test(mobile)) {
    return false;
  }
  return true;
}

function checkVerifi(ver) {
  var myreg = /^(\d{6})$/;
  if (myreg.test(ver)) {
    return false;
  }
  return true;
}

function checkEmail(email) {
  var myreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (myreg.test(email)) {
    return false;
  }
  return true;
}

function getParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}


function enEight(txt) {
  var monyer = new Array();
  var i, s;
  for (i = 0; i < txt.length; i++)
    monyer += "\\" + txt.charCodeAt(i).toString(8);
  return monyer;
}

function deEight(txt) {
  var monyer = new Array();
  var i;
  var s = txt.split("\\");
  for (i = 1; i < s.length; i++)
    monyer += String.fromCharCode(parseInt(s[i], 8));
  return monyer;
}




function setCookie(name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + enEight(escape(value)) + ";expires=" + exp.toGMTString();
}


function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return deEight(unescape(arr[2]));
  } else
  return "";
}


function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function loadfile (filename, filetype,func) {
  var fileref, dhead = document.getElementsByTagName("head")[0],_bind = "1.0";
  if (filetype == "js") {
    fileref = document.createElement('script');
    fileref.setAttribute("type", "text/ecmascript");
    fileref.setAttribute("src", filename );
  }else if (filetype == "js2") {
    fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("charset", "gb2312");
    fileref.setAttribute("src", filename );
  } else if (filetype == "css") {
    fileref = document.createElement('link');
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename );
  }
  if (typeof fileref != "undefined") {
    dhead.appendChild(fileref);
    fileref.onload = function() {
      func && func();
    }
  }
}

String.prototype.trim=function(){
  return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim=function(){
  return this.replace(/(^\s*)/g,"");
}
String.prototype.rtrim=function(){
 return this.replace(/(\s*$)/g,"");
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) {
  var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      }

//两种调用方式
// var template1="我是{0}，今年{1}了";
// var template2="我是{name}，今年{age}了";
// var result1=template1.format("loogn",22);
// var result2=template2.format({name:"loogn",age:22});
//两个结果都是"我是loogn，今年22了"
String.prototype.format = function(args) {
  var result = this;
  if (arguments.length > 0) {
    if (arguments.length == 1 && typeof(args) == "object") {
      for (var key in args) {
        if (args[key] != undefined) {
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          var reg = new RegExp("({)" + i + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
}

