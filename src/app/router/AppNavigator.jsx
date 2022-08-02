import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../../App";
import SearchResults from "../screens/SearchResults";

function AppNavigator() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/search/:query" element={<SearchResults />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppNavigator;
