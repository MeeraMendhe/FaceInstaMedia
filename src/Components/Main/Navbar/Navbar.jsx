import React from 'react'
import './Navbar.scss'
import HomeIcon from '@mui/icons-material/Home'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import GridViewIcon from '@mui/icons-material/GridView'
// import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Link } from '@mui/material'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link>
          <span style={{ textDecoration: 'none' }}>FaceInsta </span>
        </Link>
        <HomeIcon />
        <DarkModeIcon />
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
          <img
            src="https://media.istockphoto.com/id/1314920164/photo/low-angle-shot-of-a-diverse-group-of-businesspeople-joining-their-heads-together-in-a-huddle.jpg?s=612x612&w=0&k=20&c=nm2X1TzmK-os8W4UZoa9IdVmEYEgQVgjjzFnlfF7AIQ="
            alt="profile pic of user"
          />
          <span>Meera Mendhe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
