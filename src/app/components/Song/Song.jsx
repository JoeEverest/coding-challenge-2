import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { secondsToTime } from "../../utils/functions";

function Song({ song }) {
	const [autoPlay, setAutoPlay] = useState(false);
	return (
		<>
			<div
				className="song-results shadow-1"
				onClick={() => {
					setAutoPlay((autoPlay) => !autoPlay);
					console.log({
						name: song.title,
						link: song.link,
						image: song.picture_medium,
						artist: song.artist.name,
					});
				}}
			>
				<div className="top">
					<img src={song.album.cover_medium} alt={song.title} />
					<h3>{song.title}</h3>
					{autoPlay && <ReactAudioPlayer src={song.preview} autoPlay />}
				</div>
				<div className="bottom">
                    <p>{secondsToTime(song.duration)}</p>
                <h1>
					{autoPlay ? (
						<i class="fa-solid fa-pause"></i>
					) : (
						<i class="fa-solid fa-play"></i>
					)}
				</h1>
                </div>
			</div>
		</>
	);
}

export default Song;
