import React from 'react'
import './App.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    
    <div>
    <Navbar style={{position:"sticky" ,top:"0"}} />
      <div className="container-3">
      <h2 className='music-data'><i>Music is not just sound  !<br/>it is an emotion ...</i></h2>
      <button className='music-data-btn'>Listen music</button>

      </div>
    </div>
    </>
  )
}

export default Home
