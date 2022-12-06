import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';

// -- Planetas --
import neonmooni from '../media/planets/NEONMOONI.jpg';
import kaotica from '../media/planets/KAOTICA.jpg';
import echo from '../media/planets/ECHO.jpg';
import kubik from '../media/planets/KUBIK.jpg';
import calypso from '../media/planets/CALYPSO.jpg';
import supersolis from '../media/planets/SUPERSOLIS.jpg';
import ultra from '../media/planets/ULTRA.jpg';
import floris from '../media/planets/FLORIS.jpg';
import neonmoonii from '../media/planets/NEONMOONII.jpg';
import epiphane from '../media/planets/EPIPHANE.jpg';
import infinitystation from '../media/planets/INFINITYSTATION.jpg';
import coloratura from '../media/planets/COLORATURA.jpg';

// -- Audio --
import audio from '../media/WEDDING BELLS.mp3';

function Ajustes({ setTexto }) {

    const nav = useNavigate();
    const [idioma, setIdioma] = useState("");
    const [oculto, setOculto] = useState(false);
    const [forma, setForma] = useState(1);
    const [fondo, setFondo] = useState(1);
    const [play, setPlay] = useState(false);
    const [estilo, setEstilo] = useState("line-through");

    // let musica = new Audio(audio)
    const musicaRef = useRef(new Audio(audio));

    useEffect(() => {
        setIdioma(localStorage.getItem("idioma"));
        setTexto(localStorage.getItem("textoinicial"));
        // document.getElementById("advertencia").style.display = "none";
        // document.getElementById("espacio").style.display = "none";

        let p = localStorage.getItem("play")

        if (p === "false") {
            setPlay(false);
            setEstilo("line-through");
        } else {
            musicaRef.current.play();
            setPlay(true);
            setEstilo("none");
        }

    }, [setTexto]);

    function textoIngresado(e) {
        let texto = e.target.value;
        setTexto(texto);
    }

    function fuente(e) {
        let numerofuente = e.target.value;
        switchFuente(numerofuente);

        if (fondo === 2) {
            switchImagenFondo(numerofuente);
        }
    }

    function switchFuente(numerofuente) {
        switch (numerofuente) {
            case "1":
                document.getElementById("textoprincipal").style.fontFamily = "eli";
                document.getElementById("textoprincipal").style.color = "yellow";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px yellow, 2px 2px 10px black";
                break;
            case "2":
                document.getElementById("textoprincipal").style.fontFamily = "kaotican";
                document.getElementById("textoprincipal").style.color = "violet";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px violet, 2px 2px 10px black";
                break;
            case "3":
                document.getElementById("textoprincipal").style.fontFamily = "mirrortext";
                document.getElementById("textoprincipal").style.color = "orange";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px orange, 2px 2px 10px black";
                break;
            case "4":
                document.getElementById("textoprincipal").style.fontFamily = "qblok";
                document.getElementById("textoprincipal").style.color = "rgb(50, 180, 255)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(50, 180, 255), 2px 2px 10px black";
                break;
            case "5":
                document.getElementById("textoprincipal").style.fontFamily = "aquamarinef";
                document.getElementById("textoprincipal").style.color = "rgb(91, 192, 255)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(38, 150, 255), 2px 2px 10px black";
                break;
            case "6":
                document.getElementById("textoprincipal").style.fontFamily = "supersolar";
                document.getElementById("textoprincipal").style.color = "rgb(255, 217, 0)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(255, 174, 0), 2px 2px 10px black";
                break;
            case "7":
                document.getElementById("textoprincipal").style.fontFamily = "voltik";
                document.getElementById("textoprincipal").style.color = "rgb(199, 239, 255)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(186, 201, 250), 2px 2px 10px black";
                break;
            case "8":
                document.getElementById("textoprincipal").style.fontFamily = "bloom";
                document.getElementById("textoprincipal").style.color = "rgb(158, 255, 68)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(80, 197, 57), 2px 2px 10px black";
                break;
            case "9":
                document.getElementById("textoprincipal").style.fontFamily = "elii";
                document.getElementById("textoprincipal").style.color = "rgb(218, 70, 255)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(218, 70, 255), 2px 2px 10px black";
                break;
            case "10":
                document.getElementById("textoprincipal").style.fontFamily = "spheric";
                document.getElementById("textoprincipal").style.color = "rgb(255, 70, 147)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(255, 46, 9), 2px 2px 10px black";
                break;
            case "11":
                document.getElementById("textoprincipal").style.fontFamily = "infinitum";
                document.getElementById("textoprincipal").style.color = "rgb(210, 222, 255)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(202, 197, 255), 2px 2px 10px black";
                break;
            case "12":
                document.getElementById("textoprincipal").style.fontFamily = "coloraturan";
                document.getElementById("textoprincipal").style.color = "rgb(203, 181, 255)";
                document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px rgb(228, 182, 255), 2px 2px 10px black";
                break;
            // case "13":
            //     document.getElementById("textoprincipal").style.fontFamily = "auroran";
            //     break;
            default:
                document.getElementById("textoprincipal").style.fontFamily = "kaotican";
                break;
        }
    }

    function cambiarFondo(e) {
        let valor = e.target.value;
        switchCambiarFondo(valor)
    }

    function switchCambiarFondo(valor) {
        switch (valor) {
            case "1": // Gradiente
                setOculto(false);
                setFondo(1);
                switchFuente("2");

                document.getElementById("textoprincipal").style.background = "rgb(2, 0, 36)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(2, 2, 135, 1) 100%)";
                document.getElementById("colorfondo").value = "1";
                document.getElementById("lenguajes").value = "2";
                break;
            case "2": // Imagen
                setOculto(true);
                setFondo(2);
                switchFuente("2");

                document.getElementById("textoprincipal").style.backgroundImage = "url(" + kaotica + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%";
                document.getElementById("imagenfondo").value = "2";
                document.getElementById("lenguajes").value = "2";
                break;
            default:
                setOculto(false);
                setFondo(1);

                document.getElementById("textoprincipal").style.background = "rgb(2, 0, 36)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(2, 2, 135, 1) 100%)";

                break;
        }
    }

    function colorFondo(e) {
        let numerocolor = e.target.value;
        switchColorFondo(numerocolor);
    }

    function switchColorFondo(numerocolor) {
        switch (numerocolor) {
            case "1": // Azul
                document.getElementById("textoprincipal").style.background = "rgb(2, 0, 36)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(2, 2, 135, 1) 100%)";
                break;
            case "2": // Celeste
                document.getElementById("textoprincipal").style.background = "rgb(0, 16, 36)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(22, 94, 153) 100%)";
                break;
            case "3": // Verde
                document.getElementById("textoprincipal").style.background = "rgb(6, 36, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(1, 112, 79) 100%)";
                break;
            case "4": // Lima
                document.getElementById("textoprincipal").style.background = "rgb(6, 36, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(94, 134, 1) 100%)";
                break;
            case "5": // Amarillo
                document.getElementById("textoprincipal").style.background = "rgb(36, 34, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(159, 143, 0) 100%)";
                break;
            case "6": // Naranja
                document.getElementById("textoprincipal").style.background = "rgb(36, 0, 34)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(150, 97, 0)  100%)";
                break;
            case "7": // Rojo
                document.getElementById("textoprincipal").style.background = "rgb(2, 0, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(135, 2, 46) 100%)";
                break;
            case "8": // Rosa
                document.getElementById("textoprincipal").style.background = "rgb(0, 0, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(143, 61, 143) 100%)";
                break;
            case "9": // Magenta
                document.getElementById("textoprincipal").style.background = "rgb(0, 0, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(155, 0, 155) 100%)";
                break;
            case "10": // Violeta
                document.getElementById("textoprincipal").style.background = "rgb(0, 0, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(127, 0, 155) 100%)";
                break;
            case "11": // Gris
                document.getElementById("textoprincipal").style.background = "rgb(0, 0, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(107, 107, 107) 100%)";
                break;
            case "12": // Negro
                document.getElementById("textoprincipal").style.background = "rgb(0, 0, 0)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(34, 34, 34) 100%)";
                break;
            default:
                document.getElementById("textoprincipal").style.background = "rgb(2, 0, 36)";
                document.getElementById("textoprincipal").style.background = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(2, 2, 135, 1) 100%)";
                break;
        }
    }

    function imagenFondo(e) {
        let numerocolor = e.target.value;
        switchImagenFondo(numerocolor);

        if (fondo === 2) {
            switchFuente(numerocolor);
        }
    }

    function switchImagenFondo(numeroimagen) {
        document.getElementById("lenguajes").value = numeroimagen;
        document.getElementById("imagenfondo").value = numeroimagen;
        switch (numeroimagen) {
            case "1":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + neonmooni + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "2":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + kaotica + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "3":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + echo + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "4":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + kubik + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "5":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + calypso + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "6":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + supersolis + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "7":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + ultra + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "8":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + floris + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "9":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + neonmoonii + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "10":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + epiphane + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "11":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + infinitystation + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            case "12":
                document.getElementById("textoprincipal").style.backgroundImage = "url(" + coloratura + ")";
                document.getElementById("textoprincipal").style.backgroundPosition = "center";
                document.getElementById("textoprincipal").style.backgroundSize = "auto 100%px";
                break;
            default:

                break;
        }
    }

    // function formato(e) {
    //     let formato = e.target.value;
    //     switch (formato) {
    //         case "1":
    //             setForma(1);
    //             document.getElementById("textocaja").style.width = "450px";
    //             document.getElementById("advertencia").style.display = "none";
    //             document.getElementById("contenedor").style.margin = "0px 0px 60px 0px";
    //             document.getElementById("espacio").style.display = "none";
    //             break;
    //         case "2":
    //             setForma(2);
    //             document.getElementById("textocaja").style.width = "800px";
    //             document.getElementById("advertencia").style.display = "block";
    //             document.getElementById("contenedor").style.margin = "0px 0px 0px 0px";
    //             document.getElementById("espacio").style.display = "block";
    //             break;
    //         default:
    //             break;
    //     }
    // }

    function aleatorio() {
        let numerofuente = Math.trunc(Math.random() * 12) + 1;
        let numerocolor = Math.trunc(Math.random() * 12) + 1;

        if (fondo === 1) {
            switchFuente(numerofuente.toString());
            document.getElementById("lenguajes").value = numerofuente.toString();

            switchColorFondo(numerocolor.toString());
            document.getElementById("colorfondo").value = numerocolor.toString();
        } else if (fondo === 2) {
            switchFuente(numerofuente.toString());
            document.getElementById("lenguajes").value = numerofuente.toString();

            switchImagenFondo(numerofuente.toString());
            document.getElementById("imagenfondo").value = numerofuente.toString();
        }

    }

    // ----- FUNCIONES VIEJAS -----
    //
    // ----- FUNCIÓN VIEJA 1 -----
    // function guardarImagen() {
    //     html2canvas(document.querySelector("#textoprincipal"), {width: 1200, height: 1200}).then(canvas => {
    //         document.body.appendChild(canvas)
    //         console.log(canvas);
    //         simulateDownloadImageClick(canvas.toDataURL(), 'motsgenerator.png');
    //     });
    // }

    // ----- FUNCIÓN VIEJA 2 -----
    // function guardarImagen() {
    //     html2canvas(document.querySelector("#textoprincipal"), { scale: 3 }).then(canvas => {
    //         // document.body.appendChild(canvas)
    //         // console.log(canvas);
    //         simulateDownloadImageClick(canvas.toDataURL(), 'motsgenerator.png');
    //     });
    // }
    //
    // function simulateDownloadImageClick(uri, filename) {
    //     var link = document.createElement('a');
    //     if (typeof link.download !== 'string') {
    //         window.open(uri);
    //     } else {
    //         link.href = uri;
    //         link.download = filename;
    //         accountForFirefox(clickLink, link);
    //     }
    // }
    //
    // function clickLink(link) {
    //     link.click();
    // }
    //
    // function accountForFirefox(click) { // wrapper function
    //     let link = arguments[1];
    //     document.body.appendChild(link);
    //     click(link);
    //     document.body.removeChild(link);
    // }

    function reiniciar() {
        setTexto(localStorage.getItem("textoinicial"));
        document.getElementById("texto").value = "";

        // document.getElementById("formato").value = "1";
        document.getElementById("textocaja").style.width = "450px";

        document.getElementById("lenguajes").value = "2";
        document.getElementById("textoprincipal").style.fontFamily = "kaotican";
        document.getElementById("textoprincipal").style.color = "violet";
        document.getElementById("textoprincipal").style.textShadow = "0px 0px 20px violet";

        setOculto(false);
        switchCambiarFondo("1");
        setForma(1);
        setFondo(1);

        document.getElementById("contenedor").style.margin = "110px 0px 20px 0px";
        // document.getElementById("advertencia").style.display = "none";
        // document.getElementById("espacio").style.display = "none";
    }

    function guardarImagen() {
        let w = document.getElementById("textoprincipal").style.width;
        let h = document.getElementById("textoprincipal").style.height;
        let f = document.getElementById("textoprincipal").style.fontSize;
        let s = document.getElementById("textoprincipal").style.textShadow;

        if (forma === 1) {
            document.getElementById("textoprincipal").style.width = "2000px";
        } else if (forma === 2) {
            document.getElementById("textoprincipal").style.width = "3555px";
        }

        document.getElementById("textoprincipal").style.height = "2000px";
        document.getElementById("textoprincipal").style.fontSize = "220px";
        document.getElementById("textoprincipal").style.textShadow = "0px 0px 90px, 6px 6px 35px black";

        html2canvas(document.querySelector("#textoprincipal"), { scale: 1 })
            .then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/png");
                a.download = 'motsgenerator.png';
                a.click();
            });

        document.getElementById("textoprincipal").style.width = w;
        document.getElementById("textoprincipal").style.height = h;
        document.getElementById("textoprincipal").style.fontSize = f;
        document.getElementById("textoprincipal").style.textShadow = s;
    }

    function idiomaApp() {
        setPlay(false);
        musicaRef.current.pause();
        nav('/languaje');
    }

    function sonido(e) {
        if (play) {
            musicaRef.current.pause();
            setPlay(false);
            localStorage.setItem("play", false);
            setEstilo("line-through");
        } else {
            musicaRef.current.play();
            setPlay(true);
            localStorage.setItem("play", true);
            setEstilo("none");
        }
    }

    function info() {
        setPlay(false);
        musicaRef.current.pause();
        nav('/info');
    }

    // {idioma === "es" ? "" : ""}

    return (
        <>
            <div className="ajustes-caja">
                <input type="text" id="texto" placeholder={idioma === "es" ? "ESCRIBE AQUÍ.." : "WRITE HERE..."} onChange={(e) => textoIngresado(e)} />

                <p>{idioma === "es" ? "LENGUAJE:" : "LANGUAGE:"}</p>

                <select name="lenguajes" id="lenguajes" defaultValue={2} onChange={(e) => fuente(e)}>
                    <option value="1">E.L. I {!oculto ? "(NEON MOON I)" : ""}</option>
                    <option value="2">KAOTICAN {!oculto ? "(KAOTICA)" : ""}</option>
                    <option value="3">MIRROR TEXT {!oculto ? "(ECHO)" : ""}</option>
                    <option value="4">QBLOK {!oculto ? "(KUBIK)" : ""}</option>
                    <option value="5">AQUAMARINE {!oculto ? "(CALYPSO)" : ""}</option>
                    <option value="6">SUPERSOLAR {!oculto ? "(SUPERSOLIS)" : ""}</option>
                    <option value="7">VOLTIK {!oculto ? "(ULTRA)" : ""}</option>
                    <option value="8">BLOOM {!oculto ? "(FLORIS)" : ""}</option>
                    <option value="9">E.L. II {!oculto ? "(NEON MOON II)" : ""}</option>
                    <option value="10">SPHERIC {!oculto ? "(EPIPHANE)" : ""}</option>
                    <option value="11">INFINITUM {!oculto ? "(INFINITY STATION)" : ""}</option>
                    <option value="12">COLORATURAN {!oculto ? "(COLORATURA)" : ""}</option>
                    {/* <option value="13">Auroran (Aurora)</option> */}
                </select>

                <p>{idioma === "es" ? "FONDO:" : "BACKGROUND:"}</p>

                <div className="radiobuttons">
                    <div className="radiolabel">
                        <div style={{ width: "25px" }}>
                            <input type="radio" name="tipofondo" id="fondogradiente" className="radio" value={1} onChange={(e) => cambiarFondo(e)} checked={!oculto} />
                        </div>

                        <label htmlFor="fondogradiente">{idioma === "es" ? "GRADIENTE" : "GRADIENT"}</label>
                    </div>

                    <div className="radiolabel">
                        <div style={{ width: "25px" }}>
                            <input type="radio" name="tipofondo" id="fondoimagen" className="radio" value={2} onChange={(e) => cambiarFondo(e)} checked={oculto} />
                        </div>

                        <label htmlFor="fondoimagen" >{idioma === "es" ? "PLANETA" : "PLANET"}</label>
                    </div>
                </div>

                <br />

                <select name="color-fondo" id="colorfondo" defaultValue={1} hidden={oculto} onChange={(e) => colorFondo(e)}>
                    <option value="1">{idioma === "es" ? "AZUL" : "BLUE"}</option>
                    <option value="2">{idioma === "es" ? "CELESTE" : "LIGHT BLUE"}</option>
                    <option value="3">{idioma === "es" ? "VERDE" : "GREEN"}</option>
                    <option value="4">{idioma === "es" ? "LIMA" : "LIME"}</option>
                    <option value="5">{idioma === "es" ? "AMARILLO" : "YELLOW"}</option>
                    <option value="6">{idioma === "es" ? "NARANJA" : "ORANGE"}</option>
                    <option value="7">{idioma === "es" ? "ROJO" : "RED"}</option>
                    <option value="8">{idioma === "es" ? "ROSA" : "PINK"}</option>
                    <option value="9">{idioma === "es" ? "MAGENTA" : "MAGENTA"}</option>
                    <option value="10">{idioma === "es" ? "VIOLETA" : "VIOLET"}</option>
                    <option value="11">{idioma === "es" ? "GRIS" : "GRAY"}</option>
                    <option value="12">{idioma === "es" ? "NEGRO" : "BLACK"}</option>
                </select>

                <br hidden={oculto} />

                <select name="imagen-fondo" id="imagenfondo" defaultValue={1} hidden={!oculto} onChange={(e) => imagenFondo(e)}>
                    <option value="1">NEON MOON I</option>
                    <option value="2">KAOTICA</option>
                    <option value="3">ECHO</option>
                    <option value="4">KUBIK</option>
                    <option value="5">CALYPSO</option>
                    <option value="6">SUPERSOLIS</option>
                    <option value="7">ULTRA</option>
                    <option value="8">FLORIS</option>
                    <option value="9">NEON MOON II</option>
                    <option value="10">EPIPHANE</option>
                    <option value="11">INFINITY STATION</option>
                    <option value="12">COLORATURA</option>
                </select>

                <br hidden={!oculto} />

                {/* <select className="formato" id="formato" name="formato" defaultValue={1} onChange={(e) => formato(e)}>
                    <option value="1">{idioma === "es" ? "Cuadrado (Foto de perfil)" : "Square (Profile picture)"}</option>
                    <option value="2">{idioma === "es" ? "Rectangular (Banner) ⚠" : "Rectangle (Banner) ⚠"}</option>
                </select> */}

                <div className="botones-mini">
                    <button className="boton-1" onClick={() => aleatorio()}>{idioma === "es" ? " ⤮ ¡ALEATORIO!" : "⤮ RANDOM!"}</button>

                    <button className="boton-2" onClick={() => reiniciar()}>{idioma === "es" ? "↺ REINICIAR" : "↺ RESET"}</button>
                </div>

                <button className="boton-guardar" id="botonguardar" onClick={() => guardarImagen()}>{idioma === "es" ? "⇩ GUARDAR IMAGEN ⇩" : "⇩ SAVE IMAGE ⇩"}</button>

                <div className='linea'></div>

                <div className="botones-mini">
                    <button className="boton-3" onClick={() => idiomaApp()}>{idioma === "es" ? "IDIOMA" : "LANGUAJE"}</button>

                    <button className="boton-4" style={{ textDecoration: estilo }} onClick={(e) => sonido(e)}>{idioma === "es" ? "MÚSICA" : "MUSIC"}</button>

                    <button className="boton-5" onClick={() => info()}>{idioma === "es" ? "INFO" : "ABOUT"}</button>
                </div>
            </div>
        </>
    )
}

export default Ajustes;