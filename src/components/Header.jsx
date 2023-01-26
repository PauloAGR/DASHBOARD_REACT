import React from "react";
import '../styles/Header.css';

import logo from '../assets/Logo_de_la_Universidad_del_Cauca.svg';
import iot from '../assets/iot.png';

const Header = () => {
    return(
        <header> 
        <nav>
            <img src={logo} alt="Logo" className="logo"/>
            <h1 className="titulo">LABORATORIO DE ELECTRONICA II</h1>
            <div className="iot">
                <img src={iot} alt="iot" />
            </div>
        </nav>
    </header>                
    );
}

export default Header;