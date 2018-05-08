        $(document).ready(function () {
            $(".partnerSlider").slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 600,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
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
            // $(".center").slick({
            //     dots: false,
            //     infinite: true,
            //     centerMode: true,
            //     slidesToShow: 3,
            //     slidesToScroll: 3
            // });
            // $(".variable").slick({
            //     dots: false,
            //     infinite: true,
            //     variableWidth: true
            // });
            // $(".lazy").slick({
            //     lazyLoad: 'ondemand', // ondemand progressive anticipated
            //     infinite: true
            // });


        });