import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import './Login.scss'

const Login = () => {
  const { currentUser, login } = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Heloo World.</h1>
          <p>
            Connect with friends, family and other people you know. Share photos
            and videos, send messages and get updates.
          </p>
          <span>Don't you have account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
