import React, { useState } from "react";
import "./CV.css";
import NavHome from "../../nav/NavHome";
import Carriere from "../../../components/HomeAppCompos/Carriere/Carriere";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CvIngenieur = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    famName: "",
    email: "",
    phone: "",
    poste: "",
    urlCv: "",
    linkedin: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  // Update form data and remove errors as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "Ce champ est requis.";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form async
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Veuillez remplir tous les champs avant de soumettre le formulaire.",
          {position: "top-right",
          autoClose: 3100,
          theme: "colored",
            style:{top:"10rem"}
        });
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/postuler`,
        formData
      );

      if (res.status === 201 || res.status === 304) {
        toast.success("Votre candidature a été envoyée !", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
           style:{top:"10rem"}
         
        });

        setTimeout(() => {
          navigate("/Career");
        }, 1000);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
       
             toast.error(msg, {
             position: "top-right",
             autoClose: 3000,
             theme: "colored",
             style:{top:"10rem"}
           });
    }
  };

  return (
    <div>
      <div className="content-career">
        <div className="NavHome">
          <NavHome />
        </div>

        <div className="career-hero-section">
          <h1 className="career-h1">REJOIGNEZ-NOUS</h1>
        </div>

        <form className="form-content" onSubmit={handleSubmit}>
          <h1>Envoyer votre candidature</h1>
          <br />

          {/** Form fields remain the same, just add name attribute and error display */}
          <div className="form-group">
            <h3>Prénom</h3>
            <input
              name="name"
              type="text"
              placeholder="Entrez votre prénom"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <br />
          <div className="form-group">
            <h3>Nom de famille</h3>
            <input
              name="famName"
              type="text"
              placeholder="Entrez votre nom de famille"
              value={formData.famName}
              onChange={handleChange}
            />
            {errors.famName && <p className="error-text">{errors.famName}</p>}
          </div>

          <br />
          <div className="form-group">
            <h3>E-mail</h3>
            <input
              name="email"
              type="email"
              placeholder="Entrez votre adresse e-mail"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <br />
          <div className="form-group">
            <h3>Téléphone</h3>
            <input
              name="phone"
              type="number"
              placeholder="Entrez votre numéro de téléphone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <br />
          <div className="form-group">
            <h3>Poste</h3>
            <select
              name="poste"
              value={formData.poste}
              onChange={handleChange}
            >
              <option value="">-- Sélectionnez un poste --</option>
              <option>Ingénieur Électricien</option>
              <option>Scientifique des Données</option>
              <option>Chercheur en IA</option>
              <option>Chercheur en Apprentissage Profond</option>
            </select>
            {errors.poste && <p className="error-text">{errors.poste}</p>}
          </div>

          <br />
          <div className="form-group">
            <h3>URL du CV</h3>
            <input
              name="urlCv"
              type="text"
              placeholder="Entrez le lien de votre CV"
              value={formData.urlCv}
              onChange={handleChange}
            />
            {errors.urlCv && <p className="error-text">{errors.urlCv}</p>}
          </div>

          <br />
          <div className="form-group">
            <h3>URL Linkedin</h3>
            <input
              name="linkedin"
              type="text"
              placeholder="Entrez votre profil LinkedIn"
              value={formData.linkedin}
              onChange={handleChange}
            />
            {errors.linkedin && <p className="error-text">{errors.linkedin}</p>}
          </div>

          <br />
          <div className="form-group">
            <h3>Commentaire</h3>
            <input
              name="comment"
              type="text"
              placeholder="Parlez-nous un peu de vous"
              value={formData.comment}
              onChange={handleChange}
            />
            {errors.comment && <p className="error-text">{errors.comment}</p>}
          </div>

          <br />
          <button type="submit" className="cv-btn">Envoyer</button>
        </form>

        <Carriere />
      </div>
      <ToastContainer />
    </div>
  );
};

export default CvIngenieur;
