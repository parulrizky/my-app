import React from 'react'
import { useTokenContext } from '../context/Token'
import { clearStorage } from '../../utility/storage'

import './Navbar.css'
import { login, logout } from '../../utility/auth'

function Navbar() {
  const { token } = useTokenContext()

  window.addEventListener("beforeunload", () => clearStorage())

  return (
    <div className="navbar">
      <div className="navbar-logo">
      </div>
      <div className="navbar-nav">
        {token ? (
          <button onClick={logout} className="btn-logout">Logout</button>
        ) : (
          <button onClick={login} className="btn-login">Login to Spotify</button>
        )}
      </div>
    </div>
  )
}

export default Navbar