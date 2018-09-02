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
       /*register page*/ 

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

//end register page
/*dashboard-player page*/
        $(".edit-profie").click(function(){
             var docHeight = $(document).height();
            $("body").append("<div id='overlay'></div>");
            $(".edit-player-profile").animate({
                width: "toggle"
            });
             $('.close').on("click", function () {
            $('#overlay,.edit-player-profile').fadeOut('3000',function(){//use 3000 in place of 300m
                $('#overlay').remove();
            });    
            return false;
            }); 
               $("#overlay")
                .height(docHeight)
                .css({
                    'opacity' : 0.7,
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'background-color': 'white',
                    'width': '100%',
                    'z-index': 5000
                });
          
        });

      var divHeight = $('body').height(); 
      $('.edit-player-profile').css('min-height', divHeight+'px');

   /*Player profile page*/
        $(".add-btn ").click(function() {
                $('.remove-btn').show();
            $('.add-btn').hide();
            });
            $(".remove-btn ").click(function() {
                $('.add-btn').show();
            $('.remove-btn').hide();
            });
    });
    document.getElementById("my-file").onchange = function() {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // e.target.result is a base64-encoded url that contains the image data
        document.getElementById('profile-pic').setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    }
    }

