$(function () {


    var currentScrooll = getCurrentScroll();
    // if (currentScrooll >= 150) {
    //     $(".headerFluid.shrink").css({"background": "red"});
    //     $("headerWrap.shrink").css({"background": "red"});
    //     // alert("sad")
    // }


    var windowWidth = $(window).width();
    if (windowWidth < 768 - 17) {

        $(window).scroll(function () {
            var currentWindow = $(window).width();
            if (currentWindow < 768 - 17) {
                mobileHeaderSmooth();
                getCurrentScroll();
            }
        });
    }
    else {
        $(window).scroll(function () {
            var currentWindow = $(window).width();
            if (currentWindow >= 768 - 17) {
                desktopHeaderSmooth();
                getCurrentScroll();
            }
        });

    }
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 768 - 17) {

            $(window).scroll(function () {
                var currentWindow = $(window).width();
                if (currentWindow < 768 - 17) {
                    mobileHeaderSmooth();
                    getCurrentScroll();
                }
            });

            if ($(".burger").hasClass("burger6-open")) {
                $(".navMenu").css({"display": "block"});
            }


            if ($(".ulNav li a").hasClass("headerItems")) {
                $('.ulNav li a').removeClass('headerItems');
            }

        }
        if(windowWidth < 992){
            $(".backToTop").css({"display":"none"});

        }

        else {

            $(window).scroll(function () {
                var currentWindow = $(window).width();
                if (currentWindow >= 768 - 17) {
                    desktopHeaderSmooth();
                    getCurrentScroll();

                }
            });

            $(".navMenu").css({"display": ""});


        }
    });


    // toggle menu start
    // var burgerContainer = document.getElementsByClassName("burger-container")[0];
    // burgerContainer.addEventListener("click", toggleMobileMenu)

    // function toggleMobileMenu() {
    //     $(".navMenu").slideToggle("slow");
    // }

    // toggle menu end

    //animated mobile toggle button start
    // var burgers = document.querySelectorAll(".burger-container");
    // toggle.apply(burgers[0]);

    // function toggle() {
    //     var menu = this.children[0];
    //     this.addEventListener('click', function () {
    //         menu.classList.toggle(menu.id + "-open");
    //     });
    // }

    //animated mobile toggle button end

});

function mobileHeaderSmooth() {
    var shrinkHeader = 15;
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
        $('.headerFluid, .headerWrap').addClass('shrink');
    }
    else {
        $('.headerFluid, .headerWrap').removeClass('shrink');
    }
}


function desktopHeaderSmooth() {
    var shrinkHeader = 20;

    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
        $('.headerFluid, .headerWrap').addClass('shrink');
        $('.logoImg').addClass('logoChange');
        $('.ulNav li a').addClass('headerItems');
    }
    else {
        $('.headerFluid, .headerWrap').removeClass('shrink');
        $('.logoImg').removeClass('logoChange');
        $('.ulNav li a').removeClass('headerItems');
    }
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}


// for get access button start
function hideAccessButton() {
    var curScroll = getCurrentScroll();
    if (curScroll >= $(".throughFluid").height() + $(".headerFluid").height() + 30) {
        $(".getAccessHeaderBtn").addClass("vis");
        if($(window).width() > 992){
            $(".backToTop").fadeIn("slow");
        }

    } else {
        $(".vis").removeClass("vis");
        $(".backToTop").fadeOut("slow");
    }


    if($(window).width() < 992){

    }
}
$(".backToTop").click(function () {

    $('html').animate({
        scrollTop : 0
    },'slow');
});

$(document).ready(function () {
    hideAccessButton()

})
$(document).scroll(function () {
    hideAccessButton();
})
// for get access button end

//FAQs start
$("#toggleFaqsBtn").click(function () {
    if ($(this).hasClass("readMoreFaqs")) {
        $(".faqsHiddenDesktop").slideDown("slow");
        $(this).html("Less");
        $(".readMoreFaqs").addClass("hideMoreFaqs");
        $(".readMoreFaqs").removeClass("readMoreFaqs");
    }
    else if (($(this).hasClass("hideMoreFaqs"))) {
        $(".faqsHiddenDesktop").slideUp("slow");
        $(this).html("Read More");
        $(".hideMoreFaqs").addClass("readMoreFaqs");
        $(".hideMoreFaqs").removeClass("hideMoreFaqs");

    }
});

//FAQs end
