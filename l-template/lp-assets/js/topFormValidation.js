$(document).ready(function () {
    var valid = false;
    $('#email').keyup(function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,10}$/i;
            if (pattern.test($(this).val())) {
                $(this).css({'border': '1px solid #569b44'});
                valid = true;
                $(".notValidEmail").slideUp("fast");
            } else {
                $(this).css({'border': '1px solid #ff0000'});
                valid = false;
                $(".notValidEmail").show("fast");
            }
        } else {
            $(this).css({'border': '1px solid #ff0000'});
            valid = false;
            $(".notValidEmail").slideDown("fast");
        }
    });

    $(".submitBtn").click(function (event) {
        if (valid) {

            $("#email").css({'border': '1px solid #569b44'});
            $(".notValidEmail").slideUp("fast");

            $(".send_email").submit();
            setTimeout(function () {
                window.location.href = "https://lfe.com/thankyou.html";
            }, 500);

            return valid;
        }
        else {
            $("#email").css({'border': '1px solid #ff0000'});
            $(".notValidEmail").slideDown("fast");
            $("#email").focus();


            return false;
        }
    });

});