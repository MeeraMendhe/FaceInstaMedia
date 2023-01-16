import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import Navbar from './Components/Main/Navbar/Navbar'
import Leftbar from './Components/Main/Leftbar/Leftbar'
import Rightbar from './Components/Main/Rightbar/Rightbar'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import './style.scss'
import { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  let user = true

  const { theme } = useContext(ThemeContext)

  const Layout = () => {
    return (
      <div className={theme ? 'theme-dark' : 'theme-light'}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const PrivateRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
