import React, {useEffect,useState} from "react";
import ReactDom from "react-dom/client";
import { Route, Routes, Link } from "react-router-dom";
import Ejercicio from "./components/Ejercicio";
import InicioPag from "./components/InicioPag";
import PerfilPag from "./components/PerfilPag";
const App = () => {
  return (
        <Routes>
            <Route path="/" element={<InicioPag />}/>
            <Route path="/perfil" element={<PerfilPag />}/>
            <Route path="/ejercicio" element={<Ejercicio />}/>
        </Routes>
  )
}

export default App;
