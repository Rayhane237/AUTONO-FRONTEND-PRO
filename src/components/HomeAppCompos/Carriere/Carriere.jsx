import React, { useEffect } from 'react'
import './Carriere.css'
import { GrInstagram } from "react-icons/gr";

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
    <div className='carriere-body fade-in'>
      <div className='carriere-content'>
 
        <div className='carriere-grid-container'>
     
          <div className='carriere-grid fade-in' id='carriere-grid2'>
            <div id='carierre-grid1' className='fade-in'>
               <h4 id='carr-auto'> AUTONO</h4>
               <br />
               <div className='crrieres-lists'>
                       <div className='carr-list'>
                             <div><h4> Technologie</h4></div>
                              <div id='tel'>Tel:01 23 45 67 89</div>
                               
                               
                       </div>
                       <br />
                       <div className='carr-list'>
                               <div> <h4>A propos</h4><h5></h5></div>
                               <br />
                                <div>E-mail:info@moniste.fr</div>
                                 
                       </div>
                       <br />
                        <div className='carr-list'>
                           <div>Carrières</div>
                               <br />
                            <div>47 rue des Couronnes ,75020 Paris,France</div>
                                
                       </div>
              
               </div>
                
            </div>
           
         </div>
           
           

          <div className='carr-grid fade-in' id='carr-grid3'>
               <h1>S’abonner</h1>
               <br />
               <h3>Abonnez-vous aux nouvelles d’Autona.</h3>
                <br />
                <div className='input-sub' >
                  <h5>Email:</h5>
                  <br />
                  <input type="email" placeholder='enter your email '  className='abonner'   />
                  <button className='abonner-btn'>S’abonner</button>
                  <br />
                 
                </div>
            
          </div>
           <div className='email-me'>
            <div>
                <h3>AUTONO web app created by  <a href=""> Tliba Rayhane@gmail.com </a>  </h3>
            </div>
            <div>
                 <a href="https://www.instagram.com/rayhan____7/"><GrInstagram className='insta-icon'/></a>
            </div>
          </div>
        </div>

         
      </div>
    </div>
  )
}

export default Services
