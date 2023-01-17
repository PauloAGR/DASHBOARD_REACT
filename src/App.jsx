import Sensores from "./components/SensorsList"
import Layout from "./containers/Layout"
import Login from "./containers/Login"
import Header from "./containers/Header"
import Footer from "./containers/Footer"

function App() {
   return (
    //<Sensores />    
    <Layout>
      <Header/>
      <Login/>   
      <Footer/>
    </Layout>
  )
}

export default App
