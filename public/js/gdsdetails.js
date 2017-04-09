require("autosize");
require("zepto");
require("touch");
require("query")($);
var handlebars=require("handlebars");
var common = require("common");
var id=$.query.get("id");

var fillTemplate=function(templateObj,contentObj,fillData){
    var templateHtml = templateObj.html();
    var template = handlebars.compile(templateHtml);
    contentObj.html(template(fillData));
    $(".join").click(function(){
      add($(this).attr("data-id"));
      // window.location="shoppimgcart.html?id="+id;
    });
};

//所有商品的详情；
var goods_datail=function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:3005/goods/lookupid",
        data:{
          _id:id
        },
        success:function(data){
            goodsinfo={
                goods:data
            };
            fillTemplate($("#templateM2"),$(".details"),goodsinfo);
        }
    });
};
goods_datail();

var add = function(pid){
	var user = common.get("user");
	if(!user){
		alert("请先登录");
		window.location = "login.html";
	}
	$.ajax({
        type:"post",
        url:"http://127.0.0.1:3005/shopcar/add",
        data:{
        	uid:user._id,
        	pid:pid
        },
        success:function(data){
           window.location="shoppimgcart.html?id="+id;
        }
    });
};
