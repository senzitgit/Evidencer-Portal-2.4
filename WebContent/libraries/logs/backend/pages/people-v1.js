"use strict";!function(a){"function"==typeof define&&define.amd?define(["shuffle"],a):a()}(function(){$(function(){var a=$("#shuffle-grid"),b=$("#shuffle-filter"),c=a.find("shuffle-sizer");a.shuffle({itemSelector:".shuffle",sizer:c}),b.on("keyup change",function(){var b=this.value.toLowerCase();a.shuffle("shuffle",function(a,c){if("all"!==c.group&&-1===$.inArray(c.group,a.data("groups")))return!1;var d=$.trim(a.find(".panel-body > h5").text()).toLowerCase();return-1!==d.indexOf(b)})}),$("html").on("fa.sidebar.minimize",function(){a.shuffle("update")}).on("fa.sidebar.maximize",function(){a.shuffle("update")})})});