import React, { useEffect } from "react";
import "./TachesIng.css";

const TachesIng = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in-li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Trigger once
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
        <h2>Concevoir et réaliser des schémas électriques et électroniques selon les normes de sécurité et de performance.</h2>
      </li>
      <li className="fade-in-li">
        <h2>Installer, tester et valider les systèmes et équipements électriques avant leur mise en service.</h2>
      </li>
      <li className="fade-in-li">
        <h2>Diagnostiquer et corriger les pannes ou dysfonctionnements sur les circuits et installations électriques.</h2>
      </li>
      <li className="fade-in-li">
        <h2>Optimiser la consommation énergétique des systèmes pour améliorer leur efficacité.</h2>
      </li>
    </ul>

    <ul className="list-ul-list">
      <li className="fade-in-li">
        <h2>Assurer la maintenance préventive et corrective des installations électriques.</h2>
      </li>
      <li className="fade-in-li">
        <h2>Collaborer avec les équipes mécaniques et informatiques pour intégrer les systèmes électriques dans les produits finaux.</h2>
      </li>
      <li className="fade-in-li">
        <h2>Réaliser des tests de conformité et rédiger des rapports techniques détaillés.</h2>
      </li>
    </ul>
  </div>
</div>

  );
};

export default TachesIng;
