import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import Main from "../layout/Main"
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";

 
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    // Layout principal contenant un header et un footer
    element: <HeaderFooterLayout />,

    errorElement: <ErrorPageNotFound />,

    // Définition des routes enfants (les pages du site)
    children: [
      {
        // Route principale (page d'accueil)
        path: "/",
        element: <HomePage />
      },
      
      {
        // Route pour afficher un appartement spécifique
        path: "/flat",
        element: <ApartmentPage />
      },
          
      {
        // Route pour afficher la page "À propos"
        path: "/about",
        element: <About />
      }
    ]
  }
]);
