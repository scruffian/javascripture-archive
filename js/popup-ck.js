(function(e){e.fn.popup=function(t){var n=this,r={open:function(){e(".popup").popup("close");n.show()},close:function(){n.hide()}};r[t]&&r[t]()};e(document).on("click",".open-popup",function(t){t.preventDefault();var n=e(this).attr("href");e(n).popup("open")});e(document).on("click",".close-popup",function(t){t.preventDefault();e(this).closest(".popup").popup("close")})})(jQuery);