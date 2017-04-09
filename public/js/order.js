require("autosize");
require("zepto");
require("touch");
require("query")($);
var handlebars=require("handlebars");
var common = require("common");
var id=$.query.get("id");
var user = common.get("user");
// console.log(user);

var fillTemplate=function(templateObj,contentObj,fillData){
    var templateHtml = templateObj.html();
    var template = handlebars.compile(templateHtml);
    contentObj.html(template(fillData));
};

$("#usersname").html(user.username);
$("#usersphone").html(user.phonenumber);

var goodscar=common.get("goodscar");
// var goodsf=goodscar.goods;
console.log(goodscar);
var goods ={
  goodscar:goodscar
};

fillTemplate($("#shTemplate2"),$(".goods"),goods);
