console.log('\'Allo \'Allo!');

$(document).ready(function() {


    //   	$('#first-link').hover(
    //     function(){
    //         $('#inside-menu').css('display','block');
    //     },
    //     function(){
    //         $('#inside-menu').css('display','none');
    //     }
    // );
    $('#first-link').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('#inside-menu-menu').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('#inside-menu-menu-second').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('#inside-menu-menu-three').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('#menu-inside-menu').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('#inside-four').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('#inside-five').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('#inside-six').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        $('.popup').magnificPopup(),


        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });



});
