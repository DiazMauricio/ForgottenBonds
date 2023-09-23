import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/home'
import {Route , Routes} from "react-router-dom"
import Mapa from './pages/mapa/Mapa'
import Bitacora from './pages/bitacora/Bitacora'

function App() {

  return (
    <>
    <NavBar/>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mapa' element={<Mapa />} />
        <Route path='/bitacora' element={<Bitacora />} />
      </Routes>
    </div>
    </>
  )
}

export default App
