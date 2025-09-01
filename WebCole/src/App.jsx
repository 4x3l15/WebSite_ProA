import "bootstrap/dist/css/bootstrap.min.css";
/* INSTALAR BOOTSTRAP ANTES DE CORRER EL CODIGO POR QUE SI NO ANDA, npm i bootstrap */
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Jumbotron from "./componentes/Jumbotron";
import MainContent from "./componentes/MainContent";
import Mapa from "./componentes/Mapa";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <MainContent />
      <Mapa />
      <Footer />

      
    </>
  );
}

export default App;
