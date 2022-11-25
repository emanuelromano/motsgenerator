import React from 'react';
import { useNavigate } from 'react-router-dom';

function Languaje() {

    const inicio = useNavigate();

    function english() {
        localStorage.setItem("idioma", "en")
        localStorage.setItem("textoinicial", "HELLO")
        inicio("/generator")
    }

    function español() {
        localStorage.setItem("idioma", "es")
        localStorage.setItem("textoinicial", "HOLA")
        inicio("/generator")
    }


    return (
        <>
            <div className="idiomas">
                <button className="boton-idioma" onClick={() => english()}>
                    ENGLISH
                </button>

                <button className="boton-idioma" onClick={() => español()}>
                    ESPAÑOL
                </button>
            </div>
        </>
    )
}

export default Languaje;