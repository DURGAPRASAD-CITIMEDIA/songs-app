import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Love from './Love'
import Emotion from './Emotion'
import Mass from './Mass'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <div>
      
    <Home />
    <Routes>
    <Route path='/love' element = {<Love />} />
    <Route path='/emotion' element = {<Emotion />} />
    <Route path='/mass' element = {<Mass />} />

    </Routes>

    </div>
    
  )
}

export default App
