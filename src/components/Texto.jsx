import React from 'react';

function Texto({ texto }) {
    return (
        <>
            <div className='texto-principal' id="textoprincipal"> {texto} </div>
        </>
    )
}

export default Texto;