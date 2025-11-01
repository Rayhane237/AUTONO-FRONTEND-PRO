import React, { useEffect } from "react";
import "./Voiyage.css";

const Voiyage = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

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
    { title: "CRÉATION D'AUTONO ", text: "Créée en 2013, AUTONO est une web app innovante dédiée à la recherche et au développement de technologies d’intelligence artificielle appliquées aux véhicules autonomes. Dès ses débuts, la plateforme a réuni ingénieurs, chercheurs et passionnés de mobilité intelligente autour d’un objectif commun : concevoir des systèmes capables de rendre la conduite plus sûre, plus efficace et plus durable. Grâce à l’intégration de modèles d’apprentissage profond, de capteurs intelligents et de solutions cloud, AUTONO s’est imposée comme un acteur pionnier dans le domaine de la voiture autonome connectée." },
    { title: " DÉBUT DE LA TECHNOLOGIE DE CAPTEUR RÉVOLUTIONNAI", text: "En 2015, AUTONO franchit une étape majeure avec le développement de sa technologie de capteurs intelligents. Cette innovation permet aux véhicules de percevoir leur environnement avec une précision inédite, ouvrant la voie à une nouvelle génération de systèmes de conduite autonome plus sûrs, plus réactifs et entièrement connectés." },

    { title: "2017 — Lancement du système de conduite assistée AUTODRIVE", text: "Deux ans plus tard, AUTONO dévoile AUTODRIVE, une technologie de conduite semi-autonome intégrant apprentissage machine, détection d’obstacles et analyse prédictive. Cette étape propulse l’entreprise parmi les pionniers de la mobilité augmentée par l’IA." },

    { title: "2019 — Expansion et intégration de la connectivité intelligente", text: "AUTONO introduit un écosystème de véhicules connectés capables de communiquer entre eux et avec les infrastructures urbaines. Ce progrès ouvre la voie à un réseau de mobilité coopérative, où chaque véhicule devient un acteur de la sécurité et de l’efficacité collective." },

    { title: "2021 — Transition vers la conduite 100% autonome", text: "Grâce à l’évolution de ses algorithmes et à l’intégration de l’IA prédictive, AUTONO atteint un niveau d’autonomie totale. Le véhicule devient capable d’apprendre, d’adapter sa conduite et de prendre des décisions en temps réel, sans intervention humaine." },

    { title: "2023 — Intelligence éthique et durabilité", text: "Consciente des enjeux environnementaux et sociétaux, AUTONO oriente sa recherche vers une IA responsable, conciliant performance technologique, éthique et éco-mobilité durable." },
  ];

  return (
    <div className="body-voiyage">
             <div className="voiyage-cards">
      <h1>Notre voyage jusqu'ici</h1>
      {cards.map((c, i) => (
        <div key={i} className="card">
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Voiyage;
