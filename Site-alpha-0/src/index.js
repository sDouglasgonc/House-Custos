import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './Components/pages/Home';
import NavBar from './Components/layout/Navbar';
import Custos from './Components/pages/Custos';
import  './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/custos' element={<Custos/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

