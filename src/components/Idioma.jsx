import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="idiomas">
                <button className="boton-idioma" onClick={() => english()}>
                    ENGLISH
                </button>

                <button className="boton-idioma" onClick={() => español()}>
                    ESPAÑOL
                </button>
            </div>
        </motion.div>
    )
}

export default Languaje;