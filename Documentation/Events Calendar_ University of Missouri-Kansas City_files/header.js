$(document).ready(function () {
    $('.header-menu').on('click', function () {
        $('.header-menu-item').slideToggle( "fast");
    });
    
//disable right click
    $('body').on('contextmenu', 'img', function(e){ return false; });
    
//Scroll to top button---------------------------->
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $('.back2top').fadeIn(1200);
        } else {
            $('.back2top').fadeOut(1200);
        }
    });

    $('.back2top').click(function(){
        $("html, body").animate({ scrollTop: $("#header").offset().top }, 1200);
        return false;
    });

    //Sticky Header
    $('.sd-sticky-header').hide();  
    $(window).scroll(function(){
        if (($(this).scrollTop() > 300) && ($(window).width() > 992)) {
            $('.sd-sticky-header').addClass('fixed-header');
            $('.sd-sticky-header').show();        
        }
        else {
            $('.sd-sticky-header').removeClass('fixed-header');
            $('.sd-sticky-header').hide();                    
        }
    });
    
    //Tables Styles
    $('table').basictable({
        breakpoint: 768,
    });
    
    $(window).resize(function () {
    
        if ($(window).width() < 768) {
            $('table.umkc-table.bt').css('width', '100%');
            $('table.bt tbody td').css('width', '100%')
        };
    });

});

//Search Box Placeholder Text
window.onload = function() {
    document.getElementById('gsc-i-id1').placeholder = 'Search UMKC';
};

//Carousel Hide Buttons When It's Just One Slide
$('.carousel-inner').each(function() {
    if ($(this).children('div').length === 1) $(this).siblings('.carousel-indicators, .carousel-control-prev, .carousel-control-next').hide();
});

//GDPR Banner code
if (!localStorage.bannerClosed) {
    $('.privacy-banner').css('display', 'inherit');
} else {
    $('.privacy-banner').css('display', 'none');
}
$('.privacy-banner button').click(function () {
    $('.privacy-banner').css('display', 'none');
    localStorage.bannerClosed = 'true';
});
$('.banner-accept').click(function () {
    $('.privacy-banner').css('display', 'none');
    localStorage.bannerClosed = 'true';
});
if (navigator.userAgent.match(/Opera|OPR\//)) {
    $('.privacy-banner').css('display', 'inherit');
}

//To make an anchor link land 100px above the link id
(function() {
    if (document.location.hash) {
        setTimeout(function() {
            window.scrollTo(window.scrollX, window.scrollY - 100);
        }, 10);
    }
})();

//To stop video still playing when the modal is closed for storytelling module
$(function () {
    $('.modal').on('hidden.bs.modal', function (e) {
        $iframe = $(this).find("iframe");
        $iframe.attr("src", $iframe.attr("src"));
    });
});

//To make register trade mark as super script
$("p,h1,h2,h3,h4,.teaser, #secondary_menu a, .breadcrumbs a").each(function(){
    $(this).html($(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;</sup>').
        replace(/&copy;/gi, '<sup>&copy;</sup>').replace(/©/gi, '<sup>&copy;</sup>'));
});


