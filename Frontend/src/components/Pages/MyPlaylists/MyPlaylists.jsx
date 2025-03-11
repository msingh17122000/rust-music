import React, { useContext, useEffect, useRef, useState } from 'react'
import "./MyPlaylists.css"
import { MusicContext } from '../../../context/MusicContext';
import { Link } from 'react-router-dom';

function MyPlaylists() {

  
  const {
    currentSong,
    isPlaying,
    progress,
    volume,
    playSong,
    togglePlayPause,
    seek,
    changeVolume,
  } = useContext(MusicContext); // Get global state & functions


  const sampleSongs = [
    { id: 1, name: "Legend", artist: "Sidhu Moose Wala", src:"./assets/music/Legend.mp3"},
    { id: 2, name: "Wavy", artist: "Karan Aujla", src:"./assets/music/Wavy-Karan-Aujla.mp3"},
    { id: 3, name: "Levels", artist: "Sidhu Moose Wala", src:"./assets/music/Levels.mp3"},
    { id: 4, name: "Bars", artist: "Shubh", src:"./assets/music/Bars.mp3"},
    { id: 5, name: "Sifar Safar", artist: "Karan Aujla", src:"./assets/music/SifarSafar.mp3"},
    { id: 6, name: "Balle Balle Shout", artist: "AI", src:"./assets/music/BalleBalle.mp3"},
    { id: 7, name: "Code Ki Baat", artist: "AI", src:"./assets/music/CodeKiBaat.mp3"},
  ]

  return (
    <div>
      <br />
 

      <div style={{ display: "flex", flexDirection: "column",alignItems:'center',padding:'0px 10px',cursor:'pointer' }} >
        {
          sampleSongs.map((song,index)=>(
            <>
            <div key={song.id}  className='playlist-song' onClick={()=>{playSong(song)}}>
              <div>{song.name}</div>
              <div>{song.artist}</div>
            </div>
            <hr className='separator'/>
            </>
          ))
        }
      </div>
    </div>
  );
}

export default MyPlaylists
