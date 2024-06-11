import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { Link } from 'react-router-dom';



export const Navbar = () => {

    const {auth, logout} = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
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
            <button className="nav-link d-flex align-items-center btn btn-link" id="configurationDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-cog me-2"></i> Configuration
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="configurationDropdown">
              <li><Link className="dropdown-item" to="#">Devices Manager</Link></li>
              <li><Link className="dropdown-item" to="#">Update Region</Link></li>
            </ul>
          </div>
          <div className="mx-3">|</div> {/* Separador */}
          <div className="nav-item dropdown">
            <button className="nav-link d-flex align-items-center btn btn-link" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-user me-2"></i> {auth.name}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><Link className="dropdown-item" to="#">Settings</Link></li>
              <li><Link className="dropdown-item" to="#">Manage Account</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item text-danger btn btn-link" onClick={logout}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
