import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import OdishaMapPage from './pages/odisha-map-page';
import ContactPage from './pages/contact-page';
import EcoRetreatPage from './pages/eco-retreat-page';
import EcoRetreatGalleryPage from './pages/eco-retreat-gallery-page';
import ThanksPage from './pages/thanks-page';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/odisha-map' element={<OdishaMapPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/thanks' element={<ThanksPage />} />
          <Route path='/eco-retreat/:location' element={<EcoRetreatPage />} />
          <Route path='/eco-retreat-gallery/:location' element={<EcoRetreatGalleryPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
