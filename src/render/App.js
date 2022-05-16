import React from 'react'
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"
import Comienzo from './pages/Comienzo'
import Documentacion from './pages/Documentacion'
import './App.scss'




function App() {
   

    return (

        <HashRouter>

        <Routes>
          <Route path="/" element={<Comienzo/>} />
          <Route path="/documentacion" element={<Documentacion/>} />
        </Routes>

      </HashRouter>

    )
}

export default App
