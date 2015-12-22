define(['angular','jQuery','Base'], function (ng,$,base) {

	return ng.module('app.services', []).factory('Api', [
		function(){
			var res = function(){
				return {
					get:function(funname,data,callback,async,header){
						$.api("get",funname,data,function(ret){
							_base_fun(ret,callback);
						},async || true,header || {})
					},
					post:function(funname,data,callback,async,header){
						$.api("post",funname,data,function(ret){
							_base_fun(ret,callback);
						},async || true,header || {})
					}
				}
			}(),_base_fun = function(ret,callback){
				if(ret.status && ret.status.code==1000){
					location.href = "/index";
				}else {
					callback(ret);
				}
			};
			return res;
		}]);

});
