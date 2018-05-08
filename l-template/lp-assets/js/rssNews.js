/*
* FeedEk jQuery RSS/ATOM Feed Plugin v3.0 with YQL API
* http://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL http://www.enginkizil.com
*/

(function ($) {


    $.fn.FeedEk = function (opt) {
        var def = $.extend({
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            DescCharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang: "en",
            imgContent: true
        }, opt);

        var id = $(this).attr("id"), i, s = "", dt;
        // $("#" + id).empty();
        if (def.FeedUrl == undefined) return;
        // $("#" + id).append('<img src="loader.gif" />');

        var YQLstr = 'SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="' + def.FeedUrl + '" LIMIT ' + def.MaxCount;

        // getArticles();
        // function getArticles() {
        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?",
            dataType: "json",
            success: function (data) {

                // $("#" + id).empty();
                if (!(data.query.results.rss instanceof Array)) {
                    data.query.results.rss = [data.query.results.rss];
                }
                $.each(data.query.results.rss, function (e, itm) {

                    let imgContent = itm.channel.item.description;

                    setTimeout(() => console.log($.parseHTML(imgContent)), 0);
                    var parseImg = $.parseHTML(imgContent);
                    var imgSrc = $(parseImg).attr('src');
                    console.log(imgSrc);

                    // if( !imgSrc ){
                    //     getArticles();
                    // }
                    s += '<li>   <a href="' + itm.channel.item.link + '" target="' + def.TitleLinkTarget + '" ><img src=' + imgSrc + ' ></a>   <div class="itemTitle"> <a href="' + itm.channel.item.link + '" target="' + def.TitleLinkTarget + '" >' + itm.channel.item.title + '</a></div>';
                    if (def.ShowPubDate) {
                        dt = new Date(itm.channel.item.pubDate);
                        s += '<div class="itemDate">';

                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.lang(def.DateFormatLang);
                                s += moment(dt).format(def.DateFormat);
                            }
                            catch (e) {
                                s += dt.toLocaleDateString();
                            }
                        }
                        else {
                            s += dt.toLocaleDateString();
                        }
                        s += '</div>';


                    }
                    if (def.ShowDesc) {


                        s += '<div class="itemContent">';
                        if (def.DescCharacterLimit > 0 && itm.channel.item.description.length > def.DescCharacterLimit) {
                            s += itm.channel.item.description.substring(0, def.DescCharacterLimit) + '...';

                        }
                        else {
                            s += itm.channel.item.description;
                        }
                        s += '</div>';


                    }

                });
                $("#" + id).append('<ul class="feedEkList">' + s + '</ul>');
                toSlick();
            }
        });
    }


    // };
})(jQuery);


function toSlick() {
    $(".feedEkList").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });

    // $(".feedEkList").slick({
    //     dots: false,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     speed: 600,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //
    //             }
    //         }
    //     ]
    // });

}




