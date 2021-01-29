import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Passphrase from './Passphrase'
import DownloadKeys from './DownloadKeys'

const API = process.env.REACT_APP_API

const GenerateKeys = () => {

    // State con datos para generar llaves
    const [data, setData] = useState({
        passphrase: ""
    })

    // Extraemos los datos
    const { passphrase } = data

    // State de error en form
    const [error, setError] = useState(false)

    // State de resultado de la consulta
    const [success, setSuccess] = useState(false)

    // Funcion que se ejecuta al enviar el form
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Valida los datos
        if(passphrase.trim() === "") {
            setError(true)
            return
        }

        setError(false);

        // Asignamos un ID
        data.id = uuidv4();

        // console.log(data)

        const res = await fetch(`${API}/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await res.json()
        // console.log(resData)
        // console.log(resData.success)
        setSuccess(resData.success)
    }

    // Lee los datos del input
    const onChangePassphrase = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }


    return(
        <div className="row">
            <div className="col">
                {!success ? 
                    <Passphrase
                        passphrase = { passphrase }
                        error = { error }
                        handleSubmit = { handleSubmit }
                        onChangePassphrase = { onChangePassphrase }
                    />
                :
                    <DownloadKeys
                        id = { data.id }
                    />
                }
            </div>
        </div>
    )
}

export default GenerateKeys