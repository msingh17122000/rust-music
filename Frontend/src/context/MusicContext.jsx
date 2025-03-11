import React, { createContext, useState, useRef } from "react";

// Step 1: Create the context
export const MusicContext = createContext();

// Step 2: Create the Provider component
export const MusicProvider = ({ children }) => {
  // Step 3: Create state variables
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(1); // Default 100%
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio()); // Step 4: Create a single audio instance

  // Step 5: Play a song
  const playSong = (song) => {
    console.log(song);
    
    if (currentSong?.id !== song.id) {
      audioRef.current.src = song.src; // Load new song
      setCurrentSong(song);
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Step 6: Pause the song
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };


  const togglePlayPause = (song) => {
    if (currentSong?.id !== song.id) {
      // If a different song is selected, load it and play
      audioRef.current.src = song.url;
      setCurrentSong(song);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      // If the same song is clicked, toggle play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };


  // Step 7: Seek to a specific time in the song
  const seek = (time) => {
    console.log(time);
    
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Step 8: Change volume level
  const changeVolume = (level) => {
    audioRef.current.volume = level;
    setVolumeLevel(level);
  };

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        isPlaying,
        volumeLevel,
        currentTime,
        playSong,
        pauseSong,
        seek,
        changeVolume,
        togglePlayPause
      }}
    >
      {children}
      <audio ref={audioRef} />
    </MusicContext.Provider>
  );
};