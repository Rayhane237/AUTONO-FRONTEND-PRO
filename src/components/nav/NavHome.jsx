import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import { IoIosMenu } from 'react-icons/io';
import { RiCloseLargeFill } from 'react-icons/ri';

const NavHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [abonnerOpen, setAbonnerOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const navigate = useNavigate();

  // Navigation functions
  const navAccueil = () => navigate("/");
  const navThech = () => navigate("/Thech");
  const navApropos = () => navigate("/Apropos");
  const navCareer = () => navigate("/Career");

  const handleAbonner = () => setAbonnerOpen(!abonnerOpen);

  // Toast function
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  // Subscribe handler
  const handleSubscribe = () => {
    if (!email) {
      showToast('Veuillez entrer un email valide !', 'error');
      return;
    }
    showToast(`Merci ! Nous avons reçu votre email: ${email}`, 'success');
    setEmail('');
  };

  return (
    <>
      <nav className='Navbar'>
        <div className='logo'><h2>AUTONO</h2></div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li className='btn-nav' onClick={navAccueil}>Accueil</li>
          <li className='btn-nav' onClick={navThech}>Technologie</li>
          <li className='btn-nav' onClick={navApropos}>À propos</li>
          <li className='btn-nav' onClick={navCareer}>Carrières</li>
          <li className='abboner-nav' onClick={handleAbonner}>Subscribe</li>
        </ul>

        <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLargeFill /> : <IoIosMenu />}
        </div>
      </nav>

      {/* Sliding Subscribe Section */}
      <div className={`ab-bottom ${abonnerOpen ? 'show' : ''}`}>
        <div className="ab-header">
          <h3>Abonnez-vous</h3>
          <RiCloseLargeFill className="close-icon" onClick={handleAbonner} />
        </div>

        <div className="ab-content">
          <h3>Abonnez-vous aux nouvelles d’AUTONO.</h3>
          <div className='input-subscribe'>
            <br />
            <label htmlFor="email">Email:</label>
            <input 
              id="email"
              type="email" 
              placeholder='Entrez votre email'  
              className='ab-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />  
            <button className='ab-btn' onClick={handleSubscribe}>S’abonner</button>
          </div>
        </div>
      </div>

      {/* Toast popup */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </>
  );
};

export default NavHome;
