import { useEffect } from "react"
import React   from 'react'
import "./LaVoiture.css"




const LaVoiture = () => {

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in')

    const handleScroll = () => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='voiture-content'>
      <div className='voi-grid-container'>
        <div className='voi-grid fade-in' id='voi-grid1'>
          <h6 className='fade-in'>LA VOITURE AUTONO</h6>
          <br />
          <h3 className='fade-in'>
                  LA VOITURE AUTONO
                  Grâce à une technologie de capteurs révolutionnaire basée sur la perception, la voiture Autono est un véhicule entièrement sans conducteur, conçu avec le plus haut degré de précision et de sécurité. C'est la conduite autonome réimaginée.</h3>
          <br />
      
        </div>

        <div className='voi-grid fade-in' id='voi-grid2'>
          <div id='hero-voiture-section' className='fade-in' />
        </div>
      </div>

      <br />
         <div className='voi-grid-container'>
        <div className='voi-grid fade-in' id='voi-grid1'>
          <h3 className='fade-in'>CONCEPTION CENTRÉE SUR L'HUMAIN</h3>
          <br />
          <h4 className='fade-in'>
               Autono place l’utilisateur au cœur de chaque interaction. L’interface est pensée pour être intuitive, accessible et agréable, facilitant la prise de décision et renforçant la confiance. Chaque fonctionnalité est conçue pour répondre aux besoins réels des conducteurs, en alliant sécurité, confort et simplicité d’usage.</h4>
          <br />
       <br />
        </div>
         <div className='voi-grid fade-in' id='voi-grid1'>
          <h3 className='fade-in'>FAIBLES ÉMISSIONS ET EFFICACITÉ</h3>
          <br />
          <h4 className='fade-in'>
              Autono favorise une mobilité durable en optimisant chaque trajet pour réduire les émissions et la consommation énergétique. Grâce à l’intelligence artificielle, le véhicule adopte une conduite plus fluide, évite les embouteillages et sélectionne les itinéraires les plus efficients. Résultat : moins de pollution, plus d’autonomie, et une conduite respectueuse de l’environnement.</h4>
          <br />
      
        </div>

      </div>
    </div>
  )
}

export default LaVoiture