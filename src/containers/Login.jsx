import React from "react";
import '../styles/Login.css';

const Login = () => {
    return(
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
            <br/>
            <button class="boton" onclick="window.location.href='graficaTemp.html'"> Ver grafica</button>
            
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
            <button class="boton" onclick="window.location.href='graficaTemp2.html'">Ver grafica</button>

        </article>
        <article>
            <h2>Grupo 3</h2>
            <h3>Integrantes</h3>
            <ul>
                <li>Daniel Morales</li>
                <li>Paulo Guerrero</li>
                <br/>
            </ul>
            <p>Esta grafica es la indica un sensor de temperatura</p>
            <br/>
            <button class="boton" onclick="window.location.href='graficaTemp3.html'">Ver grafica</button>
        </article>
    </section>
    );
}

export default Login;