import Axios from "axios";

export function getArtistInfo(artist, next = null, callback) {
	const config = {
		method: "get",
		url: next
			? next
			: "https://api.deezer.com/search/artist?index=0&limit=10&q=" + artist,
		headers: {},
	};
	console.log(config);

	Axios(config)
		.then(function (response) {
			callback(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
}
