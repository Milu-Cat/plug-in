$(function(){
    (function ($) {
        $.fn.extend({
            zxfd: function(w,h,t){
                return this.each(function(){
                    var tim=t || 1000
                    var ww=parseInt($(this).css("width"))
                    var hh=parseInt($(this).css("height"))
                    var tp=parseInt($(this).css("top"))
                    var le=parseInt($(this).css("left"))
                    var tps=tp-(w-ww)/2
                    var les=le-(h-hh)/2
                    $(this).hover(function(){
                            $(this).stop().animate({"width":+w+"px","height":h+"px","left":les+"px","top":tps+"px"},tim)
                    },function(){
                            $(this).stop().animate({"width":+ww+"px","height":+hh+"px","left":+le+"px","top":+tp+"px"},tim)
                    })
                })
            }
        })
    })(jQuery);
})