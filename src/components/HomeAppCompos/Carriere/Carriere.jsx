import React, { useEffect, useState } from 'react'
import './Carriere.css'
import { GrInstagram } from "react-icons/gr";

const Services = () => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

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
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to show toast
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  }

  const handleSubscribe = () => {
    if (!email) {
      showToast('Veuillez entrer un email valide !', 'error');
      return;
    }
    showToast(`Merci ! Nous avons reçu votre email: ${email}`, 'success');
    setEmail('');
  }

  return (
    <div className='carriere-body fade-in'>
      <div className='carriere-content'>
        <div className='carriere-grid-container'>
          <div className='carriere-grid fade-in' id='carriere-grid2'>
            <div id='carierre-grid1' className='fade-in'>
              <h4 id='carr-auto'>AUTONO</h4>
              <br />
              <div className='crrieres-lists'>
                <div className='carr-list'>
                  <div><h4>Technologie</h4></div>
                  <div id='tel'>Tel:01 23 45 67 89</div>
                </div>
                <br />
                <div className='carr-list'>
                  <div><h4>A propos</h4></div>
                  <div>E-mail:info@moniste.fr</div>
                </div>
                <br />
                <div className='carr-list'>
                  <div>Carrières</div>
                  <div>47 rue des Couronnes, 75020 Paris, France</div>
                </div>
              </div>
            </div>
          </div>

          <div className='carr-grid fade-in' id='carr-grid3'>
            <h1>S’abonner</h1>
            <br />
            <h3>Abonnez-vous aux nouvelles d’AUTONO.</h3>
            <br />
            <div className='input-sub'>
              <h5>Email:</h5>
              <br />
              <input
                type="email"
                placeholder='Entrez votre email'
                className='abonner'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className='abonner-btn' onClick={handleSubscribe}>S’abonner</button>
              <br />
            </div>
          </div>

          <div className='email-me' id='email-lili'>
            <div>
              <h3>AUTONO web app created by <a href="">rayhane775@gmail.com</a></h3>
            </div>
            <div>
              <a href="https://www.instagram.com/rayhan____7/">
                <GrInstagram className='insta-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toast popup */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  )
}

export default Services
