import React from 'react'
import {Link} from 'react-router-dom'



export default function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      
      <Link className="navbar-brand text-white" to="/">LOGO</Link>
  
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
          <li className="nav-item">
            <Link className="nav-link text-white" to="/todos">Todos</Link>
          </li>
  
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-todo">Add Todo</Link>
          </li>
  
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Dropdown
            </a>
  
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>
  
        </ul>
  
        <Link className="btn btn-secondary" to="/register">Register</Link>
  
      </div>
    </div>
  </nav>
  )
}
