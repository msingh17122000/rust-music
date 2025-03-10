import React, { useRef, useState } from 'react'

function MyPlaylists() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Seek to a specific time
  const seekAudio = (event) => {
    const newTime = event.target.value;
    audioRef.current.currentTime = newTime; // Set the audio time
    setProgress(newTime);
  };

  // Update progress bar as the audio plays
  const updateProgress = () => {
    setProgress(audioRef.current.currentTime);
  };
  return (
    <div>
      My Playlists
      <div>
      <audio
        ref={audioRef}
        src="./assets/music/BalleBalle.mp3"
        onTimeUpdate={updateProgress} // Update progress bar
        onEnded={() => setIsPlaying(false)} // Stop when finished
      />
      <button onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Seek Bar (Progress Slider) */}
      <input
        type="range"
        min="0"
        max={audioRef.current?.duration || 0} // Ensure max is the duration
        value={progress}
        onChange={seekAudio} // Seek when user moves slider
      />
    </div>
    </div>
  )
}

export default MyPlaylists
