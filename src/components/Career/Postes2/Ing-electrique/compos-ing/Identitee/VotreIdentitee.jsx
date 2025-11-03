import React from 'react'
import { useEffect } from 'react';
import "./Identitee.css"
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




const VotreIdentitee = () => {
   const navigate =useNavigate();
   const navToCvIngenieur =()=> navigate("/CvIngenieur");

   useEffect(() => {
      const items = document.querySelectorAll(".fade-in-li");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // trigger once
            }
          });
        },
        { threshold: 0.1 }
      );
  
      items.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <div className="identitee-body">
        <h1>Votre identitee</h1>
        <div className="identitee-container">
          <ul className="list-ul-list">
            <li className="fade-in-li">
              <h2>Proposer des solutions innovantes pour améliorer la fiabilité et la durabilité des systèmes électriques.</h2>
              <h2>Réaliser les schémas électriques et électroniques en respectant les normes de sécurité et de performance.</h2>
            </li>
            <br />
            <li className="fade-in-li">
              <h2>Collaborer avec les équipes mécaniques et logicielles pour assurer une intégration harmonieuse des systèmes.</h2>
            </li>
            <li className='fade-in-li'> 
              <h2>Concevoir, développer et tester les systèmes électriques embarqués des véhicules autonomes.</h2>
            </li>
              <li className="fade-in-li">
              <h2>Optimiser la consommation énergétique des systèmes pour améliorer l’autonomie et l’efficacité du véhicule.</h2>
            </li>
           
          
          </ul>
  
          <ul className="list-ul-list">
            <li className="fade-in-li">
              <h2>Tester, diagnostiquer et valider les composants et sous-ensembles électriques avant leur mise en production.</h2>
            </li>
            <br />
             <li className="fade-in-li">
              <h2>Assurer la maintenance et la mise à jour des systèmes électriques existants.</h2>
            </li>
            <br />
          
            <li className="fade-in-li">
              <h2>Optimiser la consommation énergétique des systèmes pour améliorer l’autonomie et l’efficacité du véhicule.</h2>
              <h2>Assurer la maintenance et la mise à jour des systèmes électriques existants.</h2>
            </li>


           

            <br />

          
          </ul>

      </div>
      
            <div className='iden-button' >
                <button onClick={navToCvIngenieur} >Postuler <FaArrowRight className='arr'></FaArrowRight>  </button>
             </div>

    </div>
    ) 
}


export default VotreIdentitee