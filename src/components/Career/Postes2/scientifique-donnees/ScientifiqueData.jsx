import React from 'react'
import NavHome from '../../../nav/NavHome'
import Carriere from "../../../HomeAppCompos/Carriere/Carriere"
import DataIdentity from '../scientifique-donnees/DataIdentity'
import TachesData from '../scientifique-donnees/TachesData'
import './Science.css'

const Science = () => {
  return (
    <div className='ing-body'>
      {/* Navigation */}
      <div className='NavHome'>
        <NavHome />
      </div>
      
      {/* Hero Section */}
      <section className='ing-hero-section'>
        <h1>CHERCHEUR EN SCIENCE DES DONNÉES</h1>
        <h3>
          Le chercheur en data science explore, modélise et transforme les données 
          en connaissances utiles pour l'innovation. Chez AUTONO, il développe de 
          nouvelles approches statistiques et algorithmiques pour optimiser les 
          systèmes intelligents et améliorer la prise de décision. Son travail relie 
          la recherche fondamentale à l'application concrète, en faisant des données 
          un véritable moteur de progrès technologique.
        </h3>

        {/* Stats Grid */}
        <div className='grid-ing'>
          <div className='grid-i'>
            <h3>Emplacement</h3>
            <div className="underline"></div>
            <h1>Paris, France</h1>
          </div>

          <div className='grid-i'>
            <h3>Type D'emploi</h3>
            <div className="underline"></div>
            <h1>Permanent</h1>
          </div>
        </div>
      </section>

      {/* Tâches Section */}
      <section className='taches-section'>
        <TachesData />
      </section>

      {/* Identité Section */}
      <section className='identite-section'>
        <DataIdentity />
      </section>

      {/* Carrière Footer Section */}
      <section className='carriere-section'>
        <Carriere />
      </section>
    </div>
  )
}

export default Science