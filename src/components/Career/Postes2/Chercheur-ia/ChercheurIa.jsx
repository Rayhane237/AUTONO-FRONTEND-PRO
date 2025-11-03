import React from 'react'
import "./IA.css"
import NavHome from '../../../nav/NavHome'
import Carriere from "../../../HomeAppCompos/Carriere/Carriere"
import TachesIA from './TachesIA'
import VotreIdentiteeIA from './VotreIdentiteeIA'



const ChercheurIa = () => {
  return (
     <div className='ing-body'>
      <div className='content'>
        <div className='NavHome'>
          <NavHome />
        </div>
         
        <div className='ing-hero-section'>
               <h1>CHERCHEUR  EN  INTELLIGENCE ARTIFICIELLE</h1>
                <h3>Participez au développement de solutions innovantes en IA. Nous recherchons des esprits curieux et créatifs pour faire avancer la recherche en machine learning et deep learning.</h3>

               
        {/* Stats section */}
        <div className='grid-ing '>
          <div className='grid-i '>
            <h3>Emplacement</h3>
            <div className="underline"></div>
            <h1>Paris,France</h1>
          </div>

      
          <div className='grid-i '>
            <h3>Type D’emploi </h3>
            <div className="underline"></div>
            <h1>Permanent</h1>
          </div>

        </div>

           
        </div>
          <TachesIA />
          <VotreIdentiteeIA />

          <Carriere />
      </div>
     
    </div>
   
  )
}

export default ChercheurIa