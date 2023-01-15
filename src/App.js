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

function App() {
  let user = false
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <Outlet />
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
