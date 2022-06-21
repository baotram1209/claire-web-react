import React from 'react';
import { Link } from 'react-router-dom';
// import champ from '../assets/champ.JPG';
const Attend = () => {
  return (
    <>
      <div className="container container-attend">
        <h1 className="page-header">
          {' '}
          Que pouvez-vous attendre de cette démarche ?
        </h1>
        <div className="page-content page-content-basic">
          <p>
            <b>
              D’abord, ce qui découle de toute demande de relation d’aide :{' '}
            </b>{' '}
            trouver du soutien devant une difficulté, mieux gérer les émotions
            difficiles ou débordantes, prendre du recul pour mieux comprendre la
            situation, recontacter ses propres ressources pour trouver ses
            solutions. Et c’est déjà très précieux et utile.
          </p>
          <p>
            <b>
              Engager un travail sur vous plus profond, si vous le souhaitez,
            </b>{' '}
            appellera de votre part un niveau d’investissement différent. Mettre
            de la conscience sur ce qui nous habite, modifier au fil du temps
            certaines représentations que nous avions de nous-mêmes et des
            autres, être plus en contact avec notre élan de vie, c’est
            gratifiant car cela apporte du mouvement et de la joie, fait gagner
            en liberté de sensation et d’action. Cela peut être par moments
            remuant intérieurement, et je serai attentive au cours de ce
            parcours à la prise en compte et au respect de votre fenêtre de
            tolérance émotionnelle.
          </p>
          <Link to="/mon-approche">
            <button className="button-content">
              Voir l’onglet « Mon approche ».
            </button>
            {/* <PreviousNextButton
              text="Voir l’onglet « Mon approche »."
              onClick={() => navigate(-1)}
              isNext="false"
            /> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Attend;
