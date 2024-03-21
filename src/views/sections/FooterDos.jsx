import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoS from '../../images/darkthemesolid.png';
import SubscriptionForm from './SubscriptionForm';

const FooterDos = () => {
  return (
    <div id='footertwo'>
      <div className='container'>
        <div className='content'>
          <div className='left-container'>
            <div className='logo'>
              <Link id='logo' to={"/"}>
                <img src={LogoS} alt="Logo Silicon" />
              </Link>
            </div>
            <div className='text'>
              <p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. </p>
            </div>
            <div className='sub-title'>
              <h1>Subscribe to our newsletter</h1>
            </div>
            <div className='sub-form'>
              <SubscriptionForm />
            </div>
            <div className='copyright'>
              <p>2024. All rights reserved. Silicon Template</p>
            </div>
          </div>

          <div className='right-container'>
            <div className='links'>
            <NavLink className="nav-link-footer" to="/nopage">Home<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">Services<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">Case Studies<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">About Us<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">News & Insight<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">Terms & Conditions<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">Privacy Policy<i></i></NavLink>
            </div>
            <div className='links-2'>
            <NavLink className="nav-link-footer" to="/nopage">Facebook<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">LinkedIn<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">Twitter<i></i></NavLink>
            <NavLink className="nav-link-footer" to="/nopage">Instagram<i></i></NavLink>
            </div>
            <div className='info'>
              <h1>Contact Us</h1>
              <NavLink className="nav-link-footer-email" to="/nopage">example@email.com<i></i></NavLink>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default FooterDos;
