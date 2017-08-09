const request = require('request');

const getWeather = (latitude, longitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/20ba82b8a605d5f301ec26fa65adbe2b/${latitude},${longitude}`,
		json: true
	}, (error, response, body) => { // callback
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				currentTemperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback(`Unable to fetch weather.`);
		}
	});
};

module.exports = {
	getWeather
};
