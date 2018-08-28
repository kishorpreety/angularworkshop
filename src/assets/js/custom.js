$(function() {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
      $(".register-choice-item").click(function() { 
        if($(this).hasClass("selected") == false) {
            $(".register-choice-item").removeClass("selected");
            $(this).addClass("selected");
        } else {
            $(".register-choice-item").removeClass("selected");
        }
    });

   $('.player-item').click(function(){
        // $('.player-signup').css('display','block');
         $('.player-signup').delay(700).slideDown();
        $('.register-choice-item').delay(700).slideUp();
        $('.back').delay(800).fadeIn();
    });

   $('.team-item').click(function(){
         $('.team-signup').delay(700).slideDown();
        $('.register-choice-item').delay(700).slideUp();
          $('.back').delay(800).fadeIn();
    });
    
     $('.company-item').click(function(){
         $('.company-signup').delay(700).slideDown();
        $('.register-choice-item').delay(700).slideUp();
        $('.back').delay(800).fadeIn();
        //  $('.back').css('display','block');
    });
     $('.back').click(function(){
         $('.panel-form').delay(700).slideUp();
        $('.register-choice-item').delay(700).slideDown();
        $('.back').delay(800).fadeOut();
    });
        $(".edit-profie").click(function(){
            $(".edit-player-profile").animate({
                width: "toggle"
            });
        });

    });
