import React, { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";

const MusicController = () => {
  const {
    currentSong,
    isPlaying,
    playSong,
    pauseSong,
    seek,
    changeVolume,
  } = useContext(MusicContext); // Step 6: Use the context

  if (!currentSong) return null; // Hide if no song is playing

  return (
    <div className="music-controller">
      <h3>Now Playing: {currentSong.title} - {currentSong.artist}</h3>
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

export default MusicController;