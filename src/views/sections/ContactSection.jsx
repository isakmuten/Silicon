import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactForm from './ContactForm'


const ContactSection = () => { 
  return (
 <section id="contact">
  <div className="contact-container">
    <div className='left-column'>
                
      <div className='information'>
        
        <h1 id='contact-us'>Contact Us</h1>
          
        <div className='email-btn-container'>
          <button id="btn-email">
                    <NavLink className="nav-link-email-btn" to="/contact-form">
                      <i className="fa-regular fa-envelope"></i>
                    </NavLink>
                  </button>
          </div>

        <p id='email-title'>
          <h1>Email us</h1>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <NavLink className="nav-link-cf" to="/contact-form">Leave a message<i id="arrow" className="fa-regular fa-arrow-right"></i></NavLink>
        </p>

        <div className='email-btn-container'>
          <button id="btn-email">
                    <NavLink className="nav-link-email-btn" to="/contact-form">
                      <i className="fa-regular fa-user-plus"></i>
                    </NavLink>
                  </button>

          </div>
        <p id='career-title'>
          <h1>Careers</h1>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <NavLink className="nav-link-cf" to="/contact-form">Send an application<i id="arrow" className="fa-regular fa-arrow-right"></i></NavLink>
        </p>
      </div>
    </div>

    <div className='right-column'>
    <ContactForm />      
      </div>

  </div>
 </section>
  )
}

export default ContactSection