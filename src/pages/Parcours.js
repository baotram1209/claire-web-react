import React from 'react';
import soleil from '../assets/soleil.JPG';
const Parcours = () => {
  return (
    <>
      <div className="container container-parcours">
        <h1 className="page-header">Mon parcours</h1>
        <div className="page-content">
          <p>
            L’accompagnement que j’apporte aujourd’hui est issu de l’ensemble de
            mes expériences, personnelles, professionnelles, associatives.
          </p>
          <p>
            Ma formation de base est universitaire, avec une maitrise de droit
            des affaires. A cette époque, j’ai opté pour la rigueur d’une
            formation juridique en laissant de côté le désir qui me portait vers
            des études de psychologie ou de sociologie. Faute d’une motivation
            réelle pour le Droit, au sortir de mes études je me suis tournée
            vers un travail de rédaction au sein d’un groupe d’organismes
            sociaux. J’y ai utilisé et développé mon intérêt et mon goût pour le
            langage, avec tout ce qu’il offre de possibilités pour rendre compte
            finement de la réalité.
          </p>
          <p>
            La naissance de mes enfants m’a conduite à aborder un parcours de
            thérapie approfondi, en individuel et en groupe. J’ai recontacté à
            ce moment-là mon envie bien ancrée de trouver des outils pour mieux
            comprendre les autres. En 2005 je me suis dirigée assez
            naturellement vers un engagement associatif au sein de SOS Amitié,
            où j’ai été formée à une écoute bienveillante et non-directive.
            L’intérêt que j’y ai porté m’a amenée à occuper, entre 2007 et 2010,
            la fonction de responsable de la formation dans mon antenne locale.
          </p>
          <p>
            Cette période m’a permis d’approcher les réalités humaines dans leur
            plus grande diversité. Elle m’a par ailleurs donné l’occasion
            précieuse de découvrir concrètement plusieurs approches
            thérapeutiques, celles utilisées par les différents professionnels
            intervenant en soutien au sein des groupes de supervision des
            écoutants. L’une d’entre elle, la Gestalt-thérapie, s’est distinguée
            à mes yeux, par l’intérêt qu’elle accordait à ce que je ressentais
            dans l’interaction singulière établie avec une personne appelante,
            me rendant l’écoute plus profonde, plus vivante, et plus fructueuse.
            J’ai décidé alors de m’engager plus avant dans cette direction.
          </p>
          <p>
            J’ai entamé en 2010 ma formation à la psychothérapie gestaltiste des
            relations d’objet (PGRO), au sein de l’Institut de Gestalt du Nord,
            Champ G. Je pratique à titre professionnel depuis 2015.
          </p>
          <div className="parcours-last">
            <p className="parcours-last-subgrid-1">
              Je suis membre active de la toute récente Fédération des
              Professionnels de la Gestalt-thérapie (FPGT), basée sur les
              principes de la Gouvernance Partagée, qui recherche un
              fonctionnement plus démocratique, avec un engagement en conscience
              des participants.
            </p>
            <p className="parcours-last-subgrid-3">
              J’ai accompagné de 2010 à 2020 des personnes affectées par le
              deuil périnatal, au sein de l’association Agapa.
            </p>
            <p className="parcours-last-subgrid-4">
              J’apporte par ailleurs ma participation au fonctionnement de la
              Justice des mineurs, en qualité d’assesseur au sein du Tribunal de
              Pontoise, depuis 2012. C’est un autre lieu d’action et de
              réflexion, où je vérifie l’importance de la dimension
              psychosociale dans la construction et la trajectoire des
              personnes, hors d’un «&nbsp;tout psychologisant&nbsp;».
            </p>
            <img className="parcours-last-subgrid-2" src={soleil} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Parcours;
