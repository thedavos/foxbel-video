import React from "react";
import { render } from "react-dom";
import "normalize.css";
import Home from "../pages/containers/home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import { Map as map } from "immutable";

// Creating Redux Store
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, map(), enhancer);

// react sive para crear componentes
// reactDOM para renderizar y ponerlos en algún lugar
const homeContainer = document.getElementById("home-container");
/* const holaMundo = <h1>Hola Mundo!</h1> */

/* ReactDOM.render(qué renderizo, dónde lo hago)*/
render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
