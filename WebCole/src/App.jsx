/* INSTALAR BOOTSTRAP ANTES DE CORRER EL CODIGO POR QUE SI NO ANDA, npm i bootstrap */
/* INSTALAR EN CONSOLA npm init -y npm install express mongoose cors*/
/* INSTALAR EN CONSOLA npm install react-router-dom */
/* INSTALAR EN CONSOLA npm i bcryptjs */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Jumbotron from "./componentes/Jumbotron";
import MainContent from "./componentes/MainContent";
import Tareas from "./componentes/Tareas";
import InicioSesion from "./componentes/InicioSesion";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Jumbotron />
              <MainContent />
            </>
          }
        />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/login" element={<InicioSesion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
