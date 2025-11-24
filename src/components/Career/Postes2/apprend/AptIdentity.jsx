import React, { useEffect } from "react";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AptIdentity = () => {
  const navigate = useNavigate();
  const navToCvIng = () => navigate("/CvIngenieur");

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
            <h2>Intitulé du poste : Chercheur en Apprentissage Profond</h2>
            <h2>
              Domaine : Intelligence Artificielle, Deep Learning, Vision par
              ordinateur, Traitement du langage naturel
            </h2>
          </li>
          <br />
          <li className="fade-in-li">
            <h2>
              Mission principale : Concevoir, entraîner et évaluer des réseaux
              de neurones profonds pour résoudre des problèmes complexes tels
              que la perception visuelle, la reconnaissance de modèles ou la
              prise de décision autonome.
            </h2>
          </li>

          <li className="fade-in-li">
            <h2>
              Niveau d’études : Master ou Doctorat en Intelligence Artificielle,
              Informatique, Mathématiques appliquées ou domaines connexes.
            </h2>
          </li>
        </ul>

        <ul className="list-ul-list">
          <li className="fade-in-li">
            <h2>Compétences clés :</h2>
            <br />
            <h2>
              Programmation avancée (Python, TensorFlow, PyTorch, Keras, etc.)
            </h2>
            <br />
            <h2>Connaissance approfondie des architectures de réseaux neuronaux</h2>
            <br />
            <h2>
              Expérience en traitement d’images, vision par ordinateur ou NLP
            </h2>
            <br />
            <h2>
              Maîtrise des techniques de régularisation, optimisation et
              apprentissage supervisé/non supervisé
            </h2>
            <br />
            <h2>Analyse et interprétation des performances de modèles IA</h2>
          </li>
          <br />
          <li className="fade-in-li">
            <h2>
              Objectif : Développer des systèmes intelligents basés sur le Deep
              Learning pour rendre les véhicules autonomes plus sûrs,
              perceptifs et autonomes.
            </h2>
          </li>
        </ul>

        <div className="ia-button">
          <button onClick={navToCvIng}>
            Postuler <FaArrowRight className="arr" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AptIdentity;
