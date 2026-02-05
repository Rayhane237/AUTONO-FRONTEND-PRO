import React from 'react'
import "./AI.css"
import NavHome from '../../../nav/NavHome'
import Carriere from "../../../HomeAppCompos/Carriere/Carriere"
import TachesIA from './TachesIA'
import VotreIdentiteeIA from './VotreIdentiteeIA'

const ChercheurIa = () => {
  return (
    <div className='ing-body'>
      {/* Navigation */}
      <div className='NavHome'>
        <NavHome />
      </div>
      
      {/* Hero Section */}
      <section className='ing-hero-section'>
        <h1>CHERCHEUR EN INTELLIGENCE ARTIFICIELLE</h1>
        <h3>
          Participez au développement de solutions innovantes en IA. Nous recherchons 
          des esprits curieux et créatifs pour faire avancer la recherche en machine 
          learning et deep learning.
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
        <TachesIA />
      </section>

      {/* Identité Section */}
      <section className='identite-section'>
        <VotreIdentiteeIA />
      </section>

      {/* Carrière Footer Section */}
      <section className='carriere-section'>
        <Carriere />
      </section>
    </div>
  )
}

export default ChercheurIa