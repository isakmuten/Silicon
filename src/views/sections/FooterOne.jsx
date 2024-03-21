import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import LogoS from '../../images/silicon-logo-light_theme.svg'
import GooglePlayImage from '../../images/googleplay.svg'
import AppstoreImage from '../../images/appstore.svg'

const FooterOne = () => {
  return (
    <div id='footer'>
      <div className='container'>
        <div className='content'>
          <div className='icon'>

            <Link id='logo' to={"/"}>
              <img src={LogoS} alt="Logo Silicon" />
            </Link>
          </div>

            <nav id="menu">
              <div className="menu-links">
                <NavLink className="nav-link" to="/#Overview">Overview</NavLink>
                <NavLink className="nav-link" to="/Features">Features</NavLink>
                <NavLink className="nav-link" to="/News">News</NavLink>
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </div>
            </nav>

            <div className="download-app">
              <Link className="appstore" to="/downloads/appstore"><img src={AppstoreImage} alt="Download on Appstore" /></Link>
              <Link className="googleplay" to="/downloads/googleplay"><img src={GooglePlayImage} alt="Download on Google Play" /></Link>
            </div>

        </div>

        <div className='socials'>

        <div className='facebook'><i class="fa-brands fa-square-facebook"></i></div>

        <div className='twitter'><i class="fa-brands fa-twitter"></i></div>
        
        <div className='instagram'><i class="fa-brands fa-square-instagram"></i></div>

        <div className='youtube'><i class="fa-brands fa-youtube"></i></div>

        </div>

<div className='copyright'>
  <p>2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
</div>

      </div>

      
      </div>
  )
}

export default FooterOne