import React from "react";
import { render } from "react-dom";
import "normalize.css";
import Home from "../pages/containers/home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/data";
import data from "../schemas";

// Creating Redux Store
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories,
    friends: data.result.friends
  },
  search: []
};

const store = createStore(reducer, initialState, enhancer);

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
