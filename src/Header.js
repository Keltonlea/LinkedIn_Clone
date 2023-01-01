import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import linkedinLogo from  "./linkedin.png"
import "./Header.css"

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

      </div>
    </div>
  )
}

export default Header
