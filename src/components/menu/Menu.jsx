import React from 'react'
import './menu.scss'


export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen ? 'active' : '')} id="menu">
        <ul>
            <li  onClick={()=>setMenuOpen(false)}> 
                <a href="#intro">Home</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">My Portfolio</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#skills">My Skills</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Hire Me!</a>
            </li>

        </ul>

    </div>
  )
}
