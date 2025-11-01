import React from 'react'
import NavHome from '../nav/NavHome'
import Carriere from "../HomeAppCompos/Carriere/Carriere"
import "./Career.css"
import Innovation from './Centre-Inno/Innovation'
import Postes from './Postes vacants/Postes'
import Postes2 from "./Postes2/Postes2"


const Career = () => {
  return (
      <div>
      <div className='content-career'>
        <div className='NavHome'>
          <NavHome />
          
        </div>
         
        <div className='career-hero-section'>
               <h1>NOUS ALLONS TOUJOURS PLUS LOIN</h1>
               <h2>Rejoignez-nous pour la balade</h2>
    
        </div>

        <Innovation />

        <Postes />

        <Postes2 />

         <Carriere />

      </div>

   

    </div>
  )
}

export default Career