import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <div className="container">
                <div className="col-6 ml-auto mr-auto mt-4">
                    <Link to="/generate" className="btn btn-primary btn-lg btn-block mb-4 text-center">Genera tus llaves</Link>
                    <Link to="/authenticate" className="btn btn-success btn-lg btn-block text-center">Autenticate</Link>
                </div>
            </div>
        </>
    )
}

export default Home