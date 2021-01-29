import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const API = process.env.REACT_APP_API

const Decryption = () => {
    // State para agregar a la peticion el archivo de la llave
    const { register, handleSubmit } = useForm()

    // State para el estado del passphrase
    const [shown, setShown] = useState(false)

    // State que guarda si la llave o passphrase coindicen
    const [pass, setPass] = useState(undefined)

    // Funcion que cambia el estado del passphrase
    const switchShown = () => setShown(!shown)

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.file[0])
        formData.append("file-key", data.fileKey[0])
        formData.append("passphrase", data.passphrase)

        const res = await fetch(`${API}/decryption`, {
            method: 'POST',
            body: formData
        })
        const resData = await res.json()
        console.log(resData.success)
        setPass(resData.success)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Desencripta un mensaje</h1>
                </div>
            </div>
            <div className="row">
                <form 
                    encType="multipart/form-data"
                    onSubmit={ handleSubmit(onSubmit) }
                    className="col"
                >
                    <label className="d-block mt-4">1. Selecciona tu llave privada</label>
                    <input ref={register} type="file" name="fileKey" className="d-block mt-2"/>

                    <label className="d-block mt-4">2. Selecciona el archivo que deseas descifrar</label>
                    <input ref={register} type="file" name="file" className="d-block mt-2"/>

                    <label className="d-block mt-4" htmlFor="InputPassphrase">Ingresa un passphrase</label>

                    <div className="row w-100 w-md-75 mt-2 pl-3">
                        <input
                            className="form-control col-8 d-block"
                            id="InputPassphrase"
                            // onChange={onChangePassphrase}
                            type={shown ? 'text' : 'password'}
                            // value={ passphrase }
                            name = "passphrase"
                            ref={register}
                        />
                        <button onClick={switchShown} type="button" className="btn btn-secondary col-3 col-sm-2 ml-2">
                            { shown ? 'Ocultar' : 'Mostrar' }
                        </button>
                    </div>

                    <button type="submit" className="mt-4 btn btn-success">Descifra el mensaje</button>
                </form>
            </div>
            {!pass ? 
                <p className="mt-4 p-3 mb-2 bg-danger text-white d-inline-block">Asegurate que los archivos y passphrase sean los indicados</p>
            : 
                (   
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col d-flex justify-content-center">
                                <a 
                                    href={API + '/download-message/'} 
                                    className="btn btn-outline-primary btn-lg  ml-auto mr-auto mt-2  text-uppercase"
                                >Descarga el texto descifrado</a>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <Link className="btn btn-danger mt-3 mx-auto" to="/">Regresar al inicio</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Decryption