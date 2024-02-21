import React from "react"
import logo from "../assets/LOGO.png"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation();

    return (
        <nav>
            <img src={logo}
                alt="Logo" />
            <ul>
                <li>
                    <Link to={"/Home"}
                        className={location.pathname === "/Home" ? "active" : ""}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to={"/About"}
                        className={location.pathname === "/About" ? "active" : ""}>
                        A Propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}