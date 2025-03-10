import React, { useRef, useState } from 'react'

function MyPlaylists() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      My Playlists
      <div>
        <audio ref={audioRef} src="./assets/music/BalleBalle.mp3" />
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  )
}

export default MyPlaylists
