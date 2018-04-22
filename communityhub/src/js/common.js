jQuery(document).ready(function($) {


    $(function() {
       $('.link-boxes div a').matchHeight();
        $('.related-content li a').matchHeight();
        $('.pane-term-list li a').matchHeight();
    });

$('img').filter(function(){
    return $(this).css('float') === 'left';
}).addClass('alignleft');

$('a, img').filter(function(){
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

  $.simpleWeather({
    location: 'Canberra, ACT',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#4").html(html);
    },
    error: function(error) {
      $("#4").html('<p>'+error+'</p>');
    }
  });


    $.simpleWeather({
    location: 'Albury, NSW',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#5").html(html);
    },
    error: function(error) {
      $("#5").html('<p>'+error+'</p>');
    }
  });

    $.simpleWeather({
    location: 'Hunter, NSW',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#6").html(html);
    },
    error: function(error) {
      $("#6").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    location: 'Sydney, NSW',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#7").html(html);
    },
    error: function(error) {
      $("#7").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
 location: 'Nowra, NSW',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#8").html(html);
    },
    error: function(error) {
      $("#8").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
 location: 'Wagga Wagga, NSW',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#9").html(html);
    },
    error: function(error) {
      $("#9").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
 location: 'Alice Springs, NT',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#23").html(html);
    },
    error: function(error) {
      $("#23").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
 location: 'Darwin, NT',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#24").html(html);
    },
    error: function(error) {
      $("#24").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
 location: 'Katherine, NT',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#25").html(html);
    },
    error: function(error) {
      $("#25").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
 location: 'Cairns, QLD',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#12").html(html);
    },
    error: function(error) {
      $("#12").html('<p>'+error+'</p>');
    }
  });
 $.simpleWeather({
 location: 'Ipswitch, QLD',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#13").html(html);
    },
    error: function(error) {
      $("#13").html('<p>'+error+'</p>');
    }
  });
  $.simpleWeather({
  location: 'Toowoomba, QLD',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#14").html(html);
    },
    error: function(error) {
      $("#14").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
  location: 'Townsville, QLD',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#15").html(html);
    },
    error: function(error) {
      $("#15").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
  location: 'Brisbane, QLD',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#11").html(html);
    },
    error: function(error) {
      $("#11").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
  location: 'Adelaide, SA',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#30").html(html);
    },
    error: function(error) {
      $("#30").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
  location: 'Hobart, TAS',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#29").html(html);
    },
    error: function(error) {
      $("#29").html('<p>'+error+'</p>');
    }
  });

 $.simpleWeather({
  location: 'Melbourne, VIC',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#19").html(html);
    },
    error: function(error) {
      $("#19").html('<p>'+error+'</p>');
    }
  });
  $.simpleWeather({
  location: 'Puckapunyal, VIC',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#36").html(html);
    },
    error: function(error) {
      $("#36").html('<p>'+error+'</p>');
    }
  });
  $.simpleWeather({
  location: 'Wodonga, VIC',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#20").html(html);
    },
    error: function(error) {
      $("#20").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
  location: 'Sale, VIC',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#21").html(html);
    },
    error: function(error) {
      $("#21").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
  location: 'Mornington Peninsula, VIC',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#28").html(html);
    },
    error: function(error) {
      $("#28").html('<p>'+error+'</p>');
    }
 });


 $.simpleWeather({
  location: 'Perth, WA',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#27").html(html);
    },
    error: function(error) {
      $("#27").html('<p>'+error+'</p>');
    }
  });


 $.simpleWeather({
  location: 'Pilbara, WA',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
  
      $("#41").html(html);
    },
    error: function(error) {
      $("#41").html('<p>'+error+'</p>');
    }
  });


});



