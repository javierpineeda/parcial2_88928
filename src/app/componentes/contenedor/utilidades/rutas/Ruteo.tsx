import { Route, Routes } from "react-router-dom";
import { Administrarequipo } from "../../Equipos/Administrarequipo";
import { Listarequipo } from "../../Equipos/Listarequipo";
import { Registrarequipo } from "../../Equipos/Registrarequipo";
import { Quienessomos } from "./Quienessomos";
import { NoEncontrado } from "../../Noencontrado";
import { Inicio } from "../../Inico";


export const Ruteo = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Inicio />} />

      
      <Route path="/equipos/administrar" element={<Administrarequipo />} />
      <Route path="/equipos/listar" element={<Listarequipo />} />
      <Route path="/equipos/registrar" element={<Registrarequipo />} />

      
      <Route path="/quienes" element={<Quienessomos />} />

    
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
