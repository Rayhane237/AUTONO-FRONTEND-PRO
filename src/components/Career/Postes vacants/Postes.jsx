import React from 'react'
import { useEffect } from 'react'
import "./Postes.css"

const Postes = () => {
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
                 <div className='postes-content'>
                   <div className='postes-grid-container'>
                     <div className='postes-grid fade-in' id='postes-grid1'>
                       <h6 className='fade-in'>POSTES VACANTS </h6>
                       <br />
                       <h2 className='fade-in'>Pour changer l'avenir des transports, il faut penser différemment.</h2>
                       <br />
                       <h6 className='fade-in'>
                             Chez AUTONO, nous croyons que l’innovation naît de la créativité et du courage d’explorer de nouvelles voies. Depuis notre centre d’innovation à Paris, nous réunissons ingénieurs, chercheurs et designers autour d’une même vision : rendre la mobilité plus intelligente, plus sûre et plus durable grâce à l’intelligence artificielle."
                       </h6>
                     </div>
         
                     <div className='postes-grid fade-in' id='postes-grid2'>
                       <div className='hero-section-postes'></div>
                     </div>
                   </div>
                 </div>
  )
}

export default Postes