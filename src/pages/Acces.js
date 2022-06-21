import React from 'react';
import { Link } from 'react-router-dom';
import cabinet from '../assets/cabinet.JPG';
const Acces = () => {
  return (
    <>
      <div className="container container-acces">
        <h1 className="page-header">Accès au cabinet</h1>
        <div className="page-content page-content-basic">
          <p>
            <b>
              Mon cabinet est situé dans le quartier du Hazay, à Cergy le Haut.
            </b>
          </p>
          <p>Téléphone : 06 52 40 61 62</p>
          <p>E-mail : cmi.mignot@wanadoo.fr</p>
          <p>Adresse : 1 Villa des aubades 95800 Cergy </p>
          <img src={cabinet} alt="/" />

          <p>
            <b>Plan et moyens d’accès :</b>
          </p>
          <p>A15 : sortie 12 ou 13, à 5 minutes.</p>
          <p>RER ligne A à 800 mètres.</p>
          <p>Bus : Lignes 35 – 36 – 39 – 40.</p>
          <p>
            Stations Vélo 2 à proximité : Station Les Essarts (Avenue des
            Essarts) et Station Avenue du Hazay
          </p>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.2052764464725!2d2.013666015419573!3d49.04472037930619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f3674e7e99e1%3A0x1a38cec684610dbe!2s1%20Vla%20des%20Aubades%2C%2095800%20Cergy!5e0!3m2!1sen!2sfr!4v1644333595705!5m2!1sen!2sfr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Acces;
