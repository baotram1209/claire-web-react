import React from 'react';
import portrait from '../assets/Claire-Mignot.JPG';

const HomePage = () => {
  return (
    <>
      <div className="container container-home">
        <div className="page-header grid-item-1">
          <h1>Claire MIGNOT – Gestalt&nbsp;thérapeute</h1>
          <h3>Formée à la thérapie du lien</h3>
        </div>

        <img src={portrait} alt="/" className="grid-item-2" />

        <div className="grid-item-3 hero-text">
          <h2>Cergy le Haut</h2>
          <p className="center">Tél: 06 52 40 61 62</p>
        </div>
        <div className="grid-item-4">
          <p>
            Vous trouverez sur ce site des informations sur ma façon de
            travailler, ses fondements et sa mise en œuvre, et aussi sur mon
            parcours personnel. Ces éléments sont importants pour envisager un
            travail avec la thérapeute relationnelle que je suis. Entrer dans le
            dialogue qui est au cœur de ma pratique supposera en effet un niveau
            de confiance suffisant pour oser progressivement, et à votre mesure,
            vous dévoiler, avec ce que vous êtes. Vous pouvez me contacter par
            mail ou téléphone si vous souhaitez des informations complémentaires
            ou des éclaircissements.
          </p>
          <p>
            Un thérapeute a pour « mission » de soutenir l’élan de vie présent
            en chacun de ses patients, doté de sa singularité, son
            environnement, ses besoins, ses désirs, ses difficultés et ses
            ressources propres. Et chaque thérapeute est lui-même singulier. Je
            vous invite à prendre le temps nécessaire pour chercher et en
            trouver un avec qui vous pourrez vous sentir suffisamment à l’aise.
            Bonne recherche, et peut-être à bientôt.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
