import React from "react";
import { useLocation } from "react-router-dom";
import Songs from "../components/Songs/";
import Artists from "./../components/Artist/index";

function SearchResults() {
	//get the query from the url

	const { pathname } = useLocation();
	const query = decodeURIComponent(pathname.split("/")[2]);

	console.log(query);

	return (
		<div className="container">
			<h1>Search Results: {query}</h1>
			<Artists searchQuery={query} />
			<Songs searchQuery={query} />
		</div>
	);
}

export default SearchResults;
