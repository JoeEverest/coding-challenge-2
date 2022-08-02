import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArtistInfo } from "../../api/functions";
import { setArtists } from "../../reducers/artistsSlice";
import Loader from "../Loader";
import Songs from "../Songs/Songs";

function Artists({ searchQuery }) {
	const storedArtists = useSelector((state) => state.artists.artists);
	const [nextPage, setNextPage] = useState(null);

	const dispatch = useDispatch();

	const [artistInfo, setArtistInfo] = useState(storedArtists);
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
			const results = [...artistInfo, ...data.data];
			return dispatch(setArtists(results));
		});
	}

	useEffect(() => {
		fetchArtistInfo();
	}, [searchQuery]);

	const [modalData, setModalData] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		setArtistInfo(storedArtists);
	}, [storedArtists]);

	useEffect(() => {
		console.log(modalData);
	}, [modalData]);

	return (
		<section className="container">
			<h2>Artists</h2>
			<div className="results">
				{artistInfo.map((artist, index) => (
					<div
						key={index}
						className="artist-results"
						onClick={() => {
							setModalData(artist);
							setModalOpen(true);
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
			<>
				{modalOpen && (
					<div className="modal">
						<div className="modal-content">
							<div className="close" onClick={() => setModalOpen(false)}>
								<h1>&times;</h1>
							</div>
							<div className="container">
								<div className="details">
									<img
										src={modalData.picture_medium}
										alt={modalData.name}
										className="avatar"
									/>
									<h3>{modalData.name}</h3>
								</div>
								<Songs searchQuery={null} next={modalData.tracklist} />
							</div>
						</div>
					</div>
				)}
			</>
		</section>
	);
}

export default Artists;
