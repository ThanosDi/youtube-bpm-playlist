const getSongs = require('./get-bpm-songs');
const resolvedHtml = require('./fixtures/bmp.html');
jest.mock('request-promise');

const rp = require('request-promise');


describe('getBpmSongs', () => {

	rp.mockResolvedValue(resolvedHtml);
	const titles =  [
		'Pop Goes The Weasel',
		'Notorious',
		'Notorious',
		'Sick',
		'Sweet Emotion',
		'Don\'t Wanna Fight',
		'Unstable',
		'Karate',
		'Doesn\'t Remind Me',
		'I Am Alien',
		'THISKIDSNOTALRIGHT',
		'THISKIDSNOTALRIGHT',
		'Woman Woman',
		'Worlds Are Made Of Paper',
		'Heaven Sent',
		'White Trash Millionaire',
		'Faith Healer',
		'Josie',
		'Lonesome Street',
		'Top Of The World',
		'America',
		'Kings & Queens',
		'Horse & Carriage',
		'Good Hurt',
		'Pearl' ];

	const artists = [
		'3rd Bass',
		'Adelitas Way',
		'Adelitas Way',
		'Adelitas Way',
		'Aerosmith',
		'Alabama Shakes',
		'Anberlin',
		'Anne-Marie',
		'Audioslave',
		'AV Super Sunshine',
		'Awolnation',
		'Awolnation',
		'Awolnation',
		'Ben Taylor',
		'Best Coast',
		'Black Stone Cherry',
		'Blaqk Audio',
		'Blink-182',
		'Blur',
		'Brandy ft. Ma$e',
		'Brian Mackey',
		'Brooke Fraser',
		'Cam\'ron ft. Mase',
		'Chappell Roan',
		'Chapterhouse' ];

	test('getBpmSongs', async () => {
		const songs = await getSongs();


		console.log(songs);
	});
	// test.only('combine artist with title to get song', async () => {
	// 	const songs = artists.map((artist, i) => `${artist} - ${titles[i]}`);
	//
	// 	console.log(songs);
	// });
})