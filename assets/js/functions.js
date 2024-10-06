/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.  BACKGROUND INSERT
	2.  MOBILE MENU
	3.	HEADER AFFIX
	4.  COUNTDOWN DATE
	5.  AJAX MAILCHIMP
	6.  AJAX CAMPAIGN MONITOR 
	7.  OWL CAROUSEL
	8.  MAGNIFIC POPUP
	9.  MAGNIFIC POPUP VIDEO
	10. SCROLL TO
	11. PROGRESS BAR
	
*/
(function($) {
    "use strict";

    /* ------------------  MOBILE MENU ------------------ */

    var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
        $module = $(".module");
    $dropToggle.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("open");
        $(this).parent().toggleClass("open");
    });

    /* ------------------ HEADER AFFIX ------------------ */

    var $navAffix = $(".header-fixed .navbar-fixed-top");
    $navAffix.affix({
        offset: {
            top: 50
        }
    });

    /* ------------------ NAV SPLIT ------------------ */

    if ($('.body-scroll').length > 0) {
        $(window).on("scroll", function() {
            $('.section').each(function() {
                var sectionID = $(this).attr("id"),
                    sectionTop = $(this).offset().top - 100,
                    sectionHight = $(this).outerHeight(),
                    wScroll = $(window).scrollTop(),
                    $navHref = $("a[href='#" + sectionID + "']"),
                    $nav = $('.nav-split').find($navHref).parent();
                if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                    $nav.addClass('active');
                    $nav.siblings().removeClass('active');
                }
            });
        });
    }
              
}(jQuery)); 

