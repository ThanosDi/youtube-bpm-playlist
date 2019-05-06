const rp = require('request-promise');
const resolvedHtml = require('../fixtures/bmp.html');
const getSongs = require('./get-bpm-songs');

jest.mock('request-promise');

describe('getBpmSongs', () => {
	rp.mockResolvedValue(resolvedHtml);
	test('getBpmSongs', async () => {
		const songs = await getSongs();

		expect(songs).toEqual([
			'3rd Bass - Pop Goes The Weasel',
			'Adelitas Way - Notorious',
			'Adelitas Way - Sick',
			'Aerosmith - Sweet Emotion',
			"Alabama Shakes - Don't Wanna Fight",
			'Anberlin - Unstable',
			'Anne-Marie - Karate',
			"Audioslave - Doesn't Remind Me",
			'AV Super Sunshine - I Am Alien',
			'Awolnation - THISKIDSNOTALRIGHT',
			'Awolnation - Woman Woman',
			'Ben Taylor - Worlds Are Made Of Paper',
			'Best Coast - Heaven Sent',
			'Black Stone Cherry - White Trash Millionaire',
			'Blaqk Audio - Faith Healer',
			'Blink-182 - Josie',
			'Blur - Lonesome Street',
			'Brandy ft. Ma$e - Top Of The World',
			'Brian Mackey - America',
			'Brooke Fraser - Kings & Queens',
			"Cam'ron ft. Mase - Horse & Carriage",
			'Chappell Roan - Good Hurt',
			'Chapterhouse - Pearl'
		]);
	});
	// Test.only('combine artist with title to get song', async () => {
	// 	const songs = artists.map((artist, i) => `${artist} - ${titles[i]}`);
	//
	// 	console.log(songs);
	// });
});
