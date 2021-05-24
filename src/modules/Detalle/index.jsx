import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Detalle = ({ match }) => {
  const [heroe, setHeroe] = useState([]);

  useEffect(() => {
    const ide = match.params.id;
    JSON.parse(localStorage.getItem("equipo")).forEach((protagonista) => {
      if (protagonista.id === ide) {
        setHeroe(protagonista);
      }
    });
  }, []);

  return (
    <div>
      <br />
      <Link to={`/equipo/`}>Volver al Equipo</Link>
      <br />
      {Object.keys(heroe).length > 0 && (
        <div>
          <br />
          <Typography variant="h4" className="center">
            {`Detalle del SuperHeroe: ${heroe.name}`}
          </Typography>
          <br />
          <div className="center">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Caracteristica</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <h6>Peso</h6>
                  </th>
                  <td>
                    <h6>{heroe.appearance.weight[1]}</h6>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h6>Altura</h6>
                  </th>
                  <td>
                    <h6>{heroe.appearance.height[1]}</h6>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h6>Nombre</h6>
                  </th>
                  <td>
                    <h6>{heroe.name}</h6>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h6>Alias</h6>
                  </th>
                  <td>
                    <h6>{heroe.biography.aliases}</h6>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h6>Color de Ojos</h6>
                  </th>
                  <td>
                    <h6>{heroe.appearance["eye-color"]}</h6>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h6>Color de cabello</h6>
                  </th>
                  <td>
                    <h6>{heroe.appearance["hair-color"]}</h6>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h6>Lugar de Trabajo</h6>
                  </th>
                  <td>
                    <h6>{heroe.work.base}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <br />
      {Object.keys(heroe).length === 0 && (
        <h4>El ID recibido no pertenece a ningun SuperHeroe del Equipo</h4>
      )}
    </div>
  );
};

export default Detalle;
