import React from 'react'
import './topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({menuOpen, setMenuOpen}) { 
  return (
    <div className={'topbar ' + (menuOpen ? 'active' : '')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" ><img className='logo' src={menuOpen ? 'assets/mylogowhite.png' : 'assets/mylogoblue.png'} alt=""></img></a>   
          <div className="itemsContainer">
            <PersonIcon  className="icon"/>
            <span>+212 6 91 00 97 22</span>

          </div>
          <div className="itemsContainer">
            <EmailIcon className="icon"/>
            <span>yassineahlaou@gmail.com</span>

          </div>
        </div>
        
        <div className="right">

          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          
        </div>
      </div>

    </div>
  )
}
