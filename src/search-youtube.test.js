const {joinYoutubeIds} = require('./search-youtube');

const youtubeIds = [
	'QYp28tEAVvs',
	'SyoeaNxujjw',
	'SyoeaNxujjw',
	'DBdSkG6GkOg',
	undefined,
	'6sjKigxkRog'
];

describe('search Youtube', () => {
	test('filter youtube ids', () => {
		const ids = joinYoutubeIds(youtubeIds);
		expect(ids).toBe('QYp28tEAVvs,SyoeaNxujjw,DBdSkG6GkOg,6sjKigxkRog');
	});
});
