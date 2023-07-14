import React, { useState } from "react";
import { Link } from "react-router-dom";

const Ejercicio = () => {
  const [numero, setNumero] = useState(0);
  const [factorial, setFactorial] = useState(0);

  const handleValue = (evento) => {
    setNumero(evento.target.value);
  };

  const calcularFactorial = () => {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    setFactorial(resultado);
  };

  return (
    <>
      <h1>Bienvenido a Ejercicio</h1>
      <label htmlFor="numero">Numero :</label>
      <br />
      <input
        type="number"
        placeholder="Ingrese un numero"
        onChange={handleValue}
      />
      <br />
      <br />
      <button type="button" onClick={calcularFactorial}>
        Calcular Factorial
      </button>
      <br />
      <br />
      <p>
        El factorial de {numero} es: {factorial}
      </p>
      <br />
      <Link to={"/"}>Ir a Inicio</Link>
      <br />
    </>
  );
};

export default Ejercicio;
