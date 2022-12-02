import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Idioma() {

    const nav = useNavigate();

    function english() {
        localStorage.setItem("idioma", "en");
        localStorage.setItem("textoinicial", "HELLO");
        nav("/generator");
    }

    function español() {
        localStorage.setItem("idioma", "es");
        localStorage.setItem("textoinicial", "HOLA");
        nav("/generator");
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
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

export default Idioma;