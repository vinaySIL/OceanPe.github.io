import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import createBrowse
// import {createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'; // Import BrowserRouter
import Home from './pages/Home/Home';
import MicroATM from './pages/MicroATM/MicroATM';
import Services from './pages/Services/Services';
import DMT from './pages/Services/DMT';
import BBPS from './pages/Services/BBPS';
import PrepaidCard from './pages/Services/PrepaidCard';
import Pos from './pages/Pos/Pos';
import LoanServices from './pages/Services/LoanServices';
import About from './pages/AboutUs/about';
import PageNotFound from './pages/PageNotFound/pageNotFound';
import Header from './common/Header';
import Footer from './common/Footer';
import P2p from './pages/P2p/P2p';
import P2m from './pages/P2m/P2m';
import SoundBox from './pages/SoundBox/SoundBox';

import MainServices from './pages/servicepage/services';
import ScrollToTop from './pages/common/downloadapp/scrollTotp';
import Destributor from './pages/DistributerPage/Distributer';
import IncomeCalculator from './pages/incomecalculator/incomeCalculator';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    errorElement : <><Header/> <PageNotFound/> <Footer/> </>,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/services',
        element: <MainServices />,
      },
      {
        path: '/microatm',
        element: <MicroATM />,
      },
      {
        path: '/income-calculator',
        element: <IncomeCalculator />,
      },
      {
        path: '/servicesadhaar',
        element: <Services />,
      },
      {
        path: '/servicedmt',
        element: <DMT />,
      },
      {
        path: '/servicebbps',
        element: <BBPS />,
      },
      {
        path: '/serviceprepaid',
        element: <PrepaidCard />,
      },
      {
        path: '/pos',
        element: <Pos />,
      },
      {
        path: '/loanservices',
        element: <LoanServices/>,
      },
      {
        path: '/aboutus',
        element: <About/>,
      },
      {
        path: '/p2p',
        element: <P2p />,
    },
      {
        path: '/p2m',
        element: <P2m />,
    },
      {
        path: '/soundbox',
        element: <SoundBox />,
    },
      {
        path: '/becomedistributor',
        element: < Destributor/>,
    },
    ]
  },

], {
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();