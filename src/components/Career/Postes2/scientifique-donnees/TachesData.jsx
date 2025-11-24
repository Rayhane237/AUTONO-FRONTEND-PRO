import React, { useEffect } from "react";


const TachesData = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in-li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
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
              Collecter, nettoyer et organiser de grands ensembles de données
              provenant de différentes sources.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Concevoir et développer des modèles de machine learning et
              d’intelligence artificielle pour analyser les données.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Évaluer la performance des modèles et optimiser leur précision et
              leur efficacité.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Interpréter les résultats et transformer les données en
              informations exploitables pour l’entreprise.
            </h2>
          </li>
        </ul>

        <ul className="list-ul-list">
          <li className="fade-in-li">
            <h2>
              Collaborer avec les ingénieurs IA et les équipes produits pour
              intégrer les modèles dans les applications concrètes.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Réaliser une veille technologique sur les nouvelles approches en
              Data Science et en apprentissage automatique.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Publier les résultats de recherche et contribuer à
              l’amélioration continue des processus analytiques.
            </h2>
          </li>
          <li className="fade-in-li">
            <h2>
              Garantir la qualité, la sécurité et l’éthique dans la gestion des
              données et des modèles utilisés.
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TachesData;
