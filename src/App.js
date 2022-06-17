import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './stylesheets/main.scss';

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <Sidebar />
          <Footer />
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;