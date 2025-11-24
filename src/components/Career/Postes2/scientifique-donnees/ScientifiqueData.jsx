import React from 'react'

import NavHome from '../../../nav/NavHome'
import Carriere from "../../../HomeAppCompos/Carriere/Carriere"
import DataIdentity from '../scientifique-donnees/DataIdentity'
import TachesData from '../scientifique-donnees/TachesData'



const Science = () => {
  return (
     <div className='ing-body'>
      <div className='content'>
        <div className='NavHome'>
          <NavHome />
        </div>
         
        <div className='ing-hero-section'>
               <h1>CHERCHEUR  EN  SCIENCE DES DONNEES</h1>
                <h3>Le chercheur en data science explore, modélise et transforme les données en connaissances utiles pour l’innovation. Chez AUTONO, il développe de nouvelles approches statistiques et algorithmiques pour optimiser les systèmes intelligents et améliorer la prise de décision. Son travail relie la recherche fondamentale à l’application concrète, en faisant des données un véritable moteur de progrès technologique.</h3>

               
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
          <TachesData />

           <DataIdentity />

          <Carriere />
      </div>
     
    </div>
   
  )
}

export default Science