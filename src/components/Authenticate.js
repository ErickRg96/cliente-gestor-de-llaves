import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const API = process.env.REACT_APP_API

const Authenticate = () => {
    // State para agregar a la peticion el archivo de la llave
    const { register, handleSubmit } = useForm()

    // State para la autenticacion del usuario
    const [ authenticated, setAuthenticated ] = useState()
    
    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.file[0])

        const res = await fetch(`${API}/authenticate`, {
            method: 'POST',
            body: formData
        })
        const resData = await res.json()
        setAuthenticated(resData.success)
    }

    return(
        <div className="container">
            {!authenticated ? 
                <div className="container enter-key">
                    <h1>Autenticate</h1>
                    <form 
                        encType="multipart/form-data"
                        onSubmit={ handleSubmit(onSubmit) }
                    >
                        <label className="d-block mt-4">Selecciona tu llave publica</label>
                        <input ref={register} type="file" name="file"/>
                        <button type="submit" className="btn btn-success">Enviar llave</button>
                    </form>
                </div>
            :
                <div className="container">
                    <h1 className="text-center">Usuario autenticado</h1>

                    <div className="row d-flex flex-column align-items-center mt-4">
                        <Link to="/encryption" className="btn btn-primary btn-lg mb-3">Cifra un archivo</Link>
                        <Link to="/decryption" className="btn btn-warning btn-lg">Descrifra un archivo</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Authenticate