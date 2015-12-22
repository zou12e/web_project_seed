define(['angular','jQuery','Base'], function (ng,$,base) {
	var directives =  ng.module('app.directives', []);
	directives.directive('dropdownlist', function() {
		return {
			restrict: 'EA',
			replace : true,
			transclude: true,
			template: '<div ng-click="toggle($event)" class="dropdownlist" ><span class="arrow_down_btn"></span><div ng-transclude></div></div>',
			link : function($scope, element, attrs) {
				$scope.toggle = function toggle(_this) {
					var _target = $(_this.target);
					if(!_target.hasClass("dropdownlist"))
						_target = _target.parent();
					var ele = $(_target).find('.drop_down_list')

					if(ele.is(":hidden")){
						ele.toggle(100);
						setTimeout(function(){
							$(document.body).on('click',function(){
								ele.toggle(100);
								$(document.body).off('click');
							});
						},300);
					}
				}
			}
		}
	}).directive('ngTouchend', [function() {
		return function($scope, element, attr) {
			var fn = function() {
				$scope.$apply(function() {
					$scope.$eval(attr.ngTouchend);
				});
			}
			element.on('touchstart', function(event) {
				$scope._usingTouch = true;
				fn();
			});
			element.on('mousedown', function(event) {
				if (!$scope._usingTouch)
					fn();
			});
		};
	}]);;

	

});




