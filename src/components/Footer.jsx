import React from "react";
import '../styles/Footer.css';

import logouni from '../assets/logo_unicauca.png';
import facebook from '../assets/icons8-facebook-30.png';
import instragram from '../assets/icons8-instagram-24.png';
import twitter from '../assets/icons8-twitter-30.png';
import youtube from '../assets/icons8-youtube-play-24.png';

const Footer = () => {
    return(
        <footer>
        <div className="container">
            <div className="footer-left">
                <ul>
                    <li>
                        <img src={logouni} alt="" className="logo-uni" />
                        <p>Copyright 2023©</p>
                    </li>
                </ul>
            </div>
            <div className="footer-rigth">
                <div>
                    <h3>Grupo1</h3>
                    <ul className="list-1">
                        <li><a href="">Juliana</a></li>
                        <li><a href="">Biyeidi</a></li>
                        <li><a href="">Franky Alemeza Samboni</a></li>
                    </ul>
                </div>
                <div className="container-grupo2">
                    <h3>Grupo2</h3>
                    <ul className="list-2">
                        <li><a href="">Camila Andres Sotelo</a></li>
                        <li><a href="">Juan Pablo</a></li>
                        <li><a href="">David</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Grupo3</h3>
                    <ul className="list-3">
                        <li><a href="">Paulo Andres Guerrero Ramirez</a></li>
                        <li><a href="">Daniel Fernando Morales Calambas</a></li>
                    </ul>
                </div>
                <div className="container-icons">                
                    <img src={facebook} alt="" />
                    <a href="https://www.instagram.com/danferjr/"><img src={instragram} alt=""/></a>
                    <img src={twitter} alt="" />
                    <img src={youtube} alt=""/>
                </div>
            </div>
        </div>
    </footer> 
    );
}
export default Footer;