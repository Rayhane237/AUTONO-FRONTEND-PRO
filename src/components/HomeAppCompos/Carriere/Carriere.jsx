import React, { useEffect, useState } from 'react'
import './Carriere.css'
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
          {/* Info Section */}
          <div className='carriere-grid fade-in' id='carriere-grid2'>
            <h4 id='carr-auto'>AUTONO</h4>
            <div className='crrieres-lists'>
              <div className='carr-list'>
                <h4>Technologie</h4>
                <div>Tel: 01 23 45 67 89</div>
              </div>

              <div className='carr-list'>
                <h4>À propos</h4>
                <div>E-mail: info@moniste.fr</div>
              </div>

              <div className='carr-list'>
                <h4>Carrières</h4>
                <div>47 rue des Couronnes, 75020 Paris, France</div>
              </div>
            </div>
          </div>

          {/* Subscription Card */}
          <div className='carr-grid fade-in' id='carr-grid3'>
            <h1>S'abonner</h1>
            <h3>Abonnez-vous aux nouvelles d'AUTONO.</h3>

            <div className='input-sub'>
              <h5>Email:</h5>
              <input
                type="email"
                placeholder='Entrez votre email'
                className='abonner'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className='abonner-btn' onClick={handleSubscribe}>
                S'abonner
              </button>
            </div>
          </div>

          {/* Footer Section */}
          <div className='email-me' id='email-lili'>
            <div>
              <h3>AUTONO web app created by <a href="mailto:rayhane775@gmail.com">rayhane775@gmail.com</a></h3>
            </div>
            <div className='social-icons'>
              <a href="https://www.linkedin.com/in/rayhane-tliba-765982358/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin className='linkedin-icon' />
              </a>
              <a href="https://github.com/Rayhane237/AUTONO-FRONTEND-PRO" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub className='github-icon' />
              </a>
              <a href="https://www.instagram.com/rayhan____7/" target="_blank" rel="noopener noreferrer" title="Instagram">
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