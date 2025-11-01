import React from 'react'
import './Pourquoi.css'


const Pourquoi = () => {
   const background = {
    backgroundImage: "url('/why.jpg')", 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // adjust as needed
  }
  return (
    <div style={background} className='why-content'>
          <div className='why-grid-container'>
          <div className='w-grid fade-in' id='w-grid2'>
            <h1>POURQUOI AUTONO</h1>
            <br />
            <h5>
               Autono est bien plus qu’une application — c’est un copilote intelligent. Grâce à l’intelligence artificielle, Autono analyse l’environnement en temps réel, anticipe les risques, optimise les trajets et vous connecte aux données essentielles : trafic, météo, incidents, et disponibilité des services.
                 </h5>
             <br /> 
             <h5>Avec Autono, la perception est activée, la sécurité renforcée, et chaque trajet devient une expérience fluide, autonome et connectée.</h5>

              <br />
              <h5>Dans un avenir proche, elle pourrait devenir la norme, libérant du temps pour les passagers, réduisant les embouteillages et ouvrant la voie à une mobilité plus durable et inclusive.</h5>
          </div>

        
        </div>
    </div>
  )
}

export default Pourquoi