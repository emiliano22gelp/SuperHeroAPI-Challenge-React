import React from "react";
import "./styles.css";

function NotFound() {
  return (
    <div>
      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
      <div class="c">
        <div class="_404">404</div>
        <hr />
        <div class="_1">La Pagina</div>
        <br />
        <div class="_2">buscada no existe</div>
        <br />
        <a class="btn" href="/">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default NotFound;
