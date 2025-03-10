import React, { useRef, useState } from 'react'

function MyPlaylists() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1); 

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

   // Change Volume
   const changeVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div>
      Balle Balle Shout
      <br/>
      <br/>
      <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
      <audio
        ref={audioRef}
        src="./assets/music/BalleBalle.mp3"
        onTimeUpdate={updateProgress} // Update progress bar
        onEnded={() => setIsPlaying(false)} // Stop when finished
      />
      <button onClick={togglePlayPause} style={{background:'white'}}>
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


      {/* Volume Control */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={changeVolume}
      />
      <span> Volume: {Math.round(volume * 100)}%</span>
    </div>
    </div>
  )
}

export default MyPlaylists
