import React from 'react'
import "./Postes2.css"
import { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Postes2 = () => {
  
    const navigate = useNavigate();

     useEffect(() => {
        const cards = document.querySelectorAll(".card-p2");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add("show");
              else entry.target.classList.remove("show");
            });
          },
          { threshold: 0.2 }
        );
    
        cards.forEach((card) => observer.observe(card));
      }, []);
    
      const cards = [
        { title: "INGÉNIEUR ÉLECTRICIEN ",
           text: "En tant qu’ingénieur électricien chez AUTONO, vous jouerez un rôle essentiel dans la conception, le développement et l’optimisation des systèmes électriques embarqués de nos véhicules autonomes. Vous travaillerez sur l’intégration des capteurs, la gestion énergétique, la connectivité et la sécurité des circuits. Votre mission sera de garantir la fiabilité, l’efficacité et la durabilité de chaque composant, au cœur d’un écosystème technologique alimenté par l’intelligence artificielle et l’innovation continue." 
           ,button:"Postuler",
           path:"/ing-electrique"
        },
        { title: " CHERCHEUR EN INTELLIGENCE ARTIFICIELLE", 
          text: "Au sein d’AUTONO, le chercheur en intelligence artificielle contribue à repousser les limites de la conduite autonome. Il conçoit et perfectionne des modèles d’apprentissage profond capables de comprendre, d’anticiper et de réagir à l’environnement en temps réel. En collaboration avec des experts en robotique, en vision par ordinateur et en traitement du langage, il développe des algorithmes éthiques, performants et durables, au service d’une mobilité plus sûre, plus fluide et plus intelligente."
           ,button:"Postuler"
           ,path:"/chercheur-ia"
         },
    
        { title: "ING. APPRENTISSAGE PROFOND", 
          text: "L’ingénieur en apprentissage profond chez AUTONO conçoit et entraîne des réseaux de neurones avancés capables de percevoir, d’interpréter et de prendre des décisions complexes en temps réel. Son travail permet aux véhicules autonomes de comprendre leur environnement visuel, d’anticiper les comportements routiers et d’adapter leur conduite avec précision. En s’appuyant sur des architectures d’IA innovantes et des ensembles de données massifs, il contribue directement à façonner l’intelligence qui propulse la mobilité du futur."
           ,button:"Postuler",
           path: "/apprentissage-profond"
           
         },
    
        { title: "SCIENTIFIQUE DES DONNÉES" ,
          text:"Le scientifique des données chez AUTONO transforme les volumes massifs d’informations collectées par les capteurs, caméras et systèmes embarqués en connaissances exploitables. Grâce à la modélisation statistique, à l’apprentissage automatique et à la visualisation intelligente des données, il identifie des schémas, optimise les algorithmes de perception et améliore la prise de décision des véhicules autonomes. Son expertise relie la science des données à l’intelligence artificielle, faisant du flux d’informations un moteur de précision, de sécurité et d’innovation pour la mobilité de demain."
           ,button:"Postuler"
           ,path:"/scientifique-donnees"
        },
         {
          title:"Vous n'avez pas trouvé le poste adéquat ? Envoyez-nous votre CV"
           ,button:"Envoyez  cv" ,
           id:"cv-card",
           path:"/envoyer-cv",
           
         }
      ];
    
      return (
        <div className="postes2-body">
          <div className="p2-cards">
           
          {cards.map((c, i) => (
            <div key={i} id={c.id} className="card-p2">
              <h2>{c.title}</h2>
              <p>{c.text}</p>
              <button id={c.id}  className='btn-poste'
                onClick={() => navigate(c.path)} 
              >
                {c.button} <FaArrowRight  className='arrow'/>

              
              </button>
            </div>
          ))}
        </div>
        </div>
  )
}

export default Postes2