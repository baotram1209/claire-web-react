import React from 'react';
import { Link } from 'react-router-dom';
// import champ from '../assets/champ.JPG';
const Tarif = () => {
  return (
    <>
      <div className="container container-tarif">
        <h1 className="page-header">Tarif et remboursement</h1>
        <div className="page-content page-content-basic">
          <p>Les séances ne sont pas remboursées par la Sécurité Sociale.</p>
          <p>
            Certaines mutuelles acceptent de prendre en charge un nombre
            déterminé de séances, avec des conditions variables. Je vous invite
            à vous tourner vers la vôtre pour connaitre sa position sur ce
            sujet. Je vous informe que je ne suis pas titulaire d’un numéro
            ADELI.
          </p>
          <p>
            Si vous en faites la demande, je vous délivrerai une facture
            correspondant aux séances effectuées.{' '}
          </p>
          <p>La séance coûte 65€ et dure 55 minutes.</p>
        </div>
      </div>
    </>
  );
};

export default Tarif;
