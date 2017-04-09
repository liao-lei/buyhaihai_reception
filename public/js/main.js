require("autosize");
require("zepto");
require("touch");
require("query")($);
var handlebars=require("handlebars");


var fillTemplate=function(templateObj,contentObj,fillData){
    var templateHtml = templateObj.html();
    var template = handlebars.compile(templateHtml);
    contentObj.html(template(fillData));
    $(".goodsdetails").on("tap",function(){
       var pid=$(this).attr("goodid");
       window.location="goodsdetails.html?id="+pid;
    });
    $(".recdetails").on("tap",function(){
       var pid=$(this).attr("recid");
       window.location="goodsdetails.html?id="+pid;
    });
};


//所有商品的列表；
var all_goods=function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:3005/goods/shows",
        success:function(data){
            goodsinfo={
                goods:data.data
            };
            fillTemplate($("#templateM"),$("#allgoods"),goodsinfo);
        }
    });
};
all_goods();

//推荐商品的列表；
var rec_goods=function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:3005/recgoods/showAllrec",
        success:function(data){
            recinfo={
                recgoods:data
            };
            console.log(data);
            fillTemplate($("#templateM1"),$("#recgoods"),recinfo);
        }
    });
};
rec_goods();
