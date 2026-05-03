import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { getLoggedInUser, isUserLoggedIn, logout } from '../services/AuthService'


export default function Header() {
    const isAuth = isUserLoggedIn();
    const username = getLoggedInUser();

    const navigate = useNavigate();

    function handleLogout(){
      logout();
      navigate('/login')
    }
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
         {
          isAuth&&<li className="nav-item">
            <Link className="nav-link text-white" to="/todos">Todos</Link>
          </li>
  
         }
          
        </ul>
         {
              isAuth && (
                <span className="text-white me-3">
                  Welcome, {username}
                </span>
              )
            }

            
         {
          !isAuth&&<Link className="btn btn-secondary" to="/register">Register</Link>
         }
         {
          isAuth&&<button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
         }
  
      </div>
    </div>
  </nav>
  )
}
