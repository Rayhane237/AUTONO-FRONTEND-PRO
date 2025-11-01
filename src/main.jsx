import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Thech from "./components/TechCompos/Tech"
import Apropos from "./components/Apropos/Apropos"
import Career from "./components/Career/Career"



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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
