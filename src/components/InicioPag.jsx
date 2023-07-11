import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const InicioPag = () =>{
    return(
        <div>
            <h1>Pagina de Inicio</h1>
            <Link to={"/perfil"}>Ir a perfil</Link><br />
            <Link to={"/ejercicio"}>Ir a ejercicio</Link>
        </div>
        
    )

}

export default InicioPag