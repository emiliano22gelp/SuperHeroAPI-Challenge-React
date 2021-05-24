import React, { useEffect, useState, onSubmit } from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@material-ui/core/Typography";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import { Link } from "react-router-dom";
import "./index.css";
import Axios from "axios";

const Buscador = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [activa, setActiva] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [currentNombre, setCurrentNombre] = useState({
    nombre: "",
  });

  const handleSubmit = async (value) => {
    console.log(value.nombre);
    setLoadingSubmit(true);
    Axios.get(
      `https://superheroapi.com/api.php/4351803974864709/search/${value.nombre}`
    )
      .then((response) => {
        if (response.data.response === "success") {
          setHeroes(response.data.results);
        } else {
          setHeroes([]);
          setLoadingSubmit(false);
          setError("No hay resultados que coincidan con la busqueda");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setActiva(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = "Campo requerido";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: currentNombre,
    onSubmit: (values) => handleSubmit(values),
    validate,
  });

  useEffect(() => {
    formik.setValues(currentNombre);
  }, [currentNombre]);

  function agregarHeroe(heroe) {
    localStorage.setItem("nuevo_heroe", JSON.stringify(heroe));
    localStorage.setItem(
      "mensaje",
      "El SuperHeroe se agrego correctamente al equipo"
    );
    window.location.href = "/equipo";
  }

  function cancelarBusqueda() {
    setActiva(false);
    setHeroes([]);
    setError(null);
    setLoadingSubmit(false);
    window.location = "/buscarHeroe";
  }

  function buscarElementoEnJson(json, elem) {
    var ok = false;
    json.forEach((elemento) => {
      if (elemento.id === elem.id) {
        ok = true;
      }
    });
    return ok;
  }

  function setClose() {}

  return (
    <React.Fragment>
      {console.log(heroes)}
      {heroes.length === 0 && (
        <div>
          <br />
          <Link to={`/equipo/`}>Volver al Equipo</Link>
          <br />
          {error && (
            <Snackbar open={!!error} onClose={() => setError(null)}>
              <SnackbarContent className="warning" message={error} />
            </Snackbar>
          )}
          <GridContainer
            spacing={5}
            alignItems={"center"}
            alignContent={"center"}
            justify={"center"}
          >
            <GridItem>
              <form onSubmit={formik.handleSubmit}>
                <Typography variant="h6" gutterBottom>
                  Buscar Heroes
                </Typography>
                <br />
                <TextField
                  id="inputtext"
                  type="text"
                  label="Nombre"
                  variant="outlined"
                  className="input"
                  name="nombre"
                  placeholder="Nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.nombre && formik.touched.nombre}
                  helperText={
                    formik.touched.nombre ? formik.errors.nombre : null
                  }
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={loadingSubmit}
                >
                  Buscar
                </Button>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      )}
      {heroes.length > 0 && (
        <div>
          <br />
          <Button onClick={(e) => cancelarBusqueda()} color="primary">
            Hacer otra Busqueda
          </Button>
          <br />
          <h2 style={{ textAlign: "center" }}>
            Resultados que coinciden con la busqueda
          </h2>
          <div className="itemsContainer">
            {heroes.map((heroe) => (
              <div class="card" style={{ width: "18rem" }}>
                <br />
                <img
                  class="card-img-top"
                  src={heroe.image.url}
                  alt={heroe.name}
                />
                <div class="card-body">
                  <h5 class="card-title">{`${heroe.name}`}</h5>
                  {buscarElementoEnJson(
                    JSON.parse(localStorage.getItem("equipo")),
                    heroe
                  ) === true && (
                    <h6>Este SuperHeroe ya es miembro del equipo</h6>
                  )}
                  {JSON.parse(localStorage.getItem("equipo")).length === 6 &&
                    buscarElementoEnJson(
                      JSON.parse(localStorage.getItem("equipo")),
                      heroe
                    ) === false && (
                      <h6>No puedes agregar a este SuperHeroe al Equipo</h6>
                    )}
                  {JSON.parse(localStorage.getItem("equipo")).length < 6 &&
                    buscarElementoEnJson(
                      JSON.parse(localStorage.getItem("equipo")),
                      heroe
                    ) === false && (
                      <Button
                        onClick={(e) => agregarHeroe(heroe)}
                        color="primary"
                      >
                        Agregar SuperHeroe al Equipo
                      </Button>
                    )}
                </div>
              </div>
            ))}
            <br />
            <br />
            {JSON.parse(localStorage.getItem("equipo")).length === 6 && (
              <Snackbar
                open={JSON.parse(localStorage.getItem("equipo")).length === 6}
                onClose={() => setClose()}
              >
                <SnackbarContent
                  className="warning"
                  message="Se supero el maximo de superheroes permitidos para agregar al equipo. El maximo es 6."
                />
              </Snackbar>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Buscador;
