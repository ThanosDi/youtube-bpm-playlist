const rp = require('request-promise');
const $ = require('cheerio');
const {pipe, uniq} = require('ramda');

const getSongs = async (bpm = 110, genre = 731) => {
	const titles = [];
	const artists = [];
	const url = `https://www.bpmdatabase.com/music/search/?artist=&title=&bpm=${bpm}&genre=${genre}`;
	const html = await rp(url);

	$('#track-table tbody .artist a', html).each(function() {
		artists.push($(this).text());
	});

	$('#track-table tbody .title', html).each(function() {
		titles.push($(this).text());
	});

	return pipe(
		artists => artists.map((artist, i) => `${artist} - ${titles[i]}`),
		uniq
	)(artists);
};

module.exports = getSongs;
