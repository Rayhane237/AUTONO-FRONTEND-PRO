import React from 'react'
import NavHome from '../nav/NavHome'
import LaVoiture from './LaVoiture/LaVoiture'
import "./Tech.css"
import Produits from "./produitNumeriues/produits"
import Sybersecurity from "./Cybersecurity/Cybersecurity"
import Carriere from "../HomeAppCompos/Carriere/Carriere"

const Tech = () => {
  return (
    <div className='tech-page-wrapper'>
      <div className='NavHome'>
        <NavHome />
      </div>
       
      <div className='tech-hero-section'>
        <h1>TECHNOLOGIE DE PERCEPTION</h1>
      </div>

      <div className='tech-sections'>
        <LaVoiture />
        <Produits />
        <Sybersecurity />
      </div>

      <Carriere />
    </div>
  )
}

export default Tech