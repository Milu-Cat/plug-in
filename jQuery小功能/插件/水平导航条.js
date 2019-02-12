$(function(){
    (function ($) {
        $.fn.extend({
            shuipingdaohang: function(){
                return this.each(function(){
                    $(this).mouseenter(function(){
                        $(this).children("ul").stop(false,false)//防止滑的太快出现错乱
                        $(this).css("background","pink").children("ul").slideDown()
                     }).mouseleave(function(){
                        $(this).css("background","#ccc").children("ul").css("display","none")
                    }).find("li").mouseenter(function(){
                        $(this).css({"background":"#000","color":"#fff"})
                    }).mouseleave(function(){
                        $(this).css({"background":"pink","color":"#000"})    
                    })
                })
            }
        })
    })(jQuery);
})