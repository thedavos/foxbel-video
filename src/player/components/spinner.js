import React from 'react';
import './spinner.css'

export const Spinner = props => (
    props.active ?
    <div className="Spinner">
        <span>Cargando...</span>
    </div>
    : null
)