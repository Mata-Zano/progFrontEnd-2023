import React, {useEffect,useState} from "react";
import ReactDom from "react-dom/client";
import { Route, Routes, Link } from "react-router-dom";
import InicioPag from "./components/InicioPag";
import PerfilPag from "./components/perfilPag";
const App = () => {
  return (
        <Routes>
            <Route path="/" element={<InicioPag />}/>
            <Route path="/perfil" element={<PerfilPag />}/>
        </Routes>
  )
}

export default App;
