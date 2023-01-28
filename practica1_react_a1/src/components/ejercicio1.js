import React from 'react';
import './style.css';
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

const Persona = () =>{
    return (
        <div className='personas'>
            <h2>2n DAW  </h2>
            <h2>Jonathan y Herson</h2>
        </div>
    )
}

const Input = () => {
    return (
        <div>
            <form action="#" class="custom-form">
                <div class="form-group">
                    <input type="text" class="form-control" name="user" id="user" placeholder='Introduce datos...' />
                </div>
            </form>
            
        </div>
    )
}

const Enviar = () => {
    return (
        <button className='boton' type='submit'>Enviar</button>
    )
}

export default ejercicio1;