require("autosize");
require("zepto");
require("touch");
var common = require("common");

$(".login").click(function(){
  console.log($("#username").val(),$("#pwd").val());
  $.ajax({
    type:"post",
    url:"http://127.0.0.1:3005/users/login1",
    data:{
      username:$("#username").val(),
      pasd:$("#pwd").val()
    },
    success:function(data){
      console.log(data);
      if(data.length>0){
        window.location="main.html";
        common.save("user",data[0]);
      }else {
        alert("登陆失败，请检查用户名和密码是否匹配");
      }
    }
  });
});

$(".p1").click(function(){
  window.location="register.html";
});
