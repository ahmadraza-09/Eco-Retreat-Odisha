import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import OdishaMapPage from './pages/odisha-map-page';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/odisha-map' element={<OdishaMapPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
