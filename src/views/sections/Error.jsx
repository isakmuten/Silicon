import React from 'react'
import { NavLink } from 'react-router-dom'

import Error_1 from '../../images/404.svg'

const Error = () => {
  return (
    <section id="error" className='error-section'>
      <div className="error-container">

        <div className="error-box"><img src={Error_1} alt="Error 1" /></div>

        <div className="error-message-1">
          <h1>Ooops!</h1>
          <p>The page you looking for is not available.</p>
          <div className="copyright"><p>2024. All rights reserved. Silicon Template</p></div>
        </div>

        <div className="error-home">
          <NavLink className="error-home-button" to="/#overview">
          <a id="home-btn" class="btn btn-home" href="signin.html"><i class="far fa-house"></i>Go to homepage</a>    
          </NavLink>
        </div>
      </div>

    </section>
  )
}

export default Error
