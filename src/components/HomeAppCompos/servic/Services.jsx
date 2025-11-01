import React, { useEffect } from 'react'
import './Services.css'

const Services = () => {

  useEffect(() => {
    //  When user scrolls, we check which elements are visible and add 'visible' class
    const fadeElements = document.querySelectorAll('.fade-in')

    const handleScroll = () => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible')  //  Trigger fade-in when element enters view
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='services-body fade-in'>
      <div className='services-content'>
        <div id='s-grid1' className='fade-in'>
          <h6>SERVICES</h6>
          <br />
          <h2>Fourniture de produits et services VIP dans le monde entier.</h2>
        </div>
        <br />
        <div className='services-grid-container'>
          <div className='s-grid fade-in' id='s-grid2'>
            <h1>CONDUITE AUTONOME:</h1>
            <br />
            <h4>
              La conduite autonome utilise l’intelligence artificielle pour permettre aux véhicules de se déplacer sans intervention humaine, offrant sécurité, confort et innovation. 
              <br />
              Dans un avenir proche, elle pourrait devenir la norme, libérant du temps pour les passagers, réduisant les embouteillages et ouvrant la voie à une mobilité plus durable et inclusive.
            </h4>
          </div>

          <div className='s-grid fade-in' id='s-grid3'>
            <div className='hero-section'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
