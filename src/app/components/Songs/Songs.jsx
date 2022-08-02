import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { getSongs } from "../../api/functions";
import Loader from "../Loader";
import Song from "../Song/Song";
import { useSelector, useDispatch } from "react-redux";
import { setSongs } from "../../reducers/songsSlice";

function Songs({ searchQuery }) {
	const [nextPage, setNextPage] = useState(null);

	const storedSongs = useSelector((state) => state.songs.songs);

	const [songs, setSongsState] = useState(storedSongs);

	const dispatch = useDispatch();
	const [error, setError] = useState(false);

	const [loading, setLoading] = useState(false);
	function fetchSongs() {
		setLoading(true);
		getSongs(searchQuery, nextPage, (data) => {
			if (data.error) {
				console.log(data.error);
				return setError(true);
			}
			setNextPage(data.next);
			setLoading(false);
			return dispatch(setSongs(data.data));
		});
	}

	useEffect(() => {
		fetchSongs();
	}, [searchQuery]);

	useEffect(() => {
		setSongsState(storedSongs);
	}, [storedSongs]);

	return (
		<section className="container">
			<h2>Songs</h2>
			<div className="results">
				{songs.map((song, index) => (
					<Song key={index} song={song} />
				))}
			</div>
			<div className="results">{loading && <Loader />}</div>
			{songs.length % 10 === 0 && (
				<button onClick={fetchSongs}>Get more</button>
			)}
		</section>
	);
}

export default Songs;
