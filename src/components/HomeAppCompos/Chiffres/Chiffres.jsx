import React, { useEffect } from 'react'
import "./Chiffres.css"

const Chiffres = () => {

  useEffect(() => {
    // Scroll fade-in logic (same as Services)
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
    handleScroll() // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='chiffres-body fade-in'>
      <div className='grid-chiffre-container fade-in'>

        {/* Image section */}
        <div className='grid-chiffre fade-in' id='img-machine'>
          <img src="/public/chiffre4.jpg" alt="machine" />
        </div>

        {/* Stats section */}
        <div className='grid-chiffres fade-in'>
          <div className='grid-item fade-in'>
            <h1>200</h1>
            <div className="underline"></div>
            <h3>EMPLOYEES</h3>
          </div>

          <div className='grid-item fade-in'>
            <h1>200M€</h1>
            <div className="underline"></div>
            <h3>CAPITAL</h3>
          </div>

          <div className='grid-item fade-in'>
            <h1>326</h1>
            <div className="underline"></div>
            <h3>PARTNERS</h3>
          </div>

          <div className='grid-item fade-in'>
            <h1>5</h1>
            <div className="underline"></div>
            <h3>TEAM KEYS</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chiffres
