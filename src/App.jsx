import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar'
import Inicio from './Components/Pages/Inicio'
import Login from './Components/Pages/Login'
import Registro from './Components/Pages/Registro'
import Rescontra from './Components/Pages/Rescontra'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Inicio/>}/>
          <Route path='/Registro'  element={<Registro/>}/>
          <Route path='/Login'  element={<Login/>}/>
          <Route path='/Rescontra'  element={<Rescontra/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
