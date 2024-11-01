import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/componentes/contenedor/utilidades/rutas/Ruteo";
import { Cabecera } from "./app/componentes/contenedor/cabecera";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Cabecera />
        <Ruteo />
      </BrowserRouter>
    </div>
  );
}

export default App;