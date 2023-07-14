import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import audi from "../assets/images/audi.png"; // para llamar la imagen se importa y se crea en objeto
import lambo from "../assets/images/lambo.png";
import ferrari from "../assets/images/ferrari.jpg";

const InicioPag = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="cold-12">
          <h1>Nuevo Titulo</h1>
        </div>
      </div>
      <h1>Pagina de Inicio</h1>
      <Link to={"/perfil"}>Ir a perfil</Link>
      <br />
      <Link to={"/ejercicio"}>Ir a ejercicio</Link>
      <br />
      <br />
      <div className="row">
        <div className="col-4">
          <h1>Audi</h1>
          <div className="card" style={{ width: "18rem" }}>
            <img src={audi} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Audí</h5>
              <p className="card-text">
                Audi es una empresa multinacional alemana fabricante de
                automóviles de gama alta de lujo y deportivos.
              </p>
              <Link
                to="https://www.audi.cl/"
                target="_blank"
                className="btn btn-primary"
              >
                Ir a la pagina.
              </Link>
            </div>
          </div>
        </div>

        <div className="col-4">
          <h1>Ferrari</h1>
          <div className="card" style={{ width: "18rem" }}>
            <img src={ferrari} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Audí</h5>
              <p className="card-text">
                Ferrari es un fabricante de automóviles superdeportivos con sede
                en Maranello, provincia de Módena, en la región de
                Emilia-Romaña, Italia.
              </p>
              <Link
                to="https://www.ferrari.com/es-CL"
                target="_blank"
                className="btn btn-primary"
              >
                Ir a la pagina.
              </Link>
            </div>
          </div>
        </div>

        <div className="col-4">
          <h1>Lamborghini</h1>
          <div className="card" style={{ width: "18rem" }}>
            <img src={lambo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Audí</h5>
              <p className="card-text">
                Lamborghini S.p.A., comúnmente conocido como Lamborghini,mal
                pronunciado habitualmente, es un fabricante italiano de
                automóviles superdeportivos fundado en 1963 por el fabricante de
                tractores Ferruccio Lamborghin
              </p>
              <Link
                to="https://www.lamborghini.com/en-en"
                target="_blank"
                className="btn btn-primary"
              >
                Ir a la pagina.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioPag;
