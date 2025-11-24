import React, { useEffect } from "react";


const TachesApt = () => {
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
    <div className="taches-body">
      <h1>Tâches à accomplir</h1>

      <div className="taches-container">
        <ul className="list-ul-list">
          <li className="fade-in-li">
            <h2>
              Concevoir, entraîner et optimiser des modèles de réseaux de neurones profonds pour divers cas d’usage (vision, NLP, recommandation, etc.).
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Expérimenter de nouvelles architectures et techniques d’apprentissage afin d’améliorer la performance des modèles.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Analyser les résultats d’entraînement et ajuster les hyperparamètres pour maximiser la précision et la robustesse.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Collecter, nettoyer et préparer les données nécessaires aux projets d’apprentissage profond.
            </h2>
          </li>
        </ul>

        <ul className="list-ul-list">
          <li className="fade-in-li">
            <h2>
              Documenter les méthodes, résultats et expériences pour assurer la reproductibilité scientifique.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Collaborer avec les chercheurs, ingénieurs et data scientists pour intégrer les modèles Deep Learning dans des solutions réelles.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Rester à jour sur les dernières avancées en intelligence artificielle et proposer des pistes de recherche innovantes.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Participer à la rédaction d’articles scientifiques et à la présentation des travaux lors de conférences.
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TachesApt;
