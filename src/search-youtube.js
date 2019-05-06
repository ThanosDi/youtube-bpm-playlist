const {
	map,
	propOr,
	path,
	pipe,
	head,
	uniq,
	filter,
	join,
	is
} = require('ramda');

const joinYoutubeIds = pipe(
	filter(is(String)),
	uniq,
	join(',')
);

const searchYoutubeByTitle = (title, youTube) => {
	return new Promise((resolve, reject) => {
		youTube.search(title, 1, {order: 'viewCount'}, (error, result) => {
			if (error) {
				return reject(error);
			}

			const id = pipe(
				propOr([], 'items'),
				map(path(['id', 'videoId'])),
				head
			)(result);

			return resolve(id);
		});
	});
};

module.exports = {searchYoutubeByTitle, joinYoutubeIds};
