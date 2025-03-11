import React, { useContext, useEffect } from 'react'
import "./BottomBar.css"

import { FaHeart, FaPause, FaPlay } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoIosPause, IoIosPlay, IoIosSearch } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react'
import { MusicContext } from '../../context/MusicContext';






function BottomBar() {
  const {
    currentSong,
    isPlaying,
    progress,
    volume,
    playSong,
    togglePlayPause,
    seek,
    pauseSong,
    changeVolume,
  } = useContext(MusicContext); // Get global state & functions


  return (
    <motion.div className='bottom-bar-wrapper'>
      <motion.div className='bottom-bar'
      
        
        animate={{ height: currentSong && 'auto' }}  // Expand when song plays

        transition={{ type: "spring", stiffness: 100}} // Smooth animation
      >
        <AnimatePresence>
          {
            currentSong && (
              <motion.div
                className='bottom-music-controller-wrapper'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{delay:0.3}}
              >
                {/* Song Info */}
                <div className='bottom-music-controller-music-data'>
                  <div className='bottom-music-controller-music-name'>{currentSong.name}</div>
                  <div className='bottom-music-controller-music-artist'>{currentSong.artist}</div>
                </div>

                {/* Play/Pause Button */}
                <motion.button
                  className='bottom-music-controller-music-button'
                  whileTap={{ scale: 0.8 }}
                  onClick={isPlaying ? pauseSong : () => playSong(currentSong)}
                >
                  {isPlaying ? <IoIosPause size={30} /> : <IoIosPlay size={30} />}
                </motion.button>
              </motion.div>
            )
          }

          {currentSong && <motion.hr className='separator' initial={{width:0}}animate={{width:'100%'}}exit={{width:0}} />}
        </AnimatePresence>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
          <Link to='/favourites' className='bottom-bar-navlink'><LuHeart size={20} /><div className='bottom-bar-title'>Favourites</div></Link>
          <Link to='/playlists' className='bottom-bar-navlink'><IoMusicalNotesSharp size={20} /><div className='bottom-bar-title'>Playlist</div></Link>
          <Link to='/explore' className='bottom-bar-navlink'><IoIosSearch size={22} /><div className='bottom-bar-title'>Explore</div></Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BottomBar
