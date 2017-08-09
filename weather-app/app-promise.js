const yargs = require('yargs');

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


// 20ba82b8a605d5f301ec26fa65adbe2b
// https://api.darksky.net/forecast/20ba82b8a605d5f301ec26fa65adbe2b/-30.015062,-51.20963500000001
