import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import build from "../../package.json";

function About() {

  const [idioma, setIdioma] = useState("");

  let version = build.version;

  useEffect(() => {
      setIdioma(localStorage.getItem("idioma"));
  }, [])

  return (
    <>
      <div className="informacion">
        <h2>{idioma === "es" ? "SOBRE ESTA APP:" : "ABOUT THIS APP:"}</h2>

        <p>
          MUSIC of the SPHERES GENERATOR {idioma === "es" ? "versión" : "version"}: {version}
          <br />
          · {idioma === "es" ? "Programado por" : "Programmed by"}: <a target="_blank" rel="noreferrer" href="https://linktr.ee/planetacoldplay">PLANETA COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="https://twitter.com/eromanox">EMANUEL</a>)
          <br />
          · {idioma === "es" ? "Diseño de fuentes" : "Font design"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/C_ian_y">CIANY</a>
          <br />
          · {idioma === "es" ? "Arte, planetas y concepto" : "Art, planets and concept"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/pilar_zeta">PILAR ZETA</a>, <a target="_blank" rel="noreferrer" href="https://twitter.com/vicmcmxciii">VICTOR SCORRANO</a> & <a target="_blank" rel="noreferrer" href="https://twitter.com/coldplay">COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="http://www.coldplay.com">COLDPLAY.COM</a>)
          <br />
          · {idioma === "es" ? "Música" : "Music"}: <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=HFN8z7EoZDs">'WEDDING BELLS'</a> {idioma === "es" ? "por" : "by"} <a target="_blank" rel="noreferrer" href="https://linktr.ee/planetacoldplay">PLANETA COLDPLAY</a> (<a target="_blank" rel="noreferrer" href="https://twitter.com/eromanox">EMANUEL</a>)
          <br />
          · {idioma === "es" ? "Construida usando" : "Built using"} <a target="_blank" rel="noreferrer" href="https://reactjs.org/">REACT JS</a>
        </p>

        <Link to='/generator'> <button className="atras">{idioma === "es" ? "⇦ ATRÁS" : "⇦ BACK"}</button> </Link>
      </div>
    </>
  )
}

export default About;