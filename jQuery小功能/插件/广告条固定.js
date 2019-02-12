$(function(){
    (function ($) {
        $.fn.extend({
            guanggao: function(){
                return this.each(function(){
                    $(window).scroll(function () {
                        var x = parseInt($(window).scrollTop());
                        
                        if(x>150){
                            $("#two").css("top",x+10+'px')
                        }
                    })
                })
            }
        })
    })(jQuery);
})