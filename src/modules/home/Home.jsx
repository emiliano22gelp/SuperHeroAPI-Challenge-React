import React, { useEffect, useState, onSubmit } from "react";
import { useFormik } from "formik";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import Axios from "axios";

const Home = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (user) => {
    setLoadingSubmit(true);
    console.log(user);
    Axios.post(`http://challenge-react.alkemy.org/`, user)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", JSON.stringify(token));
        window.location = "/equipo";
      })
      .catch((err) => {
        // setError(err.response.data.error);
        setError("El email y/o password son incorrectos");
        setLoadingSubmit(false);
        setCurrentUser({ email: user.email, password: "" });
      });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Campo requerido";
    }
    if (!values.password) {
      errors.password = "Campo requerido";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: currentUser,
    onSubmit: (values) => handleSubmit(values),
    validate,
  });

  useEffect(() => {
    formik.setValues(currentUser);
  }, [currentUser]);

  return (
    <React.Fragment>
      <GridContainer
        spacing={5}
        alignItems={"center"}
        alignContent={"center"}
        justify={"center"}
      >
        <GridItem>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h6" gutterBottom>
              Iniciar Sesion
            </Typography>
            <TextField
              id="inputtext"
              type="text"
              label="Email"
              variant="outlined"
              className="input"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email && formik.touched.email}
              helperText={formik.touched.email ? formik.errors.email : null}
            />
            <br />
            <br />
            <TextField
              id="inputPassword"
              type="password"
              label="contraseña"
              variant="outlined"
              className="input"
              name="password"
              placeholder="Contraseña"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password && formik.touched.password}
              helperText={
                formik.touched.password ? formik.errors.password : null
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
              Enviar
            </Button>
          </form>
        </GridItem>
      </GridContainer>
      {error && (
        <Snackbar open={!!error} onClose={() => setError(null)}>
          <SnackbarContent className="error" message={error} />
        </Snackbar>
      )}
    </React.Fragment>
  );
};

export default Home;
