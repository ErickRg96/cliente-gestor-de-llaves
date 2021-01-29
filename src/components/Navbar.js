import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Sistema de llaves</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/generate">Genera tus llaves</Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/authenticate">Autenticate</Link>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar