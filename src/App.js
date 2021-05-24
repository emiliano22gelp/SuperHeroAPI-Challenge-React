import { Switch, Route, Redirect } from "react-router-dom";

//components
import Header from "./modules/header/Header";
import Home from "./modules/home/Home";
import Equipo from "./modules/Equipo";
import NotFound from "./modules/notFound/NotFound";
import Detalle from "./modules/Detalle";
import Buscador from "./modules/Buscador";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}>
                {localStorage.getItem("token") && <Redirect to="/equipo" />}
              </Route>
              <Route exact path="/equipo" component={Equipo}>
                {!localStorage.getItem("token") && <Redirect to="/" />}
              </Route>
              <Route exact path="/detalle/:id" component={Detalle}>
                {!localStorage.getItem("token") && <Redirect to="/" />}
              </Route>
              <Route exact path="/buscarHeroe" component={Buscador}>
                {!localStorage.getItem("token") && <Redirect to="/" />}
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
