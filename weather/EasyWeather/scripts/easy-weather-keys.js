/*------------------------------------------------------------------------
	- EasyWeather v1.3.2 by Max Guglielmi
	- http://mguglielmi.free.fr/scripts/easyweather
	- License required for use
--------------------------------------------------------------------------
INSTRUCTIONS:
1. Replace the 'YOUR KEY GOES HERE' text with the API key indicated by
the weather service at sign-up
2. Remove any unused providers and make sure last item does not end with
a comma ','

WEATHER SERVICES:
wwo = World Weather Online - http://developer.worldweatheronline.com/member/register
owm = Open Weather Map - http://openweathermap.org/login
wug = Wunderground.com - https://www.wunderground.com/members/signup.asp
ham = HAMweather - http://www.hamweather.com/account/signup/
fio = Forecast - https://developer.forecast.io/register

GEOIP SERVICES:
ipinf = ipinfo.io - https://ipinfo.io/

Note: Sign-up URLs may change
------------------------------------------------------------------------*/
var EasyWeather = {
	Keys: {
		wwo: { key: function() { return 'YOUR KEY GOES HERE'; } },
		owm: { key: function() { return 'YOUR KEY GOES HERE'; } },
		wug: { key: function() { return 'YOUR KEY GOES HERE'; } },
		ham: { key: function() { return 'YOUR KEY GOES HERE'; }, secret_key: function() { return 'YOUR KEY GOES HERE'; } },
		fio: { key: function() { return '5ba93a47e68b9a7f564aca6ee54463b8'; } },
		ipinf: { key: function() { return 'YOUR KEY GOES HERE'; } }
	}
};