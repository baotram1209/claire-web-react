import React from 'react';
// import { Link } from 'react-router-dom';
import ciel from '../assets/ciel.jpg';
const Cadre = () => {
  return (
    <>
      <div className="container container-cadre">
        <h1 className="page-header"> Mon cadre éthique et déontologique</h1>
        <div className="page-content page-content-basic">
          <p>
            <b>
              Le cabinet du thérapeute doit offrir à la personne qui s’exprime
              et se confie un lieu calme et un peu à part,
            </b>{' '}
            en retrait de son rythme quotidien, apte à lui offrir la
            confidentialité et le recul nécessaires pour mieux appréhender
            certaines réalités de sa vie.
          </p>
          <p>
            <b>
              Ce n’est pas pour autant un lieu coupé du monde et de ses règles.
            </b>{' '}
            En tant que citoyenne, je suis soumise au droit français sous tous
            ses aspects. En tant que Gestalt-thérapeute, j’ai choisi d’adhérer à
            une Fédération professionnelle, la FPGT (Fédération des
            Professionnels de la Gestalt-thérapie). De ce fait,
          </p>
          <ul>
            <li>
              J’ai pris l’engagement de respecter le code de déontologie de ma
              profession.
            </li>
            <li>
              J’ai accepté la possibilité que des clients estimant que j’ai
              enfreint certains articles de ce code puissent déposer une plainte
              auprès du pôle Ethique et déontologie de cette Fédération.{' '}
            </li>
            <li>
              J’ai choisi de soumettre ma pratique de façon habituelle et
              régulière à la supervision de thérapeutes expérimentés et dûment
              formés.
            </li>
            <li>
              J’ai non seulement l’intérêt mais également l’obligation de
              continuer à me former régulièrement.
            </li>
          </ul>
          <p>
            Vous trouverez ici le{' '}
            <a href="https://www.fpgt.fr/page/912639-code-deotologie-des-therapeutes#therapeute">
              Code de déontologie de la FPGT
            </a>
          </p>
          <p>Parmi ces articles, figurent les éléments suivants :</p>
          <ul>
            <li>
              La relation thérapeutique est une relation professionnelle dans
              laquelle le praticien doit avoir en permanence comme
              préoccupation, dans les options choisies au cours des séances, le
              bénéfice apporté au patient par le processus thérapeutique en
              cours.{' '}
            </li>
            <li>
              Conscient de l'asymétrie de la relation thérapeutique et de la
              capacité d'influence que lui confère sa position, le
              gestalt-thérapeute s'interdit tout abus de pouvoir dans quelque
              domaine que ce soit (financier, sexuel, émotionnel, politique,
              idéologique, etc.), pour son avantage personnel ou celui de toute
              autre personne ou institution.{' '}
            </li>
          </ul>
          <p>
            La Gestalt-thérapie favorise un contact plus profond et plus libre
            des personnes avec elles-mêmes, telles qu’elles sont, avec leur
            histoire, avec les autres. Mon travail s’effectue dans le respect
            des orientations et des convictions des personnes, au service de
            leur possibilité et de leur souhait de développer la conscience et
            la responsabilité de qui elles sont.
          </p>
          <p>
            <b>Le contrat thérapeute/patient :</b>
          </p>
          <div className="cadre-last">
            <p className="cadre-last-subgrid-1">
              Tout engagement du gestalt-thérapeute et de son patient dans une
              relation thérapeutique est considéré comme un contrat, que
              celui-ci soit écrit ou oral. Par conséquent, notre engagement
              conjoint dans le travail thérapeutique fera au préalable l’objet
              d’un accord explicite pour en définir le cadre (honoraires,
              modalités de règlement, lieu, durée et fréquence des séances,
              interruptions, séances manquées ou annulées, arrêt de la
              thérapie).
            </p>
            <img className="cadre-last-subgrid-2" src={ciel} alt="ciel" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadre;
