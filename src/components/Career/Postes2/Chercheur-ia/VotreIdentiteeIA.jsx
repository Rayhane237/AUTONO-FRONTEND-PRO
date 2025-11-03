import React from 'react'
// import { useNavigate } from 'react-router-dom';
import "./Ia.css"
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const VotreIdentiteeIA = () => {

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
                 <h2>Intitulé du poste : Chercheur en Intelligence Artificielle (IA)</h2>
                 <h2>Domaine : Informatique, Data Science, Machine Learning, Deep Learning</h2>
               </li>
               <br />
               <li className="fade-in-li">
                 <h2>Mission principale : Concevoir, expérimenter et améliorer des modèles d’IA pour résoudre des problèmes complexes et faire progresser la recherche scientifique.</h2>
                </li>

                <li className='fade-in-li'>
                    <h2>Niveau d’études : Doctorat ou Master en Intelligence Artificielle, Informatique, Mathématiques appliquées ou disciplines connexes</h2>
               
                </li>
            
            </ul>
                  <ul className='list-ul-list'> 
                    <li className='fade-in-li'>  

                    <h2>Compétences clés :</h2>
                    <br />
                        
                        <h2>pogrammation (Python, TensorFlow, PyTorch, etc.)</h2>
                        <br />
                        <h2>Connaissance approfondie des algorithmes d’apprentissage automatique</h2>
                        <br />
                        <h2>Analyse et traitement de données massives</h2>
                        <br />
                        <h2>Conception et évaluation de modèles IA</h2>
                        <br />
                        <h2>Rédaction scientifique et communication des résultats</h2>
                    </li>
                    <br /> 
                 <li className="fade-in-li">
                 <h2>Objectif : Faire avancer les connaissances en IA et contribuer à l’innovation technologique à travers la recherche, la publication et l’expérimentation.</h2>
        
               </li>

             </ul>

          
               <div className='ia-button' >
                 <button onClick={navToCvIngenieur} >Postuler <FaArrowRight className='arr'></FaArrowRight>  </button>
             </div>
     
          
         </div>
         
       </div>
    
  )
}

export default VotreIdentiteeIA