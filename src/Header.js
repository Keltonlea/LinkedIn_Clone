import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import linkedinLogo from  "./linkedin.png"
import "./Header.css"
import HeaderOption from "./HeaderOption.js"
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className = 'header'>

      <div className="header_left">
        <img style={{ height: "40px", objectFit: "contain"}}  src={linkedinLogo} alt="linkedin logo" />

        <div className="header_search">
            <SearchIcon />
            <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />

      </div>
    </div>
  )
}

export default Header
