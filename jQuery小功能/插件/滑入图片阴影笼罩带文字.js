$(function(){
    (function ($) {
        $.fn.extend({
            yinyingwz: function(t){
                return this.each(function(){
                    var tim=t || 1000
                    $(".con").hover(function(){
                        $(".one").stop(false,true).animate({"top":"0"},tim)
                  },function(){
                        $(".one").stop().animate({"top":"260px"},tim)
                  })
                })
            }
        })
    })(jQuery);
})