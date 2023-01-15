import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>FaceInsta Media.</h1>
          <p>
            Connect with friends, family and other people you know. Share photos
            and videos, send messages and get updates.
          </p>
          <span>Don you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
