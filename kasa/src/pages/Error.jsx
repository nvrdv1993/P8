import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div>
            <Header />
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/Home">Retournez sur la page d'accueil</Link>
        </div>
        <Footer />
        </div>
    )
}