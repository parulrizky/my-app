import React from 'react'
import { clearStorage } from '../../utility/storage'

import './Navbar.css'
import { login, logout } from '../../utility/auth'
import { useSelector } from 'react-redux'

function Navbar() {
  const token = useSelector((state) => state.token.value)

  window.addEventListener("beforeunload", () => clearStorage())

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>myspotify</h2>
      </div>
      <div className="navbar-nav">
        {token ? (
          <button onClick={logout} className="btn-logout">Logout</button>
        ) : (
          <button onClick={login} className="btn-login">Login</button>
        )}
      </div>
    </div>
  )
}

export default Navbar