$(function(){
    (function ($) {
        $.fn.extend({
            yinying: function(){
                return this.each(function(){
                    $(".con").hover(function(){
                        $(".one").stop(false,true).slideDown(200)
                  },function(){
                        $(".one").stop().slideUp(200)
                  })
                })
            }
        })
    })(jQuery);
})