$(function(){
    (function ($) {
        $.fn.extend({
            biaodanyanzheng: function(){
                return this.each(function(){
   	                   $("#myform").submit(function(){
         if($(".tel").val()==""){
             $(".one").html("用户名不能为空");
             $(".one").css("color","red");
         }
         if($(".pw").val()==""){
             $(".two").html("密码不能为空");
             $(".two").css("color","red");
         }
         if($(".tel").val()=="" || $(".pw").val()==""){
             return false;
         }
         if(f==0){
             return false;
         }
     })
     var f=0;
     $(".tel").blur(function (){
         var reg1=/^(13|14|15|16|17|18)[0-9]{9}$/;
         if(reg1.test($(this).val())){
              $(this).next().html("格式正确");
              $(this).next().css("color","green");
              f=1;
         }else if($(this).val()==""){
              $(this).next().html("用户名不能为空");
              $(this).next().css("color","red");
              f=0;
         }else if(!(reg1.test($(this).val()))){
             $(this).next().html("格式不正确");
              $(this).next().css("color","red");
              f=0;
         }
     })
     $(".pw").blur(function(){
         var reg2=/^[a-zA-Z]{6}$/;
         if(reg2.test($(this).val())){
              $(this).next().html("格式正确");
              $(this).next().css("color","green");
              f=1;
         }else if($(this).val()==""){
              $(this).next().html("密码不能为空");
              $(this).next().css("color","red");
              f=0;
         }else if(!(reg2.test($(this).val()))){
             $(this).next().html("格式不正确");
              $(this).next().css("color","red");
              f=0;
         }
     })
                })
            }
        })
    })(jQuery);
})