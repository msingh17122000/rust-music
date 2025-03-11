import React, { useContext, useEffect } from 'react'
import Header from "../Header/Header"
import BottomBar from "../BottomBar/BottomBar"
import { MusicContext } from '../../context/MusicContext';
import { Outlet } from 'react-router-dom';

function Layout() {
  const { currentSong, isPlaying, volumeLevel, currentTime } =
    useContext(MusicContext); // Access global state

  // useEffect(() => {
  //   console.log("Current Song:", currentSong);
  //   console.log("Is Playing:", isPlaying);
  //   console.log("Volume Level:", volumeLevel);
  //   console.log("Current Time:", currentTime);
  // }, [currentSong, isPlaying, volumeLevel, currentTime]); 
  return (
    <div className='layout-content' style={{marginTop:'100px',paddingBottom:'100px'}}> 
            <Header/> 
            <Outlet/>
            <BottomBar/>
    </div>
  )
}

export default Layout
