import React, { useContext } from 'react'
import './Navbar.scss'
import HomeIcon from '@mui/icons-material/Home'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import GridViewIcon from '@mui/icons-material/GridView'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Link } from '@mui/material'
import { ThemeContext } from '../../../Context/ThemeContext'
import { AuthContext } from '../../../Context/AuthContext'

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link>
          <span style={{ textDecoration: 'none' }}>FaceInsta </span>
        </Link>
        <HomeIcon />
        {theme ? (
          <WbSunnyIcon onClick={toggle} />
        ) : (
          <DarkModeIcon onClick={toggle} />
        )}
        <GridViewIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon />
        <EmailIcon />
        <NotificationsIcon />
        <div className="user">
          <img src={currentUser.profile} alt="profile pic of user" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
