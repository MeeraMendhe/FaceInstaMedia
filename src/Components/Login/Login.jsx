import React from 'react'
import './Login.scss'

const Login = () => {
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
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
