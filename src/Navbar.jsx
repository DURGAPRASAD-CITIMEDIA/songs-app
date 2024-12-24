import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className="container-0" style={{position:"sticky" ,top:"0"}}>
    <div className="container-1">
    <div className="head">
      <h2><FontAwesomeIcon icon={faMusic} style={{color:'lime'}}/> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<i>Life - <span style={{color:'lime'}}>Music</span> </i></h2>
      </div>
      <div className="login" >
        <button className='btn'>Login</button>
        <button className='btn'>Sign Up</button>
      </div> 
      </div>
    
    <div style={{display:'flex'}}>
        <div className="container-2"></div>
        <div className="container-2">
      <ul style={{color:'white',}}>
      <Link to = '/love'> <li style={{color:'white',textDecorationLine:"none"}}>Love Songs</li></Link>
      <Link to = '/emotion'> <li style={{color:'white',textDecorationLine:"none"}}>Emotional Songs</li></Link>
      <Link to = '/mass'> <li style={{color:'white',textDecorationLine:"none"}}>Mass Songs</li></Link>
      </ul>
      
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
