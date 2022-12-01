import React, { useState } from 'react';
import Ajustes from './Ajustes';
import Texto from './Texto';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Generador() {

    const [texto, setTexto] = useState("");
    const [fuente, setFuente] = useState("kaotican");
    // const [idioma, setIdioma] = useState("");

    // useEffect(() => {
    //     setIdioma(localStorage.getItem("idioma"));
    // }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className="contenedor" id="contenedor">

                <div className="texto-caja" id="textocaja">
                    <Texto
                        texto={texto}
                        fuente={fuente}
                    />
                </div>

                <div className="generador-caja">
                    <Ajustes
                        setTexto={setTexto}
                        setFuente={setFuente}
                    />
                </div>
            </div>

            {/* <div className="advertencia" id="advertencia">
                {idioma === "es" ? "⚠ AVISO PARA USUARIOS DE DISPOSITIVOS MÓVILES: Para generar una imagen rectangular (banner) correctamente, recomendamos activar la rotación de pantalla en tu dispositivo, ponerlo de manera horizontal y, una vez así, seleccionar el botón GUARDAR IMAGEN." : "⚠ WARNING TO MOBILE DEVICE USERS: In order to generate a correct rectangular image (banner), we suggest to toggle screen rotation on your device, put it in landscape mode and, once then, touch the SAVE IMAGE button."}
                <p>
                </p>
            </div> */}

            {/* <div className="espacio" id="espacio"></div> */}

            <Footer />
        </motion.div>
    )
}

export default Generador;