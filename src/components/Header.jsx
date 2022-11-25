import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

    const inicio = useNavigate();

    function idioma() {
        inicio("/languaje")
    }

    return (
        <>
            <div className="banner">
                <ul>
                    <li> <label><span className='mots'>MUSIC of the SPHERES</span> <span className='gen'>GENERATOR</span></label> </li>

                    <li style={{ float: "right" }}> <label className='engranaje' onClick={() => idioma()}>⚙</label> </li> {/* style={{ float: "right" }} */}
                </ul>
            </div>
        </>
    )
}

export default Header;