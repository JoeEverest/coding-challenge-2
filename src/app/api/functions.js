import Axios from "axios";
import { API_BASE_URL, API_KEY } from "./../utils/constants";

export function getArtistInfo(artist, next = null, callback) {
	const options = {
		method: "GET",
		url: API_BASE_URL + "search/artist",
		params: { q: artist },
		headers: {
			"X-RapidAPI-Key": API_KEY,
			"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
		},
	};

	Axios.request(options)
		.then(function (response) {
			callback(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
}
