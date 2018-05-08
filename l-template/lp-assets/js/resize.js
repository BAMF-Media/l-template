$(window).on('resize', function () {

    var width = $(window).width();
    if (width < 1201 - 17) {

        $(".closeBtnMenu").css({"display": "block"});
        $(".openNav").css({"display": "block"});
        $(".navMenu").css({"width": "0"});
    }
    else {
        $(".closeBtnMenu").css({"display": ""});
        $(".openNav").css({"display": ""});
        $(".navMenu").css({"width": ""});

    }


});
