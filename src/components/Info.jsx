import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import build from "../../package.json";
import { motion } from 'framer-motion';

function Info() {

  const [idioma, setIdioma] = useState("");

  let version = build.version;

  useEffect(() => {
    setIdioma(localStorage.getItem("idioma"));
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="informacion">
        <h2>{idioma === "es" ? "SOBRE ESTA APP:" : "ABOUT THIS APP:"}</h2>

        <p>
          MUSIC of the SPHERES GENERATOR {idioma === "es" ? "versión" : "version"}: {version}
          <br /> <br />
          · {idioma === "es" ? "Programado por" : "Programmed by"}: <a target="_blank" rel="noreferrer" href="https://linktr.ee/planetacoldplay">PLANETA COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="https://twitter.com/eromanox">EMANUEL</a>)
          <br />
          · {idioma === "es" ? "Diseño de fuentes" : "Font design"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/C_ian_y">CIANY</a>
          <br />
          · {idioma === "es" ? "Arte, planetas y concepto" : "Art, planets and concept"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/pilar_zeta">PILAR ZETA</a>, <a target="_blank" rel="noreferrer" href="https://twitter.com/vicmcmxciii">VICTOR SCORRANO</a> & <a target="_blank" rel="noreferrer" href="https://twitter.com/coldplay">COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="http://www.coldplay.com">COLDPLAY.COM</a>)
          <br />
          · {idioma === "es" ? "Música" : "Music"}: <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=HFN8z7EoZDs">'WEDDING BELLS (MUSIC of the SPHERES reprise)'</a> {idioma === "es" ? "por" : "by"} <a target="_blank" rel="noreferrer" href="https://linktr.ee/planetacoldplay">PLANETA COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="https://twitter.com/eromanox">EMANUEL</a>)
          <br />
          · {idioma === "es" ? "Construida usando" : "Built using"} <a target="_blank" rel="noreferrer" href="https://reactjs.org/">REACT JS</a>
        </p>

        <Link to='/generator'> <button className="atras">{idioma === "es" ? "⇦ ATRÁS" : "⇦ BACK"}</button> </Link>
      </div>
    </motion.div>
  )
}

export default Info;