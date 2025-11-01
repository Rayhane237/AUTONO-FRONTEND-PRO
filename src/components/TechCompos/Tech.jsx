import React from 'react'
import NavHome from '../nav/NavHome'
import LaVoiture from './LaVoiture/LaVoiture'
import "./Tech.css"

import Produits from "./produitNumeriues/produits"
import Sybersecurity from "./Cybersecurity/Cybersecurity"
import Carriere from "../HomeAppCompos/Carriere/Carriere"




const Tech = () => {
  return (
    
      <div className='content'>
        
        <div className='NavHome'>
          <NavHome />
        </div>
         
        <div className='tech-hero-section'>
               <h1>TECHNOLOGIE DE PERCEPTION</h1>
    
        </div>
         <LaVoiture />

         <Produits />

         <Sybersecurity />

         <Carriere />
      </div>

      
    
  )
}

export default Tech