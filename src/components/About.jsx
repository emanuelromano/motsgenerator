import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import build from "../../package.json";

function About() {

  const [idioma, setIdioma] = useState("")

  let version = build.version;

  useEffect(() => {
      setIdioma(localStorage.getItem("idioma"))
  }, [])

  return (
    <>
      <div className="informacion">
        <h2>{idioma === "es" ? "SOBRE ESTA APP:" : "ABOUT THIS APP:"}</h2>

        <p>
          · Music of the Spheres Generator {idioma === "es" ? "versión" : "version"}: {version}
          <br />
          · {idioma === "es" ? "Programado por" : "Programmed by"}: <a target="_blank" rel="noreferrer" href="https://linktr.ee/planetacoldplay">Planeta Coldplay</a> (<a target="_blank" rel="noreferrer" href="https://twitter.com/eromanox">Emanuel</a>)
          <br />
          · {idioma === "es" ? "Diseño de fuentes" : "Font design"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/C_ian_y">Ciany</a>
          <br />
          · {idioma === "es" ? "Arte, planetas y concepto" : "Art, planets and concept"}: <a target="_blank" rel="noreferrer" href="https://twitter.com/pilar_zeta">Pilar Zeta</a>, <a target="_blank" rel="noreferrer" href="https://twitter.com/vicmcmxciii">Victor Scorrano</a> & <a target="_blank" rel="noreferrer" href="https://twitter.com/coldplay">Coldplay</a> (<a target="_blank" rel="noreferrer" href="http://www.coldplay.com">Coldplay.com</a>)
          <br />
          · {idioma === "es" ? "Construido usando" : "Built using"} <a target="_blank" rel="noreferrer" href="https://reactjs.org/">React JS</a>
        </p>

        <Link to='/generator'> <button className="atras">{idioma === "es" ? "⇦ ATRÁS" : "⇦ BACK"}</button> </Link>
      </div>
    </>
  )
}

export default About;