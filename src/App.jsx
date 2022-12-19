import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import './App.scss'
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen]= useState(false) // useState give an initial value to menuOpen, the second parameter is user to change the value of the first
  return (
    <div className="app">
     <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}  ></Topbar>
     <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen} ></Menu>
     <div className="sections">
      
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
     </div>
    </div>

  );
}

export default App;
