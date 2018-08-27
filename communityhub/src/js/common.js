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


});