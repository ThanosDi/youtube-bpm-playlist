#!/usr/bin/env node
const figlet = require('figlet');
const params = require('commander');
const {map, pipe, pick} = require('ramda');
const YouTube = require('youtube-node');
const request = require('request');

const getBpmSongs = require('./get-bpm-songs');
const {searchYoutubeByTitle, joinYoutubeIds} = require('./search-youtube');

const init = async ({bpm, genre, apikey}) => {
	const youTube = new YouTube();
	youTube.setKey(apikey || process.env.YOUTUBE_DATA_API_3);

	try {
		const titles = await getBpmSongs(bpm, genre);

		const promises = map(title => searchYoutubeByTitle(title, youTube), titles);

		const ids = await Promise.all(promises);
		const url = `https://www.youtube.com/watch_videos?video_ids=${joinYoutubeIds(
			ids
		)}`;
		request({url, followRedirect: false}, (err, {headers}) => {
			console.log(headers.location);
		});
	} catch (error) {
		console.log(error);
	}
};

pipe(
	() => {
		const banner = figlet.textSync('YouTube BPM playlist');
		console.log(banner);
	},
	() => {
		params
			.version('0.1.0')
			.option('-b, --bpm [bpm]', `Add the desired bpm`, 110)
			.option(
				'-g, --genre [genre]',
				`Enter the genre code number. Default is Electronic`,
				731
			)
			.option('-k, --apikey [apikey]', `Enter a valid Youtube data api key.`);

		params.parse(process.argv);
		return params;
	},
	pick(['bpm', 'genre', 'apikey']),
	init
)();
