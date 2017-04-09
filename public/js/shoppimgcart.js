require("autosize");
require("zepto");
require("touch");
require("query")($);
var handlebars=require("handlebars");
var id=$.query.get("id");
var common = require("common");
var user = common.get("user");

var fillTemplate=function(templateObj,contentObj,fillData){
    var templateHtml = templateObj.html();
    var template = handlebars.compile(templateHtml);
    contentObj.html(template(fillData));
    $(".settlement").click(function(){
      window.location="order.html";
    });
};


var showAll = function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:3005/shopcar/showAll",
        data:{uid:user._id},
        success:function(data){
          console.log(data);
            // totalPrice = 0;
            // for(var i = 0;i < data.length;i++){
            //     data[i].goods.price  *= data[i].count;
            //     totalPrice += data[i].product.price;
            // }
            common.save("goodscar",data);
            fillTemplate($("#shopcarTemplate"),$("#shopcar"),{"shopcar":data});
            $(".delBtn").click(function(){
                del($(this).attr("data-id"));
            });

        }

    });
};

var del = function(id){
    $.ajax({
        type:"post",
        url:"http://127.0.0.1:3005/shopcar/del",
        data:{id:id},
        success:function(data){
            showAll();
        }
    });
};

if(!user){
    alert("请先登录");
    window.location = "login.html";
}else{
    showAll();
}
