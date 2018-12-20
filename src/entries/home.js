import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import Home from '../pages/containers/home'
import data from './../api.json'

// react sive para crear componentes
// reactDOM para renderizar y ponerlos en algún lugar

const homeContainer = document.getElementById('home-container')
/* const holaMundo = <h1>Hola Mundo!</h1> */

/* ReactDOM.render(qué renderizo, dónde lo hago)*/
render(
    <Home data={ data } />,
    homeContainer
)