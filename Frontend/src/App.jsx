import { useState } from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Explore from './components/Pages/Explore/Explore'
import MyPlaylists from './components/Pages/MyPlaylists/MyPlaylists'
import Favourites from './components/Pages/Favourites/Favourites'

function App() {

  return (
    <>
    <Router>
      <Layout/>
      <Routes>
        <Route path='/' element={<MyPlaylists/>} />
        <Route path='/favourites' element={<Favourites/>} />
        <Route path='/playlists' element={<MyPlaylists/>} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
