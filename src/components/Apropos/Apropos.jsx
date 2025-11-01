import React from 'react'
import NavHome from '../nav/NavHome'
import "./Apropos.css"
import Voyage from './Notre-voyage/Voyage'
import HugePic from './HugePic/HugePic'
import Carriere from "../HomeAppCompos/Carriere/Carriere"



const Apropos = () => {
  return (
    <div>
      <div className='content'>
        <div className='NavHome'>
          <NavHome />
        </div>
         
        <div className='ap-hero-section'>
               <h1>NOTRE PARCOURS</h1>
               <h3>Bienvenue sur <span>AUTONO</span>, une plateforme visionnaire dédiée à la découverte et à la promotion des voitures autonomes propulsées par l’intelligence artificielle. Notre mission est de rendre la technologie de conduite autonome accessible à tous, en mettant en lumière les innovations qui redéfinissent la mobilité du futur. Chez AUTONO, nous croyons que l’alliance entre l’IA, la perception intelligente et la sécurité routière peut transformer nos déplacements quotidiens. Nous nous engageons à informer, sensibiliser et inspirer les utilisateurs autour des avancées technologiques qui façonnent la voiture de demain — plus intelligente, écologique et humaine.</h3>
    
        </div>
        <Voyage />

        <HugePic />

        <Carriere />


      </div>

   

    </div>
  )
}

export default Apropos