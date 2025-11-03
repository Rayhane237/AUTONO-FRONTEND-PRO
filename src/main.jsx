import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Thech from "./components/TechCompos/Tech"
import Apropos from "./components/Apropos/Apropos"
import Career from "./components/Career/Career"

import IngElectrique from './components/Career/Postes2/Ing-electrique/IngElectrique'
import ChercheurIa from './components/Career/Postes2/Chercheur-ia/ChercheurIa';
import ScientifiqueData from './components/Career/Postes2/scientifique-donnees/ScientifiqueData';
import Apprendre from './components/Career/Postes2/apprend/Apprentissage';

import CvIngenieur from './components/Career/les CVs/CvIngenieur';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:"/thech",
    element: <Thech />,
  },
   {
    path:"/Apropos",
    element: <Apropos />,
  },
   {
    path:"/Career",
    element: <Career />,
  },
  {
    path:"/ing-electrique",
    element: <IngElectrique />,
  },
  {
    path:"chercheur-ia",
    element: <ChercheurIa />,
  },
  {
    path:"/scientifique-donnees",
    element: <ScientifiqueData />
  },
  {
     path: "/apprentissage-profond",
     element: <Apprendre />
  },
  {
     path: "/CvIngenieur",
     element: <CvIngenieur />
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
