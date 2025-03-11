import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Explore from './components/Pages/Explore/Explore'
import MyPlaylists from './components/Pages/MyPlaylists/MyPlaylists'
import Favourites from './components/Pages/Favourites/Favourites'
import {  MusicProvider } from './context/MusicContext'
import NowPlaying from './components/Pages/NowPlaying/NowPlaying'

function App() {
  return (
    <MusicProvider>
    <Router>
      <Layout/>
      <Routes>
        <Route path='/' element={<MyPlaylists/>} />
        <Route path='/favourites' element={<Favourites/>} />
        <Route path='/playlists' element={<MyPlaylists/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/now-playing' element={<NowPlaying/>} />
      </Routes>
    </Router>
    </MusicProvider>
  )
}

export default App
