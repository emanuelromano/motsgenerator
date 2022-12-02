import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Idioma from './Idioma';
import Generador from './Generador';
import Info from './Info';

// Animaciones
import { AnimatePresence } from 'framer-motion';

function Rutas() {

    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            {/* exitBeforeEnter reemplazado por mode='wait' */}
            {/* Añadir initial={false} a AnimatePresence para evitar animaciones en recarga*/}
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Idioma />} />
                <Route exact path='/languaje' element={<Idioma />} />
                <Route exact path='/generator' element={<Generador />} />
                <Route exact path='/info' element={<Info />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Rutas;