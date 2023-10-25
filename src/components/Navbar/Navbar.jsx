import React from "react";
import "./navbar.css"
import CardWidget from "../CartWidget/CardWidget";

const Navbar = () => {
    return (
        <nav>
            <h1 className="Titulo">Tienda On Line PC Parts</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Componentes PC</a></li>
                <li><a href="#">Ofertas</a></li>
            </ul>
            <CardWidget/>
          
        </nav>
    )
}

export default Navbar;