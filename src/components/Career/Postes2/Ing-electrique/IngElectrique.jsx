import React from 'react'
import NavHome from '../../../nav/NavHome'
import "./Electrique.css";
import TachesIng from './compos-ing/Taches/TachesIng';
import VotreIdentitee from './compos-ing/Identitee/VotreIdentitee';
import Carriere from "../../../HomeAppCompos/Carriere/Carriere"


const IngElectrique = () => {
  return (
   <div className='ing-body'>
      <div className='content'>
        <div className='NavHome'>
          <NavHome />
        </div>
         
        <div className='ing-hero-section'>
               <h1>INGÉNIEUR ÉLECTRICIEN</h1>
               <h3>
                Rejoignez AUTONO et participez à l’avenir de la mobilité autonome. En tant qu’ingénieur électricien, vous concevrez des systèmes intelligents qui allient innovation, performance et durabilité pour propulser la voiture du futur.
               </h3>

               
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
           <TachesIng />

          <VotreIdentitee /> 

          <Carriere />
      </div>
     
    </div>
  )
}

export default IngElectrique