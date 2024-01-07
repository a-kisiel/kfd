import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Slideshow from './components/Slideshow';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Forms from './pages/Forms';
import Home from './pages/Home';
import Updates from './pages/Updates';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/forms",
    element: <Forms />,
  },
  {
    path: "/updates",
    element: <Updates />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
]);

function supportsWebp() {
  var elem = document.createElement('canvas')
  if (!!(elem.getContext && elem.getContext('2d')))
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;

  return false;
};

root.render(
  <React.StrictMode>
    <div className="App">
      <Slideshow webpSupport={supportsWebp}/>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);