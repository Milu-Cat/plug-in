$(function(){
    (function ($) {
        $.fn.extend({
            table: function(){
                return this.each(function(){
                    $(this).children().click(function(){
                        $(this).addClass("bg").siblings().removeClass()
                        var f=$(this).attr("data-index")
                        $("#cn").children().eq(f).show().siblings().hide()
                    })
                })
            }
        })
    })(jQuery);
})