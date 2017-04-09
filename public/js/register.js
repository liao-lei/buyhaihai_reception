require("autosize");
require("zepto");
require("touch");

//点击左边的图标到登陆；
$(".regtolo").click(function(){
    window.location="login.html";
});

// 判断用户名是否重复
$("#username").on("blur",function(){
  receive_username=istrue_username();
});

var receive_username;
var istrue_username=function(){
  if(/^[a-zA-Z0-9].{6,20}$/.test($("#username").val())){
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:3005/users/userstrue",
      data:{
        username:$("#username").val()
      },
      success:function(data){
        if(data.mes == '0'){
          $("#username").css({color:"red"});
          alert("用户名重复");
          receive_username=false;
        }else{
          $("#username").css({color:"green"});
          receive_username=true;
        }
      }
    });
  }else {
    $("#username").css({color:"red"});
    alert("用户名格式错误");
    return false;
  }
};

//判断密码，电话，邮箱的封装函数；
var package_Judge=function(regexp,obj,objInfo){
    if(regexp.test(obj.val())){
        objInfo.css({color:"green"});
        return true;
    }else{
        objInfo.css({color:"red"});
        alert("格式错误");
        return false;
    }
};

//判断密码；
var receive_pwd;  //接受返回值，密码的格式是，正确还是错误；
$("#userpwd").on("blur",function(){
  receive_pwd=package_Judge(/^.{6,16}$/,$("#userpwd"),$("#userpwd"));
});

//判断电话号码；
var receive_phone;
$("#userphone").on("blur",function(){
  receive_phone=package_Judge(/^[0-9].{10}$/,$("#userphone"),$("#userphone"));
});

//判断电子邮箱；
var receive_emil;
$("#useremil").on("blur",function(){
  receive_emil=package_Judge(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,$("#useremil"),$("#useremil"));
});


//判断以上的信息全对，提交到数据库；
$(".register").click(function(){
    if(receive_username && receive_pwd && receive_phone && receive_emil){
        $.ajax({
            type:"post",
            url:"http://127.0.0.1:3005/users/register",
            data:{
                username:$("#username").val(),
                pwd:$("#userpwd").val(),
                phonenumber:$("#userphone").val(),
                emil:$("#useremil").val(),
            },
            success:function(data){
                alert("注册成功");
                window.location="login.html";
            }
        });
    }else{
        alert("输入信息有错误，请重新检查");
    }
});
