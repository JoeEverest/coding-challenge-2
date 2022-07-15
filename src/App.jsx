import React, { useState } from "react";
import "./app/assets/css/main.css";
import { getArtistInfo } from "./app/api/functions";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchQuery = (e) => {
		setSearchQuery(e.target.value);
	};

	const [nextPage, setNextPage] = useState(null);

	const [artistInfo, setArtistInfo] = useState();

	// const {data} = artistInfo;

	const handleSubmit = (e) => {
		e.preventDefault();
		getArtistInfo(searchQuery, nextPage, (data) => {
			console.log(data);
		});
	}

	return (
		<div className="container">
			<h1>Track Findr.</h1>
			<p>Find the best tracks for your next party.</p>
			<div className="search">
				<form className="search-box">
					<input
						type="text"
						className="search-input"
						placeholder="Search for a track, artist, album"
						onChange={handleSearchQuery}
					/>
					<button onClick={handleSubmit}>Search</button>
				</form>
			</div>
			<div className="results">
				{/* {data.map((artist) => (
					<div
						className="artist-results shadow-1"
						onClick={() => {
							console.log(artist.tracklist);
						}}
					>
						<img src={artist.picture_medium} alt={artist.name} />
						<h3>{artist.name}</h3>
					</div>
				))} */}
			</div>
		</div>
	);
}

export default App;
