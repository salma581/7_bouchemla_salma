import React from "react";
import "./ErrorPageNotFound.scss";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

export function ErrorPageNotFound(){
    return (
        <>
     <Navbar />
     <Main>
        <div className="error-page">
             <h1>404</h1>
             <h2>Oops! La page que vous demandez n'existe pas</h2>
             <Link to="/">Retourner sur la page d'acceil</Link>
          </div>
     </Main>
     <Footer/>
     </>
    )
    
}
