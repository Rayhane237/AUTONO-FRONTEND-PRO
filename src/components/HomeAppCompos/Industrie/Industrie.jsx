import React, { useEffect } from "react";
import "./Industrie.css";

const Industrie = () => {

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="industrie-content">

      {/* HEADER */}
      <div className="industrie-header fade-in" id="i-top-text">
        <h6>INDUSTRIE</h6>
        <h1>Nos Partenaires</h1>
        <h2>
          Notre vision d’un futur de la mobilité intelligente ne pourrait se
          concrétiser sans la collaboration de partenaires d’exception.
          Ensemble, nous bâtissons un écosystème solide où innovation,
          performance et sécurité se rencontrent.
        </h2>
      </div>

      {/* PARTNERS GRID */}
      <div className="industrie-grid-container">

        <div className="i-row fade-in">
          <div className="i-img">
            <h4>General Transport</h4>
            <img src="/ind1-x.png" alt="General Transport" />
          </div>
        </div>

        <div className="i-row fade-in">
          <div className="i-img">
            <h4>IDI Software</h4>
            <img src="/ind-2.png" alt="IDI Software" />
          </div>
        </div>

        <div className="i-row fade-in">
          <div className="i-img">
            <h4>Imogen Cars</h4>
            <img src="/ind-imogen.png" alt="Imogen Cars" />
          </div>
        </div>

        <div className="i-row fade-in">
          <div className="i-img">
            <h4>TRI-NEX</h4>
            <img src="/ind-tri-nex.png" alt="TRI-NEX" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Industrie;
