import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { Link } from 'react-router-dom';



export const Navbar = () => {

    const {auth, logout} = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/map">Map</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">Chat</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-auto">
    <div className="nav-item dropdown">
        <a className="nav-link d-flex align-items-center" href="#" id="configurationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-cog me-2"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="configurationDropdown">
            <li><a className="dropdown-item" href="#">Devices Manager</a></li>
            <li><a className="dropdown-item" href="#">Update Region</a></li>
        </ul>
    </div>
    <div className="mx-3">|</div> {/* Separador */}
    <div className="nav-item dropdown">
        <a className="nav-link d-flex align-items-center" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-user me-2"></i>
            {auth.name}
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Manage Account</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-danger" href="#" onClick={logout}>Logout</a></li>
        </ul>
    </div>
</div>


        </div>
      </div>
    </nav>
  )
}
