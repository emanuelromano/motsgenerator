import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

function Footer() {

  // const info = useNavigate();
  const [idioma, setIdioma] = useState("");

  useEffect(() => {
    setIdioma(localStorage.getItem("idioma"))
  }, [])

  // function boton() {
  //   info("/info")
  // }

  return (
    <>
      <div className="footer">
        <footer>
          <h3>{idioma === "es" ? "HECHO POR" : "MADE BY"} <a className="link" href="https://linktr.ee/planetacoldplay" target="_blank" rel="noreferrer">PLANETA COLDPLAY</a> · 2022</h3>
          {/* <label className='link' onClick={() => boton()}>{idioma === "es" ? "INFO" : "ABOUT"}</label> */}
        </footer>
      </div>
    </>
  )
}

export default Footer;