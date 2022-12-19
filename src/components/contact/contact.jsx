import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


import './contact.scss'

export default function Contact() {
  
  const [message, setMessage] = useState()
    const form = useRef();
  
    const sendEmail = (e) => {
      console.log(e.target.message.value);
      if (e.target.name.value === "" || e.target.email.value ==="" || e.target.message.value ===""){
        setMessage(false)
        e.preventDefault();
        
      }
      else{
      e.preventDefault();
      
      setMessage(true);

      
  
      emailjs.sendForm('service_pf1ywbp', 'template_bjcrng1', form.current, 'nxw9zIbXUYJZJcBgH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
      }
    }
  
  return (
    <div className='contact' id ="contact">
      <div className="left">
        <img src="assets/hireme.svg" alt=""></img>
        <div className="links">
        <div className="link">
          <a href="https://www.linkedin.com/in/yassine-ahlaou/"><LinkedInIcon className='icon'></LinkedInIcon></a>
        </div>
        <div className="link">
          <a href="https://github.com/yassineahlaou"><GitHubIcon className='icon'></GitHubIcon></a>
        </div>
        <div className="link">
          <a href="https://www.facebook.com/yassine.ahlaou.9/"><FacebookIcon className='icon'></FacebookIcon></a>
        </div>
        <div className="link">
          <a href="https://www.instagram.com/ahlaouyassine/"><InstagramIcon className='icon'></InstagramIcon></a>
        </div>
      </div>
      </div>
      <div className="right">
        <h2>Get in touch with me!</h2>
        
        <form ref={form} onSubmit={sendEmail}>
        {message === true ? <span className='ok'>Message Recieved, Thank you !</span> : (message === false ? <span className='no'>Please fill all the gaps!</span> : '' )}
        <input type="text" name="name" id ="name" placeholder="Enter Your Name"></input>
          <input type="email" name="email" id ="email" placeholder="Enter Your Email"></input>
          <textarea type="text"  name="message" id="message" placeholder='Enter your message'></textarea>
          <button type="submit">Send</button>
          
        </form>

      </div>
    </div>
  )
}
