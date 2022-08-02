import { getArtistInfo, getSongs } from "./../api/functions";

//text artist
test("getArtistInfo", () => {
	const artist = "Eminem";
	const next = null;
	const callback = jest.fn();
	getArtistInfo(artist, next, callback);
	expect(callback).toHaveBeenCalled();
});

//text song
test("getSongs", () => {
	const query = "Eminem";
	const next = null;
	const callback = jest.fn();
	getSongs(query, next, callback);
	expect(callback).toHaveBeenCalled();
});

//text artist and song
test("getArtistInfo and getSongs", () => {
	const query = "Eminem";
	const next = null;
	const callback = jest.fn();
	getArtistInfo(query, next, callback);
	getSongs(query, next, callback);
	expect(callback).toHaveBeenCalled();
});

//text artist and song and next
test("getArtistInfo and getSongs and next", () => {
	const query = "Eminem";
	const next = "https://api.deezer.com/search/track?q=eminem&limit=10&index=10";
	const callback = jest.fn();
	getArtistInfo(query, next, callback);
	getSongs(query, next, callback);
	expect(callback).toHaveBeenCalled();
});

//text artist and song and next and callback
test("getArtistInfo and getSongs and next and callback", () => {
	const query = "Eminem";
	const next = "https://api.deezer.com/search/track?q=eminem&limit=10&index=10";
	const callback = jest.fn();
	getArtistInfo(query, next, callback);
	getSongs(query, next, callback);
	expect(callback).toHaveBeenCalled();
});

//text artist and song and next and callback and errortest
test("getArtistInfo and getSongs and next and callback and errortest", () => {
	const query = "Eminem";
	const next = "https://api.deezer.com/search/track?q=eminem&limit=10&index=10";
	const callback = jest.fn();
	getArtistInfo(query, next, callback);
	getSongs(query, next, callback);
	expect(callback).toHaveBeenCalled();
});
