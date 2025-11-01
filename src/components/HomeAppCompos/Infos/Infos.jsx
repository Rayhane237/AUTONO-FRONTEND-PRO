import React from 'react'
import './Infos.css'

const Infos = () => {
  return (
    <div className='infos-body'>
           <div className='infos-grid-container'>
               
          <div className='i-grid fade-in' id='i-grid2'>
            <div className='info-hero-section'></div>
          </div>
          <div className='i-grid fade-in' id='i-grid3'>
            <h1>INFOS EN TEMPS RÉEL:</h1>
            <br />
            <h2>
               Notre application AUTONO vous connecte à la route comme jamais auparavant. Grâce aux informations en temps réel, vous recevez instantanément les données essentielles : trafic, météo, incidents, disponibilité des bornes de recharge, et bien plus. L’intelligence artificielle analyse et anticipe les conditions pour vous proposer les meilleurs itinéraires, éviter les zones à risque et optimiser chaque trajet.
            
            </h2>
          </div>

        </div>


      </div>

  )
}

export default Infos