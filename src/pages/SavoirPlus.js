import React from 'react';
import lien1 from '../assets/lien-1.png';
import lien2 from '../assets/lien-2.png';
import lien3 from '../assets/lien-3.png';
import lien4 from '../assets/lien-4.png';
const SavoirPlus = () => {
  return (
    <>
      <div className="container container-lien">
        <h1 className="page-header">Liens</h1>
        <div className="lien-grid">
          <a
            className="card-lien"
            href="https://gestalt-therapie.org/Bienvenue-sur-le-site-de-la-Gestalt-Therapie.html"
          >
            <img src={lien1} alt="/" />

            <h2>Gestalt-thérapie</h2>
            <p>
              Pour en savoir plus sur la Gestalt-thérapie, vous pouvez consulter
              le site commun à la Société Française de Gestalt et au Collège
              Européen de Gestalt-thérapie (association de Gestalt-thérapeutes
              en France, Suisse et Belgique), riche en informations.
            </p>

            <p class="lien__btn button-content">Aller sur le site</p>
          </a>

          <a className="card-lien" href="https://www.champg.com/">
            <img src={lien2} alt="/" />

            <h2>L’institut de Gestalt du Nord, Champ G</h2>
            <p>
              Ce site vous apportera des informations sur la Psychothérapie du
              Lien, et le type de formation que j’ai suivie. En France, Champ G
              est l’institut de formation de référence pour ce courant
              thérapeutique qui intègre les avancées des recherches en
              neurosciences affectives.
            </p>

            <p class="lien__btn button-content">Aller sur le site</p>
          </a>
          <a className="card-lien" href="https://www.assopgro.com/">
            <img src={lien3} alt="/" />

            <h2> La Psychothérapie du Lien</h2>
            <p>
              C’est le site de l’association professionnelle des
              Gestalt-Thérapeutes du Lien. Vous y trouverez des informations et
              des articles complémentaires.
            </p>

            <p class="lien__btn button-content">Aller sur le site</p>
          </a>

          <a className="card-lien" href="https://www.assopgro.com/">
            <img src={lien4} alt="/" />

            <h2> Fédération des Professionnels de la Gestalt-thérapie</h2>
            <p>
              Cette association est née en 2019 pour rassembler plus largement
              la communauté des praticiens gestaltistes, thérapeutes, coachs et
              consultants. Elle est fondée sur le mode de fonctionnement
              participatif de la Gouvernance Partagée.
            </p>

            <p class="lien__btn button-content">Aller sur le site</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default SavoirPlus;
