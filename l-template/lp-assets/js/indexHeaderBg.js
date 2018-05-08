var currentScrooll = getCurrentScroll();
if (currentScrooll >= 150) {
    $(".headerFluid.shrink").css({"background": "red"});
    $("headerWrap.shrink").css({"background": "red"});
    // alert("sad")
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

