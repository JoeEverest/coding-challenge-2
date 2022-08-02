import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app/assets/css/main.css";

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
					/>
					<button onClick={handleSubmit}>Search</button>
				</form>
			</div>
		</div>
	);
}

export default App;
