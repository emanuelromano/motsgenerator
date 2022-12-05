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
            <div className='sticky'>
                <div className="banner">
                    <div className="wrapper">
                        <div className="marquee">
                            <p>
                                · <span style={{ fontFamily: "alienfont", color: "white", textShadow: "0px 0px 20px white" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "eli", color: "yellow", textShadow: "0px 0px 20px yellow" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "kaotican", color: "violet", textShadow: "0px 0px 20px violet" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "mirrortext", color: "orange", textShadow: "0px 0px 20px orange" }}>MUSIC of the SPHERES GENERATOR</span> ·
                            </p>
                            <p>
                                · <span style={{ fontFamily: "alienfont", color: "white", textShadow: "0px 0px 20px white" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "qblok", color: "rgb(50, 180, 255)", textShadow: "0px 0px 20px rgb(50, 180, 255)" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "aquamarinef", color: "rgb(91, 192, 255)", textShadow: "0px 0px 20px rgb(91, 192, 255)" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "supersolar", color: "rgb(255, 217, 0)", textShadow: "0px 0px 20px rgb(255, 217, 0)" }}>MUSIC of the SPHERES GENERATOR</span> ·
                            </p>
                            <p>
                                · <span style={{ fontFamily: "alienfont", color: "white", textShadow: "0px 0px 20px white" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "voltik", color: "rgb(199, 239, 255)", textShadow: "0px 0px 20px rgb(199, 239, 255)" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "bloom", color: "rgb(158, 255, 68)", textShadow: "0px 0px 20px rgb(158, 255, 68)" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "elii", color: "rgb(218, 70, 255)", textShadow: "0px 0px 20px rgb(218, 70, 255)" }}>MUSIC of the SPHERES GENERATOR</span> ·
                            </p>
                            <p>
                                · <span style={{ fontFamily: "alienfont", color: "white", textShadow: "0px 0px 20px white" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "spheric", color: "rgb(255, 70, 147)", textShadow: "0px 0px 20px rgb(255, 70, 147)" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "infinitum", color: "rgb(210, 222, 255)", textShadow: "0px 0px 20px rgb(210, 222, 255)" }}>MUSIC of the SPHERES GENERATOR</span> ·· <span style={{ fontFamily: "coloraturan", color: "rgb(203, 181, 255)", textShadow: "0px 0px 20px rgb(203, 181, 255)" }}>MUSIC of the SPHERES GENERATOR</span> ·
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Header;