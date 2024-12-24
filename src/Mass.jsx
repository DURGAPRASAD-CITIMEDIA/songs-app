import React from 'react'
import Navbar from './Navbar'
import './App.css'
import Massone from '../public/mass/mass-2.jpg'
import Masssongone from '../public/Mass Songs/mass-1.mp3'
import Masstwo from '../public/mass/mass-1.jpg'
import Masssongtwo from '../public/Mass Songs/mass-2.mp3'
import Massthree from '../public/mass/mass-3.jpg'
import Masssongthree from '../public/Mass Songs/mass-3.mp3'
import Massfore from '../public/mass/mass-4.jpg'
import Masssongfore from '../public/Mass Songs/mass-4.mp3'
import Massfive from '../public/mass/mass-5.jpg'
import Masssongfive from '../public/Mass Songs/mass-5.mp3'
import Masssix from '../public/mass/mass-6.jpg'
import Masssongsix from '../public/Mass Songs/mass-6.mp3'
const Mass = () => {
  return (
    <>
    <div>
    <div className="title-page" style={{textAlign:"center",margin:"20px",fontSize:"35px"}}>
     <h3><i><span style={{color:"green"}}>Mass</span> Songs</i></h3>
     </div>
     

      <div className="love-container">
        <div className="love-box">
            <div className="movie-image">
            <img src={Massone} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Masssongone} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Masstwo} alt="" className='love-img' id='love-img'/>
           
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Masssongtwo} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Massthree} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Masssongthree} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Massfore} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Masssongfore} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Massfive} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Masssongfive} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Masssix} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Masssongsix} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
      </div>
    </div>
    
    </>
  )
}

export default Mass
