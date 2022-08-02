import Axios from "axios";
import { API_BASE_URL, API_KEY, CORS_URL } from "./../utils/constants";

export function getArtistInfo(artist, next = null, callback) {
	const url = next
		? CORS_URL + next
		: API_BASE_URL + "/search/artist?index=0&limit=10&q=" + artist;
	const config = {
		method: "get",
		url,
		headers: {},
	};

	Axios.request(config)
		.then(function (response) {
			callback(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
}

export function getArtistTracks() {}

export function getSongs(query, next = null, callback) {
	const url = next
		? CORS_URL + next
		: API_BASE_URL + "/search/track?index=0&limit=10&q=" + query;
	const config = {
		method: "get",
		url,
		headers: {},
	};

	Axios.request(config)
		.then(function (response) {
			callback(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
}
