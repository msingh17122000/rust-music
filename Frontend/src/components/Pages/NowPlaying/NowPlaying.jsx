import React, { useContext } from "react";
import { MusicContext } from "../../../context/MusicContext";
import "./NowPlaying.css"
import { ImFileMusic } from "react-icons/im";
import { IoIosMusicalNote, IoIosMusicalNotes, IoIosPause, IoIosPlay, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { motion } from "motion/react";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import { FaPause, FaPlay } from "react-icons/fa6";
import { GiPauseButton } from "react-icons/gi";



const NowPlaying = () => {
  const { currentSong, isPlaying, playSong, pauseSong, seek, changeVolume, currentTime, duration } =
    useContext(MusicContext);

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    seek(newTime);
  };

  if (!currentSong) return <p>No song is currently playing</p>;

  return (
    <div className="now-playing-page-wrapper">
      <div className="now-playing-music-cover"><IoIosMusicalNotes size={100} /></div>
      <div className="now-playing-music-data">
        <div className="now-playing-music-name">{currentSong.name}</div>
        <div className="now-playing-music-artist">Artist - {currentSong.artist}</div>
      </div>
      <div className="now-playing-music-controller">
        <motion.button className="now-playing-music-controller-btn"whileTap={{scale:0.8}}><BsFillSkipBackwardFill size={30}/></motion.button>
        <motion.button onClick={isPlaying ? pauseSong : () => playSong(currentSong)} className="now-playing-music-controller-btn" whileTap={{scale:0.8}}>
          {isPlaying ? <GiPauseButton size={40} /> : <FaPlay size={40} />}
        </motion.button>
        <motion.button className="now-playing-music-controller-btn"whileTap={{scale:0.8}}><BsFillSkipForwardFill size={30}/></motion.button>
      </div>


      {/* Seek bar */}
      <input
        type="range"
        min="0"
        max="100"
        className="music-progress-bar"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      />

      {/* Volume Control */}
      {/* <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={currentSong.volumeLevel}
        onChange={(e) => changeVolume(parseFloat(e.target.value))}
      /> */}
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default NowPlaying;