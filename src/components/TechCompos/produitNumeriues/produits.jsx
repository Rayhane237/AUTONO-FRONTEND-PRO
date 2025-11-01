import React, { useEffect } from 'react'
import './produits.css'

const Produits = () => {

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
    <div className='produits-content'>
      <div className='produits-grid-container'>
        <div className='pro-grid fade-in' id='pro-grid1'>
         
          <br />
          <h2 className='fade-in'>LES PRODUITS NUMÉRIQUES AUTONO</h2>
          <br />
          <h5 className='fade-in'>
           Notre application permet aux véhicules de se conduire et s'adapter en fonction des informations en temps réel et des situations.
          </h5>
        </div>

        <div className='pro-grid fade-in' id='pro-grid2'>
          <div id='hero-pro-section' className='fade-in' />
        </div>
      </div>
    </div>
  )
}

export default Produits ;

