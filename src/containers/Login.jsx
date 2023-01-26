import React from "react";
import '../styles/Login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    return(   
        <>
            <Header/>
            <section class="contenedor">
                <article>
                    <h2>Grupo 1</h2>
                    <h3>Integrantes</h3>
                    <ul>
                        <li>Juliana Zuñiga</li>
                        <li>Biyeidy Zambrano</li>
                        <li>Franki Alemeza Samboni</li>
                    </ul>
                    <p>Esta grafica es la indica el valor del voltaje mediante un potenciometro</p>
                    <a href="/graficatemp" class="button">Ver grafica</a>
                </article>
                <article>
                    <h2>Grupo 2</h2>
                    <h3>Integrantes</h3>
                    <ul>
                        <li>Camila Sotelo</li>
                        <li>Juan Pablo Garzon</li>
                        <li>David Guerrero</li>
                    </ul>
                    <p>Esta grafica es la indica el valor de voltaje mediante un potenciometro</p>
                    <a href="/graficatemp" class="button">Ver grafica</a>
                </article>
                <article>
                    <h2>Grupo 3</h2>
                    <h3>Integrantes</h3>
                    <ul>
                        <li>Daniel Morales</li>
                        <li>Paulo Guerrero</li>
                        <br/>
                    </ul>
                    <p>Esta grafica es la indica un sensor de fotoresistencia</p>
                    <a href="/graficatemp" class="button">Ver grafica</a>
                </article>
            </section>
            <Footer/>
        </>     
    );
}

export default Login;