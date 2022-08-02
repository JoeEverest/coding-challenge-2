import React, { useEffect, useState } from "react";
import { getArtistInfo } from "../../api/functions";
import Loader from "../Loader";

function Artists({ searchQuery }) {
	const [nextPage, setNextPage] = useState(null);

	const [artistInfo, setArtistInfo] = useState([]);
	const [error, setError] = useState(false);

	const [loading, setLoading] = useState(false);

	function fetchArtistInfo() {
		setLoading(true);
		getArtistInfo(searchQuery, nextPage, (data) => {
			if (data.error) {
				console.log(data.error);
				return setError(true);
			}
			setNextPage(data.next);
			setLoading(false);
			return setArtistInfo((prevArtistInfo) => [
				...prevArtistInfo,
				...data.data,
			]);
		});
	}

	useEffect(() => {
		fetchArtistInfo();
	}, []);

	return (
		<section className="container">
			<h2>Artists</h2>
			<div className="results">
				{artistInfo.map((artist, index) => (
					<div
						key={index}
						className="artist-results"
						onClick={() => {
							console.log({
								name: artist.name,
								tracklist: artist.tracklist,
								link: artist.link,
								image: artist.picture_medium,
							});
						}}
					>
						<img src={artist.picture_medium} alt={artist.name} />
						<h3>{artist.name.slice(0, 20)}</h3>
					</div>
				))}
			</div>
			<div className="results">{loading && <Loader />}</div>

			{artistInfo.length % 10 === 0 && (
				<button onClick={fetchArtistInfo}>Get more</button>
			)}
		</section>
	);
}

export default Artists;
