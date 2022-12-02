import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {

    // const inicio = useNavigate();

    // function idioma() {
    //     inicio("/languaje")
    // }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="banner">
                <ul>
                    <li> <label><span className='mots'>MUSIC of the SPHERES</span> <span className='gen'>GENERATOR</span></label> </li>

                    {/* <li style={{ float: "right" }}> <label className='engranaje' onClick={() => idioma()}>⚙</label> </li> */}
                </ul>
            </div>
        </motion.div>
    )
}

export default Header;