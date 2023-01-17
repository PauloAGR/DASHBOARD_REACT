import React from "react";
import '../styles/Footer.css';

const Footer = () => {
    return(
        <footer>
            <ul class="footer-left">
                <li>
                    <a href="">Publicidad</a>
                </li>
                <li>
                    <a href="">Negocios</a>
                </li>
                <li>
                    <a href="">Acerca de</a>
                </li>
                <li>
                    <a href="">Como funciona la busqueda</a>
                </li>
            </ul>
            <ul class="footer-rigth">
                <li>
                    <a href="">Privacidad</a>
                </li>
                <li>
                    <a href="">Condiciones</a>
                </li>
                <li>
                    <a href="">Preferencias</a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;