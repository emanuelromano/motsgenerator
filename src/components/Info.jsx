import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import build from "../../package.json";
import { motion } from 'framer-motion';

function Info() {

  const nav = useNavigate();
  const [idioma, setIdioma] = useState("");

  let version = build.version;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIdioma(localStorage.getItem("idioma"));
  }, [])

  function atras() {
    nav('/generator');
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="informacion">
        <h2>{idioma === "es" ? "SOBRE ESTA APP:" : "ABOUT THIS APP:"}</h2>

        <p>
          MUSIC of the SPHERES GENERATOR <br />
          {idioma === "es" ? "versión" : "version"}: {version}
        </p>

        <ul>
          <li>
            {idioma === "es" ? "Programado por" : "Programmed by"}: <a target="_blank" rel="noreferrer" href="https://linktr.ee/planetacoldplay">PLANETA COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="https://twitter.com/eromanox">EMANUEL</a>)
          </li>
          <li>
            {idioma === "es" ? "Diseño de fuentes" : "Font design"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/C_ian_y">CIANY</a>
          </li>
          <li>
            {idioma === "es" ? "Arte, planetas y concepto" : "Art, planets and concept"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/pilar_zeta">PILAR ZETA</a>, <a target="_blank" rel="noreferrer" href="https://twitter.com/vicmcmxciii">VICTOR SCORRANO</a> & <a target="_blank" rel="noreferrer" href="https://twitter.com/coldplay">COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="http://www.coldplay.com">COLDPLAY.COM</a>)
          </li>
          <li>
            {idioma === "es" ? "Música" : "Music"}: <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=HFN8z7EoZDs">'WEDDING BELLS (MUSIC of the SPHERES reprise)'</a> {idioma === "es" ? "por" : "by"} <a target="_blank" rel="noreferrer" href="https://linktr.ee/planetacoldplay">PLANETA COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="https://twitter.com/eromanox">EMANUEL</a>)
          </li>
          <li>
            {idioma === "es" ? "Construida usando" : "Built using"} <a target="_blank" rel="noreferrer" href="https://reactjs.org/">REACT JS</a>
          </li>
        </ul>

        <button className="atras" onClick={() => atras()}>{idioma === "es" ? "⇦ ATRÁS" : "⇦ BACK"}</button>
      </div>
    </motion.div>
  )
}

export default Info;