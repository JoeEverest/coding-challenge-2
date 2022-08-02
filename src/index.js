import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppNavigator from "./app/router/AppNavigator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<AppNavigator />
	</>
);
