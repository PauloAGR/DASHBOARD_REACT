import React from "react";
import '../styles/Header.css';

const Header = () => {
    return(
        <header> 
        <nav>
            <img src="/imagenes/Logo_de_la_Universidad_del_Cauca.svg" alt="Logo" class="logo"/>
            <h1 class="titulo">LABORATORIO DE ELECTRONICA II</h1>
            <div class="iot">
                <img src="/imagenes/iot.png" alt="iot" />
            </div>
        </nav>
    </header>

                
    );
}
export default Header;