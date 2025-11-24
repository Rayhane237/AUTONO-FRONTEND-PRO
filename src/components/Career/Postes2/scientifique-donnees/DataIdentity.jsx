import React, { useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DataIdentity = () => {
  const navigate = useNavigate();
  const navToIng = () => navigate("/CvIngenieur"); 

  useEffect(() => {
    const items = document.querySelectorAll(".fade-in-li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // déclenche une seule fois
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
      <h1>Votre identité</h1>
      <div className="identitee-container">
        <ul className="list-ul-list">
          <li className="fade-in-li">
            <h2>Intitulé du poste : Chercheur en Data Science</h2>
            <h2>
              Domaine : Science des données, Intelligence Artificielle,
              Statistique, Informatique, Apprentissage automatique
            </h2>
          </li>
          <br />
          <li className="fade-in-li">
            <h2>
              Mission principale : Mener des recherches avancées en science des
              données afin de concevoir, optimiser et évaluer des modèles
              prédictifs et analytiques pour résoudre des problématiques réelles.
            </h2>
          </li>

          <li className="fade-in-li">
            <h2>
              Niveau d’études : Master ou Doctorat en Data Science,
              Statistiques, Informatique, Mathématiques appliquées ou domaines
              connexes.
            </h2>
          </li>
        </ul>

        <ul className="list-ul-list">
          <li className="fade-in-li">
            <h2>Compétences clés :</h2>
            <br />
            <h2>Programmation (Python, R, SQL, TensorFlow, PyTorch, etc.)</h2>
            <br />
            <h2>Analyse exploratoire et visualisation des données</h2>
            <br />
            <h2>Modélisation statistique et apprentissage automatique</h2>
            <br />
            <h2>Traitement et gestion de données massives</h2>
            <br />
            <h2>Communication scientifique et vulgarisation des résultats</h2>
          </li>
          <br />
          <li className="fade-in-li">
            <h2>
              Objectif : Transformer les données en connaissances exploitables
              pour soutenir la recherche, l’innovation et la prise de décision
              intelligente.
            </h2>
          </li>
        </ul>

        <div className="ia-button">
          <button onClick={navToIng}>
            Postuler <FaArrowRight className="arr" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataIdentity;
