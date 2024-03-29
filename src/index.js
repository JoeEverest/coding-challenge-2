import React from "react";
import ReactDOM from "react-dom/client";
import AppNavigator from "./app/router/AppNavigator";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<AppNavigator />
		</PersistGate>
	</Provider>
);
