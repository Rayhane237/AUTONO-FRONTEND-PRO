import React from 'react'
import AvenireHeader from './components/HomeAppCompos/AvenireHeader'
import Vision from './components/HomeAppCompos/vision/Vision'
import NavHome from './components/nav/NavHome'
import './components/HomeAppCompos/HomeApp.css'
import Services from './components/HomeAppCompos/servic/Services'
import Infos from './components/HomeAppCompos/Infos/Infos'
import Pourquoi from './components/HomeAppCompos/Pourquoi/Pourquoi'
import video from '../public/car-vid.mp4';
import Perception from './components/HomeAppCompos/Perception/Perception'
import Chiffres from "./components/HomeAppCompos/Chiffres/Chiffres"
import Industrie from "./components/HomeAppCompos/Industrie/Industrie"
import Carriere from "./components/HomeAppCompos/Carriere/Carriere"




const App = () => {
  return (
    <div className='main'>
      <video src={video} autoPlay loop muted></video>

      <div className='content'>
        <div className='NavHome'>
          <NavHome />
        </div>

        <div className='AvenireHeader'>
          <AvenireHeader />
        </div>
      </div>

         
        <Vision />

        <Services />
       
        <Infos />

        <Perception />

        <Pourquoi />

        <Chiffres />

        <Industrie />

        <Carriere />
     
    </div>
  )
}

export default App
