$(function(){
    (function ($) {
        $.fn.extend({
            gouwuche: function(){
                return this.each(function(){
                          $(".gs>button").click(function () {
        if ($("#car").html() !== "") {
          var f = $(this).prev().children(".name").attr("data-flag");//当前商品的标识符
          var gs = $("#car").children();
          var b = 0; //标识是否有重复商品
          for (var i = 0; i < gs.length; i++) {
            //  b=0;   可不写
            var cf = gs.eq(i).attr("data-flag");
            if (f == cf) {
              var num = parseInt(gs.eq(i).children("input").val())
              gs.eq(i).children("input").val(num + 1);
              b = 1;
              break;
            }
          }
          if (b==0) {
            add($(this))
          }

        } else {
          add($(this));
        }

        function add(obj) {
          var name = obj.prev().children(".name").html();
          var price = obj.prev().children(".price").html();
          var df = obj.prev().children(".name").attr("data-flag");
          var con = '<div class="cc" data-flag="' + df + '"><span>' + name + '</span><button class="jian">-</button><input type="text" value="1"><button class="jia">+</button><span>' + price + '</span><button class="del">删除</button></div>'
          $("#car").append(con)
        }

      })

      $(".jian").live("click",function () {
        var num = $(this).next().val();
        if (num > 1) {
          $(this).next().val(num - 1)
        }
      })
      $(".jia").live("click",function () {
        var num = parseInt($(this).prev().val());
        $(this).prev().val(num + 1)
      })
      $(".del").live("click",function () {
        $(this).parent().remove();
      })
                })
            }
        })
    })(jQuery);
})