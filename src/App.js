import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage.js';
import Parcours from './pages/Parcours.js';
import Approche from './pages/Approche.js';
import Acces from './pages/Acces.js';
import Attend from './pages/Attend.js';
import Cadre from './pages/Cadre.js';
import Contact from './pages/Contact.js';
import Motif from './pages/Motif.js';
import SavoirPlus from './pages/SavoirPlus.js';
import Seance from './pages/Seance.js';
import Tarif from './pages/Tarif.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './stylesheets/main.scss';

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/mon-parcours" element={<Parcours />} />
            <Route path="/mon-approche" element={<Approche />} />
            {/* <Route path="/Acces-au-cabinet" element={<Acces />} /> */}
            <Route path="/qu-attendre-des-seances" element={<Attend />} />
            <Route
              path="/mon-cadre-ethique-et-deontologique"
              element={<Cadre />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pour-quel-motif-consulter" element={<Motif />} />
            <Route path="/en-savoir-plus" element={<SavoirPlus />} />
            <Route
              path="/comment-se-deroulent-les-séances"
              element={<Seance />}
            />
            <Route path="/en-savoir-plus" element={<SavoirPlus />} />
            <Route path="/tarif-et-remboursement" element={<Tarif />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
