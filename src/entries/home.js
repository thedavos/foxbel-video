import React from "react";
import { render } from "react-dom";
import "normalize.css";
import Home from "../pages/containers/home";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// function logger({ getState, dispatch }) {
//   return next => {
//     return action => {
//       console.log("Viejo Estado: ", getState().toJS());
//       console.log("Acción ejecutada: ", action);
//       const value = next(action);
//       console.log("Nuevo Estado: ", getState().toJS());
//       return value;
//     };
//   };
// }

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// Creating Redux Store
const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

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
