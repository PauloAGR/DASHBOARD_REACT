import Sensores from "../components/SensorsList";
import Layout from "../containers/Layout";
import Login from "../containers/Login"
import GraficaTemp from "../containers/GraficaTemp"
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
   return (   
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/graficaTemp" element={<GraficaTemp/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App