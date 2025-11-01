import React, { useEffect } from 'react'
import './Cybersecurity.css'

const Sybersecurity = () => {

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
    <div className='syber-content'>
      <div className='syber-grid-container'>
        <div className='syber-grid fade-in' id='syber-grid1'>
         
          <br />
          <h2 className='fade-in'>INFORMATIONS EN TEMPS RÉEL</h2>
          <br />
          <h6 className='fade-in'>
                  Autono capte et affiche en continu les données essentielles du véhicule et de son environnement. Vitesse, autonomie, trafic, météo ou alertes techniques : tout est mis à jour instantanément pour une conduite plus sûre, plus fluide et plus réactive. L’utilisateur reste informé à chaque instant, sans distraction ni surcharge.
          </h6>
        </div>
        
          <div className='syber-grid fade-in' id='syber-grid1'>
         
          <br />
          <h2 className='fade-in'>CYBERSÉCURITÉ AVANCÉE</h2>
          <br />
          <h6 className='fade-in'>
               Autono intègre des protocoles de sécurité de haut niveau pour protéger les données des utilisateurs et les communications du véhicule. Chaque interaction est chiffrée, chaque accès est contrôlé, et les systèmes sont continuellement surveillés pour détecter les menaces en temps réel. La confidentialité, l’intégrité et la résilience sont au cœur de l’expérience Autono, garantissant une conduite connectée sans compromis sur la sécurité.
          </h6>
        </div>

      </div>
    </div>
  )
}

export default Sybersecurity;

