import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const API = process.env.REACT_APP_API

const DownloadKeys = ({ id }) => {
    // State que deshabilita el boton de llave privada
    const [disabled, setDisabled] = useState(false)


    return(
        <div className="container mt-4 align-items-center">
            <h2 className="text-center">¡Tus llaves estan listas!</h2>
            <h4 className="text-center mb-4">Descargalas</h4>
            <div className="row">
                <div className="col d-flex flex-column align-items-center">
                    <h4 className="text-center">Paso 1. Obten tu llave privada</h4>
                    <a 
                        href={API + '/download-prk/' + id }
                        className={`
                            btn btn-outline-primary btn-lg mb-2 text-uppercase
                            ${!disabled ? 'active-link' : 'disabled-link'}
                        `}
                    >Descarga tu llave privada</a>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col d-flex flex-column align-items-center">
                    <h4 className="text-center">Paso 2. Obten tu llave pública</h4>
                    <a 
                        href={API + '/download-puk/' + id } 
                        className="btn btn-outline-primary btn-lg mt-2 text-uppercase" 
                        onClick={ () => setDisabled(true) }
                    >Descarga tu llave pública</a>
                </div>
            </div>

            <div className="row mt-3">
                <Link className="btn btn-danger mt-3 mx-auto" to="/">Regresar al inicio</Link>

            </div>
        </div>
    )
}

export default DownloadKeys