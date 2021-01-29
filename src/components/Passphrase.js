import React, { useState } from 'react'

const Passphrase = ({ handleSubmit, onChangePassphrase, passphrase, error }) => {
    // State para el estado del passphrase
    const [shown, setShown] = useState(false)

    // Funcion que cambia el estado del passphrase
    const switchShown = () => setShown(!shown)

    return(
        <div className="container">
            <h1>Genera tus llaves</h1>
            <form onSubmit = { handleSubmit } method="POST" >
                <div className="form-group">
                    <label htmlFor="InputPassphrase">Ingresa un passphrase</label>

                    <div className="container">
                        <div className="row w-100 w-md-75">
                            <input
                                className="form-control col-8"
                                id="InputPassphrase"
                                onChange={onChangePassphrase}
                                type={shown ? 'text' : 'password'}
                                value={ passphrase }
                                name = "passphrase"
                            />
                            <button onClick={switchShown} type="button" className="btn btn-secondary col-3 col-sm-2 ml-2">
                                { shown ? 'Ocultar' : 'Mostrar' }
                            </button>
                        </div>
                    </div>

                    <small id="passphraseHelp" className="form-text text-muted">Asegurate de recordar el passphrase que introduzcas</small>
                </div>

                {error ? 
                    <div className="p-3 mb-2 bg-danger text-white">Ingresa un passphrase</div>
                    : null}

                <button type="submit" className="btn btn-success">Generar</button>

            </form>
        </div>
    )
}

export default Passphrase