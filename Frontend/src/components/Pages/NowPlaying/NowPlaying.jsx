import React, { useContext } from "react";
import { MusicContext } from "../../../context/MusicContext";
import "./NowPlaying.css"

const NowPlaying = () => {
  const { currentSong, isPlaying, playSong, pauseSong, seek, changeVolume } =
    useContext(MusicContext);

  if (!currentSong) return <p>No song is currently playing</p>;

  return (
    <div className="now-playing-page-wrapper">
      <h1>Now Playing</h1>
      <h2>{currentSong.title} - {currentSong.artist}</h2>
      <button onClick={isPlaying ? pauseSong : () => playSong(currentSong)}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Seek bar */}
      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => seek(e.target.value)}
      />

      {/* Volume Control */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={currentSong.volumeLevel}
        onChange={(e) => changeVolume(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default NowPlaying;