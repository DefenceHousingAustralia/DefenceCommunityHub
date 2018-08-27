jQuery(document).ready(function($) {


    $(function() {
        $('.link-boxes div a').matchHeight();
        $('.related-content li a').matchHeight();
        $('.pane-term-list li a').matchHeight();
    });

    $('img').filter(function() {
        return $(this).css('float') === 'left';
    }).addClass('alignleft');

    $('a, img').filter(function() {
        return $(this).css('float') === 'right';
    }).addClass('alignright');


    var $menu = $('#mobile-nav');
    $menu.mmenu({
        slidingSubmenus: true,
        toggleText: '<span class="sr-only">toggle submenu</span>',
        extensions: ["effect-menu-slide", "effect-listitems-slide", "theme-dark", "pagedim-black"],
        dragOpen: true,

        navbar: {
            add: false
        },

        offCanvas: {
            pageSelector: "#page"
        },

        setSelected: {
            hover: true,
            parent: true
        },
        searchfield: {
            resultsPanel: true,
            clear: true
        }


    });

    var $icon = $("#mobile-nav-btn");
    var API = $menu.data("mmenu");

    $icon.on("click", function() {
        API.open();
    });

    API.bind("opened", function() {
        setTimeout(function() {
            $icon.addClass("is-active");
        }, 100);
    });
    API.bind("closed", function() {
        setTimeout(function() {
            $icon.removeClass("is-active");
        }, 100);
    });




    var canberra = $("#4").flatWeatherPlugin({

        location: "Canberra, ACT", //city and region *required 
        country: "AUSTRALIA", //country *required 
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var albury = $("#5").flatWeatherPlugin({

        location: "Albury, NSW", //city and region *required 
        country: "AUSTRALIA", //country *required 
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var hunter = $("#6").flatWeatherPlugin({

        location: "Hunter, NSW", //city and region *required 
        country: "AUSTRALIA", //country *required 
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });


    var sydney = $("#7").flatWeatherPlugin({

        location: "Sydney, NSW", //city and region *required 
        country: "AUSTRALIA", //country *required 
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });


    var nowra = $("#8").flatWeatherPlugin({

        location: "Nowra, NSW", //city and region *required 
        country: "AUSTRALIA", //country *required 
        api: "yahoo",

        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Wagga = $("#9").flatWeatherPlugin({

        location: "Wagga Wagga, NSW", //city and region *required 
        country: "AUSTRALIA", //country *required 
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });




    var Brisbane = $("#11").flatWeatherPlugin({

        location: "Brisbane, QLD",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });




    var Cairns = $("#12").flatWeatherPlugin({

        location: "Cairns, QLD",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });




    var Ipswitch = $("#13").flatWeatherPlugin({

        location: "Ipswitch, QLD",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Toowoomba = $("#14").flatWeatherPlugin({

        location: "Toowoomba, QLD",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Townsville = $("#15").flatWeatherPlugin({

        location: "Townsville, QLD",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });








    var Melbourne = $("#19").flatWeatherPlugin({

        location: "Melbourne, VIC",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });





    var Wodonga = $("#20").flatWeatherPlugin({

        location: "Wodonga, VIC",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Sale = $("#21").flatWeatherPlugin({

        location: "Sale, VIC",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });





    var Alice = $("#23").flatWeatherPlugin({

        location: "Alice Springs, NT", //city and region *required 
        country: "AUSTRALIA", //country *required 
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });




    var Darwin = $("#24").flatWeatherPlugin({

        location: "Darwin, NT",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Katherine = $("#25").flatWeatherPlugin({

        location: "Katherine, NT",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });








    var Perth = $("#27").flatWeatherPlugin({

        location: "Perth, WA",
        country: "AUSTRALIA",
        api: "yahoo",

        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Mornington = $("#28").flatWeatherPlugin({

        location: "Mornington Peninsula, VIC",
        country: "AUSTRALIA",
        api: "yahoo",

        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });





    var Hobart = $("#29").flatWeatherPlugin({

        location: "Hobart, TAS",
        country: "AUSTRALIA",
        api: "yahoo",

        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Adelaide = $("#30").flatWeatherPlugin({

        location: "Adelaide, SA",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });



    var Puckapunyal = $("#36").flatWeatherPlugin({

        location: "Puckapunyal, VIC",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });

    var Pilbara = $("#41").flatWeatherPlugin({

        location: "Pilbara, WA",
        country: "AUSTRALIA",
        api: "yahoo",
        view: "simple",
        lang: "en",
        timeformat: "12",
        displayCityNameOnly: false,
        forecast: 0,
        render: true,
        loadingAnimation: true,
        units: "metric"

    });




});