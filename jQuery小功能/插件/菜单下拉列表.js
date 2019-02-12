$(function(){
    (function ($) {
        $.fn.extend({
            caidan: function(){
                return this.each(function(){
                    $("#fa").find("h1").click(function(){
                        $(this).next().show(500).parent().siblings().children("ul").hide(500);
                    })
                })
            }
        })
    })(jQuery);
})