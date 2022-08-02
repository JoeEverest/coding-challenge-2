import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { getSongs } from "../../api/functions";
import Loader from "../Loader";
import Song from "../Song/Song";

function Songs({ searchQuery }) {
	const [nextPage, setNextPage] = useState(null);

	const [songs, setSongs] = useState([]);
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
			return setSongs((prevSongs) => [...prevSongs, ...data.data]);
		});
	}

	useEffect(() => {
		fetchSongs();
	}, [searchQuery]);

	useEffect(() => {
		console.log(songs);
	}, [songs]);

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
