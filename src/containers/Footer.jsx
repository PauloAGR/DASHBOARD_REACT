import React from "react";
import '../styles/Footer.css';
import '../imagenes/logo_unicauca.png';

const Footer = () => {
    return(
        <footer>
        <div className="container">

            <div className="footer-left">
                <ul>
                    <li>
                        <img src="../imagenes/logo_unicauca.png" alt="" className="logo-uni" />
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
                        <li>
                            <a href="">Camila Andres Sotelo</a>
                        </li>
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
                    <img src="./imagenes/icons8-facebook-30.png" alt="" />
                    <a href="https://www.instagram.com/danferjr/"><img src="./imagenes/icons8-instagram-24.png" alt=""/></a>
                    
                    <img src="./imagenes/icons8-twitter-30.png" alt="" />
                    <img src="./imagenes/icons8-youtube-play-24.png" alt=""/>
                </div>
            </div>
        </div>
    </footer> 
    );
}
export default Footer;