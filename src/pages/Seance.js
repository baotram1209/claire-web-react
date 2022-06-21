import React from 'react';
import { Link } from 'react-router-dom';
// import champ from '../assets/champ.JPG';
const Seance = () => {
  return (
    <>
      <div className="container container-motif">
        <h1 className="page-header">Comment se déroulent les séances&nbsp;?</h1>
        <div className="page-content page-content-basic">
          <p>
            Les deux ou trois premières séances permettent de prendre contact.
            Vous pourrez aborder les grandes lignes de ce qui vous amène, et je
            répondrai aux questions que vous auriez à me poser. Nous
            clarifierons votre objectif initial de travail, et si j’estime ne
            pas avoir la compétence adaptée, je vous l’indiquerai et vous
            dirigerai vers les personnes compétentes. Si nous décidons de
            poursuivre ensemble, nous prendrons le temps de nous mettre d’accord
            de façon précise et claire sur le cadre qui nous servira d’appui
            (fréquence et durée des séances, honoraires, gestion des
            annulations, déontologie, règles de confidentialité, séances de
            clôture de la thérapie).{' '}
          </p>
          <p>
            Par la suite, nos échanges vous permettront d’évoquer librement ce
            qui vous importe et vous vient à l’esprit, de votre vie
            d’aujourd’hui, d’hier ou de demain. Il se peut que vous ayez envie
            de rester sans parler, ou alors que vous ne sachiez pas comment et
            par quel bout vous y prendre. Tout ce qui émerge au cours de la
            séance est valable et utile, et peut constituer une occasion de
            travail thérapeutique. Des liens apparaitront au fil des séances
            entre différents moments, ou personnes, ou situations de votre vie,
            et vous développerez progressivement une connaissance plus éclairée
            de vous-même et de votre environnement. Enfin, puisque nous sommes
            des êtres en relation, le lien thérapeutique, avec sa couleur et son
            rythme propre à chaque relation, constituera aussi un ressort du
            processus de changement.{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default Seance;
