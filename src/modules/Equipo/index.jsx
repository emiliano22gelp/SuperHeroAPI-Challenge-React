import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import { SnackbarContent, Snackbar } from "@material-ui/core";
import ConfirmationDialog from "../commons/ConfirmationDialog";
import "./index.css";

const Equipo = () => {
  function valorInicial() {
    if (localStorage.getItem("equipo") === null) {
      const initialValue = [];
      return initialValue;
    } else {
      return JSON.parse(localStorage.getItem("equipo"));
    }
  }
  const [currentHero, setCurrentHero] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [equipo, setEquipo] = useState(valorInicial());
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [powerStats, setPowerStats] = useState([]);

  useEffect(() => {
    let sumaPesos = 0;
    let sumaAlturas = 0;
    let sumaInteligencia = 0;
    let sumaFuerza = 0;
    let sumaVelocidad = 0;
    let sumaDurabilidad = 0;
    let sumaPoder = 0;
    let sumaCombate = 0;
    JSON.parse(localStorage.getItem("equipo")).forEach((heroe) => {
      sumaPesos =
        sumaPesos + parseInt(heroe.appearance.weight[1].split(" ")[0]);
      sumaAlturas =
        sumaAlturas + parseInt(heroe.appearance.height[1].split(" ")[0]);
      if (heroe.powerstats.intelligence === "null") {
        sumaInteligencia = sumaInteligencia + 0;
      } else {
        sumaInteligencia =
          sumaInteligencia + parseInt(heroe.powerstats.intelligence);
      }
      if (heroe.powerstats.strength === "null") {
        sumaFuerza = sumaFuerza + 0;
      } else {
        sumaFuerza = sumaFuerza + parseInt(heroe.powerstats.strength);
      }
      if (heroe.powerstats.speed === "null") {
        sumaVelocidad = sumaVelocidad + 0;
      } else {
        sumaVelocidad = sumaVelocidad + parseInt(heroe.powerstats.speed);
      }
      if (heroe.powerstats.durability === "null") {
        sumaDurabilidad = sumaDurabilidad + 0;
      } else {
        sumaDurabilidad =
          sumaDurabilidad + parseInt(heroe.powerstats.durability);
      }
      if (heroe.powerstats.power === "null") {
        sumaPoder = sumaPoder + 0;
      } else {
        sumaPoder = sumaPoder + parseInt(heroe.powerstats.power);
      }
      if (heroe.powerstats.combat === "null") {
        sumaCombate = sumaCombate + 0;
      } else {
        sumaCombate = sumaCombate + parseInt(heroe.powerstats.combat);
      }
    });
    let pesoPromedio = sumaPesos / equipo.length;
    let alturaPromedio = sumaAlturas / equipo.length;
    setPeso(pesoPromedio);
    setAltura(alturaPromedio);
    const json = [
      {
        nombre: "Intelligence",
        acumulado: sumaInteligencia,
      },
      {
        nombre: "Strength",
        acumulado: sumaFuerza,
      },
      {
        nombre: "Speed",
        acumulado: sumaVelocidad,
      },
      {
        nombre: "Durability",
        acumulado: sumaDurabilidad,
      },
      {
        nombre: "Power",
        acumulado: sumaPoder,
      },
      {
        nombre: "Combat",
        acumulado: sumaCombate,
      },
    ];
    const sortedList = [...json].sort((a, b) =>
      a.acumulado > b.acumulado ? -1 : 1
    );
    setPowerStats(sortedList);
  }, [equipo]);

  const handleDelete = (heroe) => {
    setOpenConfirm(true);
    setCurrentHero(heroe);
  };

  function eliminar(id) {
    setLoadingDelete(true);
    var json_decode = JSON.parse(localStorage.getItem("equipo"));
    var nuevo_json = [];
    json_decode.forEach(function (currentValue, index, arr) {
      if (json_decode[index].id !== id) {
        nuevo_json.push(json_decode[index]);
      }
    });
    console.log(nuevo_json);
    setEquipo(nuevo_json);
  }

  function agregarHeroe(heroe) {
    var nuevo_decode = JSON.parse(heroe);
    var json_decode = JSON.parse(localStorage.getItem("equipo"));
    var nuevo_json = [];
    json_decode.forEach(function (currentValue, index, arr) {
      nuevo_json.push(json_decode[index]);
    });
    nuevo_json.push(nuevo_decode);
    console.log(nuevo_json);
    localStorage.removeItem("nuevo_heroe");
    setEquipo(nuevo_json);
  }

  const onDelete = () => {
    eliminar(currentHero.id);
    setOpenConfirm(false);
  };

  function setClose() {
    localStorage.removeItem("mensaje");
  }

  return (
    <div>
      <br />
      <Button href={`/buscarHeroe`} color="primary">
        Buscar SuperHeroes
      </Button>
      <br />
      {localStorage.getItem("nuevo_heroe") !== null &&
        agregarHeroe(localStorage.getItem("nuevo_heroe"))}
      {localStorage.getItem("mensaje") && (
        <Snackbar
          open={!!localStorage.getItem("mensaje")}
          onClose={() => setClose()}
        >
          <SnackbarContent
            className="success"
            message={localStorage.getItem("mensaje")}
          />
        </Snackbar>
      )}
      {localStorage.setItem("equipo", JSON.stringify(equipo))}
      {JSON.parse(localStorage.getItem("equipo")).length > 0 && (
        <h1 style={{ textAlign: "center" }}>{`Equipo de SuperHeroes (${
          JSON.parse(localStorage.getItem("equipo")).length
        } en total)`}</h1>
      )}
      <div className="itemsContainer">
        {JSON.parse(localStorage.getItem("equipo")).length === 0 && (
          <h1 className="messages">No hay miembros en el equipo</h1>
        )}
        <ConfirmationDialog
          open={openConfirm}
          onConfirm={onDelete}
          onClose={() => setOpenConfirm(false)}
          loading={loadingDelete}
          message={`¿Esta seguro que desea eliminar a este superheroe del equipo?`}
        />
        {JSON.parse(localStorage.getItem("equipo")).map((heroe) => (
          <div class="card" style={{ width: "18rem" }}>
            <br />
            <img class="card-img-top" src={heroe.image.url} alt={heroe.name} />
            <div class="card-body">
              <h5 class="card-title">{`${heroe.name}`}</h5>
              <p class="card-text">{`Inteligencia: ${heroe.powerstats.intelligence}`}</p>
              <br />
              <p class="card-text">{`Fuerza: ${heroe.powerstats.strength}`}</p>
              <br />
              <p class="card-text">{`Velocidad: ${heroe.powerstats.speed}`}</p>
              <br />
              <p class="card-text">{`Durabilidad: ${heroe.powerstats.durability}`}</p>
              <br />
              <p class="card-text">{`Poder: ${heroe.powerstats.power}`}</p>
              <br />
              <p class="card-text">{`Combate: ${heroe.powerstats.combat}`}</p>
              <Button href={`/detalle/${heroe.id}`} color="primary">
                Detalle
              </Button>
              <Button onClick={(e) => handleDelete(heroe)} color="danger">
                Eliminar
              </Button>
            </div>
          </div>
        ))}
        <br />
      </div>
      {JSON.parse(localStorage.getItem("equipo")).length > 0 && (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Promedio</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <h3>Peso Promedio del Equipo:</h3>
                </th>
                <td>
                  <h4>{`${peso} (en kg)`}</h4>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h3>Altura Promedio del Equipo:</h3>
                </th>
                <td>
                  <h4>{`${altura} (en cm)`}</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">PowerStat</th>
                <th scope="col">Acumulado</th>
              </tr>
            </thead>
            <tbody>
              {powerStats.map((powerstat) => (
                <tr>
                  <th scope="row">
                    <h4>{`${powerstat.nombre}`}</h4>
                  </th>
                  <td>
                    <h4>{`${powerstat.acumulado}`}</h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Equipo;
