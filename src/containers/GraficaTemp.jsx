import React from "react";
import '../styles/GraficaTemp.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sensores from "../components/SensorsList";

const GraficaTemp = () => {
    return(
        <>
            <Header/>
            <section>
                <div class="contenedor">
                    <a href="/" class="button">INICIO</a>
                </div>
                <section>
                    <div class="contenedor-grafica">
                    <Sensores/>
                    </div>
                    <div class="descripcion">
                        <h4>DESCRIPCION</h4>
                        <p> Esta grafica muestra los datos obtenidos de los sensores  </p>
                        <p> conectados a la ESP32 lo cuales estamos observando en pantalla. </p>
                    </div>
                </section>
            </section> 
            <Footer/>
        </>
    );
}

export default GraficaTemp;
