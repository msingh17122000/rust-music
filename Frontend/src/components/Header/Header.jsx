import React, { useEffect, useState } from 'react'
import "./Header.css"
import { AnimatePresence, delay, motion } from 'motion/react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'


function Header() {
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()
  const toggleHeaderBar = () => {
    setIsExpanded(!isExpanded)
  }
  useEffect(()=>{
   getPageTitle
  },[location])
  // Function to determine the title based on the current page
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/favourites":
        return "Favourites";
      case "/playlists":
        return "My Playlists";
      case "/settings":
        return "Settings";
      case "/explore":
        return "Explore";
      default:
        return "Rust Music";
    }
  };

  return (
    <div className='header-bar-wrapper'>
      <motion.div className='header-bar-content'
      animate={{ height: isExpanded ? "auto" : "60px" }}
      >

        <div className='header-bar-visible-area'>
          <div className='header-bar-title'>{getPageTitle()}</div>
          <div className='header-bar-menu' onClick={toggleHeaderBar}>{isExpanded ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}</div>
        </div>
        <AnimatePresence>
        {
          isExpanded && (
            <motion.div className='header-links-wrapper'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1,transition:{delay:0.2} }}
            // exit={{opacity:0}}
            transition={{ duration: 0.3 }}>
              <Link>Favourites</Link>
              <Link>My Playlists</Link>
              <Link>Settings</Link>
            </motion.div>
          )
        }
        </AnimatePresence>


      </motion.div>

    </div>

  )
}

export default Header
