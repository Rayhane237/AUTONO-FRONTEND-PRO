import React from 'react';
import "./CV.css";
import NavHome from '../../nav/NavHome';
import Carriere from "../../../components/HomeAppCompos/Carriere/Carriere";

const CvIngenieur = () => {
  return (
    <div>
      <div className="content-career">
        <div className="NavHome">
          <NavHome />
        </div>

        <div className="career-hero-section">
          <h1 className="career-h1">REJOIGNEZ-NOUS</h1>
        </div>

        <form className="form-content">
          <h1>Envoyer votre candidature</h1>

          <div className="form-group">
            <h3>Prénom</h3>
            <input type="text" placeholder="Entrez votre prénom" />
          </div>
                 <br />
          <div className="form-group">
            <h3>Nom de famille</h3>
            <input type="text" placeholder="Entrez votre nom de famille" />
          </div>
              <br />
          <div className="form-group">
            <h3>E-mail</h3>
            <input type="email" placeholder="Entrez votre adresse e-mail" />
          </div>
                 <br />
          <div className="form-group">
            <h3>Téléphone</h3>
            <input type="number" placeholder="Entrez votre numéro de téléphone" />
          </div>
            <br />
          <div className="form-group">
            <h3>Poste</h3>
            <select>
              <option>-- Sélectionnez un poste --</option>
              <option>Ingénieur Électricien</option>
              <option>Scientifique des Données</option>
              <option>Chercheur en IA</option>
              <option>Chercheur en Apprentissage Profond</option>
            </select>
          </div>
              <br />
          <div className="form-group">
            <h3>URL du CV</h3>
            <input type="text" placeholder="Entrez le lien de votre CV" />
          </div>
             <br />
          <div className="form-group">
            <h3>URL Linkedin</h3>
            <input type="text" placeholder="Entrez votre profil LinkedIn" />
          </div>
          <br />
          <div className="form-group">
            <h3>Commentaire</h3>
            <input id="comment" placeholder="Parlez-nous un peu de vous"></input>
          </div>
            <br />
          <button className="cv-btn">Envoyer</button>
        </form>

        <Carriere />
      </div>
    </div>
  );
};

export default CvIngenieur;
