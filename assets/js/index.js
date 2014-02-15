/**
 * Main JS file for Flatina behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";
    
    var flatinaApp = {
        flatina_fitvids:function(){
            $(".flatina-post iframe").fitVids();
        },
        flatina_parallax:function(){
            $('.parallax').scrolly({
                bgParallax: true
            });
        },
        flatina_reset:function(){
            $('.older-posts').text('Load more posts');
        },
        flatina_num:function(){
            if($('.page-number').length){
                var result=$('.page-number').html().match(/\d+/g);
                if(result!=null && result.length>1){
                    return result[1];
                }
                else{
                    return 1;
                }
            }
        },
        flatina_infinitescroll:function(){
            $('.flatina-post').infinitescroll({
                loading: {
                    finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                    msgText: " "
                },
                animate: true,
                navSelector: ".older-posts:last",
                nextSelector: "a.older-posts:last",
                itemSelector: ".flatina-post .row",
                behavior:'twitter',
                maxPage: flatinaApp.flatina_num()
            });
        },
        flatina_tinynav:function(){
            $("#nav").tinyNav();
        },
        flatina_init:function(){
            flatinaApp.flatina_fitvids();
            flatinaApp.flatina_parallax();
            flatinaApp.flatina_reset();
            flatinaApp.flatina_infinitescroll();
            flatinaApp.flatina_tinynav();
        }
    }
        
    $(document).ready(function(){
        flatinaApp.flatina_init();
    });

}(jQuery));