/* INSTALAR BOOTSTRAP ANTES DE CORRER EL CODIGO POR QUE SI NO ANDA, npm i bootstrap */
/* INSTALAR EN CONSOLA npm init -y npm install express mongoose cors*/
/* INSTALAR EN CONSOLA npm install react-router-dom */
/* INSTALAR EN CONSOLA npm i bcryptjs   npm install jsonwebtoken */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import MainContent from "./componentes/MainContent";
import Tareas from "./componentes/Tareas";
import InicioSesion from "./componentes/InicioSesion";
import Mapa from "./componentes/Mapa"
import Calendario from "./componentes/Calendario"
import Novedades from "./componentes/Novedades"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainContent />
            </>
          }
        />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/ubicacion" element={<Mapa />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/Novedades" element={<Novedades />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
