import React, { useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const API = process.env.REACT_APP_API


const Encryption = () => {
    // State para agregar a la peticion el archivo de la llave
    const { register, handleSubmit } = useForm()

    // State para mostrar el boton de descarga del archivo encriptado
    const [enabled, setEnabled] = useState(false)

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.file[0])
        formData.append("file-key", data.fileKey[0])

        const res = await fetch(`${API}/encryption`, {
            method: 'POST',
            body: formData
        })
        // console.log(res)
        const resData = await res.json()
        console.log(resData.success)
        setEnabled(resData.success)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Encripta un mensaje</h1>
                </div>
            </div>
            <div className="row">
            <form 
                encType="multipart/form-data"
                onSubmit={ handleSubmit(onSubmit) }
                className="col"
            >
                <label className="d-block mt-4">1. Selecciona tu llave publica</label>
                <input ref={register} type="file" name="fileKey" className="d-block mt-2"/>

                <label className="d-block mt-4">2. Selecciona el archivo que deseas cifrar</label>
                <input ref={register} type="file" name="file" className="d-block mt-2"/>
                
                <button type="submit" className="mt-4 btn btn-success">Cifra el mensaje</button>
            </form>
            </div>

            {enabled ?
                <div className="container">
                    <div className="row mt-4">
                        <div className="col d-flex justify-content-center">
                            <a 
                                href={API + '/download-encrypted/'} 
                                className="btn btn-outline-primary btn-lg mt-2  text-uppercase"
                            >Descarga el texto cifrado</a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <Link className="btn btn-danger mt-3 mx-auto" to="/">Regresar al inicio</Link>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default Encryption