import React from 'react'
import Navbar from './Navbar'
import './App.css'
import Emotionone from '../public/emotion/emotion-6.jpg'
import Emotionsongone from '../public/Emotion Songs/emotion-1.mp3'
import Emotiontwo from '../public/emotion/emotion-1.jpg'
import Emotionsongtwo from '../public/Emotion Songs/emotion-2.mp3'
import Emotionthree from '../public/emotion/emotion-5.jpg'
import Emotionsongthree from '../public/Emotion Songs/emotion-3.mp3'
import Emotionfore from '../public/emotion/emotion-4.jpg'
import Emotionsongfore from '../public/Emotion Songs/emotion-4.mp3'
import Emotionfive from '../public/emotion/emotion-3.jpg'
import Emotionsongfive from '../public/Emotion Songs/emotion-5.mp3'
import Emotionsix from '../public/emotion/emotion-2.jpg'
import Emotionsongsix from '../public/Emotion Songs/emotion-6.mp3'
const Emotion = () => {
  return (
    <>
    <div>
    <div className="title-page" style={{textAlign:"center",margin:"20px",fontSize:"35px"}}>
     <h3><i><span style={{color:"green"}}>Emotional</span> Songs</i></h3>
     </div>
     

      <div className="love-container">
        <div className="love-box">
            <div className="movie-image">
            <img src={Emotionone} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Emotionsongone} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Emotiontwo} alt="" className='love-img' id='love-img'/>
           
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Emotionsongtwo} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Emotionthree} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Emotionsongthree} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Emotionfore} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Emotionsongfore} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Emotionfive} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Emotionsongfive} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
        <div className="love-box">
            <div className="movie-image">
            <img src={Emotionsix} alt="" className='love-img' />
            </div>
            <div className="movie-song">
                <audio controls>
                <source src={Emotionsongsix} type='audio/ogg'/>
                </audio>

            </div>
        </div> 
      </div>
    </div>
    
    </>
  )
}

export default Emotion
