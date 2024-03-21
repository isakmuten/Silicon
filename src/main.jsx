import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './CSS/main.min.css';


import Home from './views/Home';
import Error from './views/ErrorView';
import Contact from './views/Contact';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />

        </Routes>


      </div>
    </BrowserRouter>
  </React.StrictMode>
);