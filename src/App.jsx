import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app/assets/css/main.css";
import { useSelector, useDispatch } from "react-redux";
import { setSongs } from "./app/reducers/songsSlice";
import { setArtists } from "./app/reducers/artistsSlice";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [search, setSearch] = useState(false);

	const handleSearchQuery = (e) => {
		setSearchQuery(e.target.value);
	};

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		setSearch(true);
		navigate(`/search/${searchQuery}`);
	};

	const store = useSelector((state) => state);

	useEffect(() => {
		console.log(store);
	}, [store]);

	//clear store when searchQuery is changes
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setSongs([]));
		dispatch(setArtists([]));
	}, [searchQuery]);

	return (
		<div className="container home">
			<h1>Track Findr.</h1>
			<p>Find the best tracks for your next party.</p>
			<div className="search">
				<form className="search-box">
					<input
						type="text"
						className="search-input"
						placeholder="Search for a track, artist, album"
						onChange={handleSearchQuery}
						value={searchQuery}
					/>
					<button onClick={handleSubmit}>Search</button>
				</form>
			</div>
		</div>
	);
}

export default App;
