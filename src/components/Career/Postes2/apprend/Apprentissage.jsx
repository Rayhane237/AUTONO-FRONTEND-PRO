import React from 'react'
import NavHome from '../../../nav/NavHome'

import AptTaches from '../apprend/AptTaches';
import AptIdentity from '../apprend/AptIdentity';
import Carriere from "../../../HomeAppCompos/Carriere/Carriere"

const Apprentissage = () => {
  return (
    <div className='ing-body'>
      <div className='content'>
        <div className='NavHome'>
          <NavHome />
        </div>
         
        <div className='ing-hero-section'>
          <h1>CHERCHEUR EN APPRENTISSAGE PROFOND</h1>
          <h3>
            Rejoignez AUTONO et contribuez à façonner l’avenir de l’intelligence artificielle. 
            En tant que chercheur en apprentissage profond, vous développerez des modèles de Deep Learning 
            avancés pour améliorer la perception, la prise de décision et l’autonomie des véhicules intelligents.
          </h3>

          {/* Stats section */}
          <div className='grid-ing'>
            <div className='grid-i'>
              <h3>Emplacement</h3>
              <div className="underline"></div>
              <h1>Paris, France</h1>
            </div>

            <div className='grid-i'>
              <h3>Type d’emploi</h3>
              <div className="underline"></div>
              <h1>Permanent</h1>
            </div>
          </div>
        </div>

        <AptTaches />
        <AptIdentity />
        <Carriere />
      </div>
    </div>
  )
}

export default Apprentissage
