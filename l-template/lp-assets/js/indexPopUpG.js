// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("bio");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


$(".bioOpenBtn").each(function (index) {
    $(this).on("click", function () {

        var headShotSrc = $(".teamUser .imageWrap img:eq(" + index + ")").attr('src');
        var nameSurname = $(".teamUser .nameSurname:eq(" + index + ")").text();

        var position = $(".teamUser .position:eq(" + index + ")").text();
        var aHref = $(".teamUser .imageWrap a:eq(" + index + ")").attr('href');
        var alt = $(".teamUser .imageWrap img:eq(" + index + ")").attr('alt');


        $(".nameSurnameModal").text(nameSurname);
        $(".positionModal").text(position);
        $(".modalImg img").attr("src", headShotSrc);
        $(".linkedInModal").attr("href", aHref);
        $(".modalImg img").attr("alt", alt);


        var myThis = $(this);
        $.ajax({
            type: "GET",
            url: "dataG.json",
            success: function (result) {
                for (var i in result) {
                    var checkName = result[i].name;
                    if ($(myThis).attr("data-bio") == checkName) {
                        console.log(checkName);
                        var bioDesc = result[i].bio;
                        $(".modalTeam .bioModal").text(bioDesc);
                    }

                }
            },

            error: function (result) {
                alert("We can`t load the info :( Sorry ")
            }


        });


        $(".modal").css({"display": "block"});
    });
});


$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dataG.json",
        success: function (result) {
            console.log(result);
            var bioOpenBtn = $(".bioOpenBtn");
            for (var i = 0; i < result.length; i ++) {

                for (var j = 0; j < bioOpenBtn.length; j++) {
                    if ($(".bioOpenBtn:eq(" + j + ")").attr("data-bio") == result[i].name) {
                        var name = result[i].name;
                        var position = result[i].position;
                        var src = result[i].src;
                        var link = result[i].link;
                        var alt = result[i].alt;
                        // var bio = result[i].bio;
                        $(".teamUser .nameSurname:eq(" + j +")").text(name);
                        $(".teamUser .position:eq(" + j + ")").text(position);
                        $(".teamUser .imageWrap img:eq(" + j + ")").attr("src", src);
                        $(".teamUser .imageWrap a:eq(" + j + ")").attr("href", link);
                        $(".teamUser .imageWrap img:eq(" + j + ")").attr("alt", alt);

                    }
                }

            }
        },

        error: function (result) {
            alert("We can`t load the info :( Sorry ")
        }


    });

});