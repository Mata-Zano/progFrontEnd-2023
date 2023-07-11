import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ejercicio = () => {
  const [numero, setNumero] = useState(0);

  const handleValue = (evento) =>{
    setNumero(evento.target.value);
  }
  const handleNumero = (evento) => {
    console.log(numero);
    var resultado;
    for (let i = 1; i < numero.length; i++) {
      resultado = numero * i;
    }
    return alert("Su numero es :" + resultado);
  };
  return (
    <>
      <h1>Bienvenido a Ejercicio</h1>
      <label htmlFor="numero">Numero :</label>
      <br />
      <input 
      type="number" 
      placeholder="Ingrese un numero"
      onChange={handleValue} />
      <br />
      <br />
      <button type="button" onClick={handleNumero}>
        Calcular Factorial
      </button>
      <br />
      <br />

      <Link to={"/"}>Ir a Inicio</Link>
      <br />
    </>
  );
};

export default Ejercicio;
