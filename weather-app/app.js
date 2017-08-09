const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));

		weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(JSON.stringify(results, undefined, 2));
			}
		});
	}
});

// 20ba82b8a605d5f301ec26fa65adbe2b
// https://api.darksky.net/forecast/20ba82b8a605d5f301ec26fa65adbe2b/-30.015062,-51.20963500000001
