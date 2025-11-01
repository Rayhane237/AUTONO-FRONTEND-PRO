import React from 'react'
import { useEffect } from 'react'
import "./Innovation.css"


const Innovation = () => {
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
            <div className='innovation-content'>
              <div className='innovation-grid-container'>
                <div className='inno-grid fade-in' id='inno-grid1'>
                  <h6 className='fade-in'>EMPLACEMENT</h6>
                  <br />
                  <h2 className='fade-in'>Centre d'innovation de Paris, France</h2>
                  <br />
                  <h5 className='fade-in'>
                   Situé au cœur du centre d’innovation de Paris, France, AUTONO repousse les limites de la technologie automobile grâce à l’intelligence artificielle et à la recherche continue.
                  </h5>
                </div>
    
                <div className='inno-grid fade-in' id='inno-grid2'>
                  <div className='hero-section-inno'></div>
                </div>
              </div>
            </div>
  )
}

export default Innovation