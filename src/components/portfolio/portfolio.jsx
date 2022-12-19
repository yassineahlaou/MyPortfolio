import React from 'react'
import PortfolioList from '../portfolio_list/PortfolioList'
import './portfolio.scss'
import { useState } from "react";
import {useEffect} from 'react'
import {webappsPortfolio,mobileappsPortfolio,desktopappsPortfolio,restapiPortfolio,sapsPortfolio} from '../../data';

export default function Portfolio() {
  const [selected, setSelected]= useState("Web_Apps")
  const [data, setData]= useState([])
  
  const list = [
    {
      id : "Web_Apps",
      title :"Web Apps",
    },
    {
      id : "Mobile_Apps",
      title :"Mobile Apps",
    },
    {
      id : "Desktop_Apps",
      title :"Desktop Apps",
    },
    {
      id : "Rest_API",
      title :"Rest API",
    },
    {
      id : "SAPs",
      title :"SAPs",
    },


  ]

  useEffect(()=>{
    switch(selected){
      case "Web_Apps":
        setData(webappsPortfolio);
        break;
      case "Mobile_Apps":
        setData(mobileappsPortfolio);
        break;
      case "Desktop_Apps":
        setData(desktopappsPortfolio);
        break;
      case "Rest_API":
        setData(restapiPortfolio);
        break;
      case "SAPs":
        setData(sapsPortfolio);
        break;
      default:
        setData(webappsPortfolio);


    }
    

  },[selected])
  return (
    <div className='portfolio' id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item )=> (<PortfolioList title={item.title} active = {selected === item.id} setSelected={setSelected} id={item.id}></PortfolioList>))}
          
       </ul>
       <div className="container">
        {data.map((d)=>(

        
          
        
        <a href={d.link}><div className="item">
          <img src={d.img} alt=""></img>
          <h4>{d.title}</h4>
          <div className='description'>
            
          {d.teck.map((value, index) => {
            
              
              return <span className="tags" key = {index}>{value}</span>


         
            
            
          })}

         
            
            </div>
          <h3>Check Source Code On My Github</h3>
        </div>
        </a>
        ))}
       

       </div>
       

    </div>
  )
}
