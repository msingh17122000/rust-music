import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Explore from './components/Pages/Explore/Explore'
import MyPlaylists from './components/Pages/MyPlaylists/MyPlaylist'
import Favourites from './components/Pages/Favourites/Favourites'
import {  MusicProvider } from './context/MusicContext'
import NowPlaying from './components/Pages/NowPlaying/NowPlaying'

function App() {
  return (
    <MusicProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path='/' element={<MyPlaylists/>} /> */}
          <Route path='/favourites' element={<Favourites/>} />
          <Route path='/playlists' element={<MyPlaylists/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/now-playing' element={<NowPlaying/>} />
        </Route>
      </Routes>
    </Router>
    </MusicProvider>
  )
}

export default App
