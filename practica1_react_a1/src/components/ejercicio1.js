import React, { useState} from 'react';
import './style.css';

// Componente principal que renderiza la estructura base de la página
// Seria una funcion que devuelve los componentes creados
function ejercicio1() {
    return (
        <div className='App'>
            <Persona />
            <Input />
            <Input />
            <Input />
            <Enviar />
        </div>
    )
}
// Componente que muestra la cabecera de la página
const Persona = () =>{
    return (
        <div className='personas'>
            <h2>2n DAW  </h2>
            <h2>Jonathan y Herson</h2>
        </div>
    )
}

// Componente que renderiza un input y su lógica de manejo de estado
const Input = () => {
    return (
        <div>
            <form action="#" className="form">
                <div className="container-input">
                    <input type="text" className="datos" name="user" id="user" placeholder='Introduce datos...'/>
                </div>
            </form> 
        </div>
    )
}

// Componente que renderiza el botón de enviar
const Enviar = () => {
    return (
        <div className='boton'>
            <input type="submit" value="Enviar"/>
        </div>
    )
}

// Exportamos la funcion ejercicio1 para usarlaen otro lugar de nuestra Aplicacion.
export default ejercicio1;