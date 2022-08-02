import { createSlice } from "@reduxjs/toolkit";

const artistsSlice = createSlice({
	name: "artists",
	initialState: {
		artists: [],
	},
	reducers: {
		setArtists: (state, action) => {
			state.artists = action.payload;
		},
	},
});

export const { setArtists } = artistsSlice.actions;

export default artistsSlice.reducer;
