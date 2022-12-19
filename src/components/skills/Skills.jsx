import React from 'react'
import './skills.scss'

import {skills} from '../../data';
import { useState } from "react";

export default function Skills() {
  
  const [currentslide, setCurrentSlide]= useState(0);
  var count = Object.keys(skills).length;
  //console.log(count);
  const handleClick = (way) => { 
   // way === "left" ? setCurrentSlide(currentslide > 0 ? currentslide - 1 : count-1) : setCurrentSlide(currentslide < count - 1 ? currentslide + 1 : 0)
    if (way === "left"){
      if (currentslide > 0){
        setCurrentSlide(currentslide -1)
      }
      else{
        setCurrentSlide(count - 1 )
      }

    }
    else{
      if (currentslide < count -1){
        setCurrentSlide(currentslide + 1)
      }
      else{
        setCurrentSlide(0)
      }
    }
    console.log(currentslide);
  }
  return (
    
    <div className='skills' id="skills">

        <h1>My Skills</h1>
     
      
      <div className="slider" style={{transform: `translateX(-${currentslide * 100}vw )` }}>
      {skills.map((s)=>(
        <div className="container">
       
        <div className="item">
          {s.logo.map((value, index) =>{
          return <img  key={index} src={value} alt=""></img>
})}
          
          
        </div>
        </div>
      ))}
      </div>
        <img src="assets/arrow_left.png" alt="" className={(currentslide === 0 ) ? 'arrow left disp' : 'arrow left'}  onClick={()=> handleClick("left")}></img>
        <img src="assets/arrow_left.png" alt="" className={(currentslide === count - 1 ) ? 'arrow right disp' : 'arrow right'}  onClick={()=> handleClick("right")} ></img>
        
        
        
       
      </div>
   
  )
}
