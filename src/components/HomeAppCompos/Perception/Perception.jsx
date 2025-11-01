import React from 'react'
import './Perception.css'
import { useEffect } from 'react'

const Perception = () => {

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
        <div className='perception-content'>
          <div className='perception-grid-container'>
            <div className='p-grid fade-in' id='p-grid1'>
              <h6 className='fade-in'>Perception</h6>
              <br />
              <h2 className='fade-in'>PERCEPTION ACTIVÉE</h2>
              <br />
              <h5 className='fade-in'>
               Grâce à la perception activée, votre véhicule analyse en temps réel son environnement : obstacles, piétons, signalisation, météo, trafic. L’intelligence embarquée capte, comprend et anticipe chaque mouvement pour une conduite plus sûre, plus fluide et plus autonome. Chaque trajet devient une expérience augmentée.
              </h5>
            </div>

            <div className='p-grid fade-in' id='p-grid2'>
              <div className='hero-section-perception'></div>
            </div>
          </div>
        </div>
      )
    }
 
    
    
export default Perception
  