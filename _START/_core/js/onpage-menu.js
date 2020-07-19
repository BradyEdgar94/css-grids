! function(o) {
    o(document).ready(function() {
        o(window);
        var t = o(document.body),
            n = o(".doc-container").find(".nav-sidebar");
        t.scrollspy({
            target: ".doc-sidebar"
        }), 
        n.find("> li > a").before(o('<span class="docs-progress-bar" />'));
        n.offset().top;
        o(window).scroll(function() {
            o(".nav-sidebar").height();
            var t = o(this).scrollTop(),
                n = o(this).innerHeight(),
                e = o(".nav-sidebar li a").filter(".active").index();
            o(".doc-section").each(function(i) {
                var c = o(this).offset().top,
                    s = o(this).height(),
                    a = c + s,
                    r = 0;
                t >= c && t <= a ? (r = (t - c) / s * 100) >= 100 && (r = 100) : t > a && (r = 100), a < t + n - 70 && (r = 100);
                var d = o(".nav-sidebar .docs-progress-bar:eq(" + i + ")");
                e > i && d.parent().addClass("viewed"), d.css("width", r + "%")
            })
        })
    })
    
    var originalAddClassMethod = jQuery.fn.addClass;

	jQuery.fn.addClass = function(){
		// Execute the original method.
		var result = originalAddClassMethod.apply( this, arguments );

		// trigger a custom event
		jQuery(this).trigger('cssClassChanged');

		// return the original result
		return result;
	}
	  $( window ).on('scroll', function() {
		 $(".nav-link").bind('cssClassChanged' , function(e) {
			$(".nav-item").each( function() {
				if( $(this).hasClass("active") == true ) {
					$(this).removeClass("active");
					 $('.dropdown_nav li').parent().closest('li').removeClass('active');
				}
			});
			$(this).removeClass("active").parent().addClass("active");
			$('.dropdown_nav li.active').parent().closest('li').addClass('active');
		}); 
   });
}(jQuery)