import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Layout from './pages/Layout';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Actualite from './pages/Actualite';
import Apropos from './pages/Apropos';
import Realisaions from './pages/Realisations';
import Services from './pages/services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Accueil/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='actualite' element={<Actualite/>}/>
              <Route path='apropos' element={<Apropos/>}/>
              <Route path='realisations' element={<Realisaions/>}/>
              <Route path='services' element={<Services/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
