import React, { useContext, useEffect, useState } from 'react'
import "./BottomBar.css"

import { FaHeart, FaPause, FaPlay } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoIosArrowUp, IoIosPause, IoIosPlay, IoIosSearch } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
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
  const [showMusicController, setShowMusicController] = useState(true)
  const location = useLocation(); // Get current URL info

  useEffect(() => {
    console.log("Current URL:", location.pathname); // Logs the URL path
    if (location.pathname === '/now-playing') {
      setShowMusicController(false)
    }
    else {
      setShowMusicController(true)
    }
  }, [location]);

  return (
    <motion.div className='bottom-bar-wrapper'>
      <motion.div className='bottom-bar'
        // animate={{ height: currentSong && 'auto' }}  // Expand when song plays
        // transition={{ type: "spring", stiffness: 100, duration: 0.1 }} // Smooth animation
        animate={{ height: currentSong && showMusicController ? 'auto':'75px', }} // Expands first
        style={{ overflow: 'hidden' }}
        transition={{ type: "spring", stiffness: 120, duration: 0.3 }}
      >
        <AnimatePresence>
          {
            currentSong && showMusicController && (
              <motion.div
                className='bottom-music-controller-wrapper'
                // initial={{ y: 100, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // exit={{ y: 100, opacity: 0 }}
                initial={{scaleY:0}}
                animate={{scaleY:1}}
                exit={{scaleY:0}}
                style={{height:showMusicController&&currentSong?'auto':0,padding:showMusicController&&currentSong?'10px':0,overflow:'hidden'}}
              >

                {/* Song Info */}
                <Link className='bottom-music-controller-music-data' to={'/now-playing'}>
                  <motion.button className='bottom-music-controller-mode-button'><IoIosArrowUp size={20}/></motion.button>
                  <div>
                    <div className='bottom-music-controller-music-name'>{currentSong.name}</div>
                    <div className='bottom-music-controller-music-artist'>{currentSong.artist}</div>
                  </div>
                </Link>

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

          {/* {currentSong && showMusicController && <motion.hr className='separator' initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ width: 0 }} />} */}
        </AnimatePresence>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '15px 0px',alignItems:'flex-end' }}>
          <NavLink to='/favourites' className={({ isActive }) => `bottom-bar-navlink ${isActive ? 'active-bottom-link' : ''}`}><LuHeart size={20} /><div className='bottom-bar-title'>Favourites</div></NavLink>
          <div className='bottom-bar-separator' />
          <NavLink to='/playlists' className={({ isActive }) => `bottom-bar-navlink ${isActive ? 'active-bottom-link' : ''}`}><IoMusicalNotesSharp size={20} /><div className='bottom-bar-title'>Playlist</div></NavLink>
          <div className='bottom-bar-separator' />
          <NavLink to='/explore' className={({ isActive }) => `bottom-bar-navlink ${isActive ? 'active-bottom-link' : ''}`}><IoIosSearch size={22} /><div className='bottom-bar-title'>Explore</div></NavLink>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BottomBar
