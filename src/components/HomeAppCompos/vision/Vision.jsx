import React, { useEffect } from 'react'
import '../HomeApp.css'
import './Vision.css'

const Vision = () => {

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
    <div className='vision-content'>
      <div className='vision-grid-container'>
        <div className='v-grid fade-in' id='v-grid1'>
          <h6 className='fade-in'>Vision</h6>
          <br />
          <h2 className='fade-in'>Nous changeons la façon dont le monde perçoit les voitures</h2>
          <br />
          <h5 className='fade-in'>
            Paragraphe. Vous pouvez le modifier et ajouter votre propre texte. Cliquez sur « Modifier le texte » ou double-cliquez ici pour ajouter votre contenu et personnaliser la police. 
            C'est l'espace idéal pour raconter une histoire et vous présenter à vos visiteurs.
          </h5>
        </div>

        <div className='v-grid fade-in' id='v-grid2'>
          <div id='hero-vision-section' className='fade-in' />
        </div>
      </div>
    </div>
  )
}

export default Vision

