import React from 'react'
import { Github, Linkedin } from 'react-bootstrap-icons';
import { useRef } from 'react';
import emailjs, {} from '@emailjs/browser';
import { IoLogoVercel } from 'react-icons/io5';


function Contect() {
 
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w4ds9a6', 'template_vzgums1', form.current, 'Ib39WafhbKaB086Fl')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            window.alert("Message Sent")
            
        }, (error) => {
            console.log(error.text);
        });

    
        
    };
    

  return (


 <div id='Contect'>
 <div className='contact'>
    <section id="contact" className="contact-section">
        <div className="container-xl">
            <div className="contact-info-cont">
                <div className="contact-info">
                    <div className="section_title">
                        <h2>Let's Connect</h2>
                    </div>
                    <p>
                        Please fill out the form on this section to contact with me.
                    </p>
                     <div className="icon-gallery">
                     <ul className="contact-social">
                        <li className='vercel' id='vercel'>
                            <a href="https://www.linkedin.com/in/rajani-panchal-869a0b24b/" target='_blank'>
                                <Linkedin />
                            </a>
                        </li>
                        <li className='vercel' id='vercel'>
                            <a href="https://vercel.com/rajanipanchal" target='_blank'>
                                <IoLogoVercel />
                            </a>
                        </li>
                        <li className='vercel' id='vercel'>
                            <a href="https://github.com/Rajani panchal" target='_blank'>
                                <Github />
                            </a>
                        </li>
            
                      
                    </ul>
                     </div>
                </div>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <h3>Let's collaborate and create something together!</h3>
                    <input type="text"  name="user_name" id='name' className="input-control" placeholder="Your Name"  required/>
                    <input type="text" id='email' className="input-control" placeholder="Your Email"  name="user_email" required/>
                    <textarea className="input-control" placeholder="Message" name="message" required/>
                    <div className="form-btn"><button className="btn primary-btn" type='submit' value="Send" >Send Message</button></div>
                   
                </form>
                
                
            </div>
        </div>
    </section>
</div>
 </div>
  )
}

export default Contect