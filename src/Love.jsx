import React from 'react'
import Navbar from './Navbar'
import './App.css'
import Loveone from '../public/love/love-6.jpg'
import Lovesongone from '../public/Love Songs/love-1.mp3'
import Lovetwo from '../public/love/love-1.jpg'
import Lovesongtwo from '../public/Love Songs/love-2.mp3'
import Lovethree from '../public/love/love-4.jpg'
import Lovesongthree from '../public/Love Songs/love-3.mp3'
import Lovefore from '../public/love/love-5.jpg'
import Lovesongfore from '../public/Love Songs/love-4.mp3'
import Lovefive from '../public/love/love-2.jpg'
import Lovesongfive from '../public/Love Songs/love-5.mp3'
import Lovesix from '../public/love/love-3.jpg'
import Lovesongsix from '../public/Love Songs/love-6.mp3'

const Love = () => {

  return (
    <>
    <div>
     <div className="title-page" style={{textAlign:"center",margin:"20px",fontSize:"35px"}}>
     <h3><i><span style={{color:"green"}}>Love</span> Songs</i></h3>
     </div>
     

      <div className="love-container" >
        <div className="love-box">
            <div className="movie-image">
            <img src={Loveone} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Lovesongone} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Lovetwo} alt="" className='love-img' id='love-img'/>
           
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Lovesongtwo} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Lovethree} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Lovesongthree} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Lovefore} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Lovesongfore} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Lovefive} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Lovesongfive} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Lovesix} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Lovesongsix} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
      </div>
    </div>
    
    </>
    
  )

}

export default Love
