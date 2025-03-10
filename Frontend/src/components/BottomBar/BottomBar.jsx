import React from 'react'
import "./BottomBar.css"

import { FaHeart } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import {motion} from 'motion/react'






function BottomBar() {
  return (
    <motion.div className='bottom-bar-wrapper'>
        <div className='bottom-bar'>
            <Link to='/favourites' className='bottom-bar-navlink'><LuHeart size={20} /><div className='bottom-bar-title'>Favourites</div></Link>
            <Link to='/playlists' className='bottom-bar-navlink'> <IoMusicalNotesSharp  size={20} /><div className='bottom-bar-title'>Playlist</div></Link>
            <Link to='/explore' className='bottom-bar-navlink'><IoIosSearch  size={22} /><div className='bottom-bar-title'>Explore</div></Link>
        </div>
    </motion.div>
  )
}

export default BottomBar
