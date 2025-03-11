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
    { id: 6, name: "Code Ki Baat", artist: "AI", src:"./assets/music/CodeKiBaat.mp3"},
  ]

  return (
    <div>
      <h2>{currentSong?.title || "No song playing"}</h2>
      <br />
 

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} >
        {
          sampleSongs.map((song,index)=>(
            <div key={index} style={{maxWidth:'400px',background:'#333',
            margin:'0 auto',width:'100%',padding:'10px 15px' ,borderRadius:"7px"}}
             onClick={()=>{playSong(song)}}>
             
              <div>{song.name}</div>
              <div>{song.artist}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MyPlaylists
