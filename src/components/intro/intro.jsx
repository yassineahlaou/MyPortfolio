import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Intro() {

  const textRef = useRef(null);

  useEffect(()=>{
    init(textRef.current, {backDelay:  1500, backSpeed:  60,showCursor: true, strings: ['Softawre Engineer Student', 'Freelancer', 'Dropshipper' ], })

  },[])
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/88443792.jpg" alt=""></img>
        </div>
       

      </div>
      <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm </h2>
            <h1>Yassine Ahlaou</h1>
           <h3><span ref={textRef}> </span></h3>
          </div>
          <a href="#portfolio">
            
            <KeyboardArrowDownIcon  className='icon' ></KeyboardArrowDownIcon>

          </a>
      </div>
    </div>
  )
}
