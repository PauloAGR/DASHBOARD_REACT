import Sensores from "./components/SensorsList"
import Layout from "./containers/Layout"
import Login from "./containers/Login"
import Header from "./containers/Header"
import Footer from "./containers/Footer"
import GraficaTemp from "./containers/GraficaTemp"
import { Route } from "react-router";

function App() {
   return (   
    <Layout>
      <Header/>
      <Login/>      
      <Footer/>
    </Layout>
    //<Sensores />    
    //<GraficaTemp/>
    
  )
}


export default App