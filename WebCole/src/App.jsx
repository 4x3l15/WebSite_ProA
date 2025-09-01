import "bootstrap/dist/css/bootstrap.min.css";
/* INSTALAR BOOTSTRAP ANTES DE CORRER EL CODIGO POR QUE SI NO ANDA, npm i bootstrap */
/* INSTALAR EN CONSOLA npm init -y npm install express mongoose cors*/
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Jumbotron from "./componentes/Jumbotron";
import MainContent from "./componentes/MainContent";
<<<<<<< HEAD
import Carrusel from "./componentes/Carrusel";
=======
import Mapa from "./componentes/Mapa";
>>>>>>> f10812dd984d3dca892a9800520891013404bff4

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Carrusel/>
      <MainContent />
      <Mapa />
      <Footer />

      
    </>
  );
}

export default App;
