import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/home'
import {Route , Routes} from "react-router-dom"
import Mapa from './pages/mapa/Mapa'
import Registro from './pages/registro/Registro'

function App() {

  return (
    <>
    <NavBar/>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mapa' element={<Mapa />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </div>
    {/* <Home/> */}
    </>
  )
}

export default App
