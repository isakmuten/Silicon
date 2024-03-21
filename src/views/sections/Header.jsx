import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from '../../images/silicon-logo-light_theme.svg';

const Header = ({ contactPage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentPage = location.pathname.split('/').filter(Boolean).pop();

  return (
    <div className="full-header">
      <header className={contactPage}>
        <div className='contact-header'>
          <div className="container">
            <Link id="logo" to="/">
              <img src={Logo} alt="silicon logotype" />
            </Link>

            <nav id="menu">
              <div className="menu-links">
                <NavLink className="nav-link" to="/#Overview">Overview</NavLink>
                <NavLink className="nav-link" to="/Features">Features</NavLink>
                <NavLink className="nav-link" to="/News">News</NavLink>
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </div>
            </nav>

            <div id="theme-mode">
              <div className="theme-switch-wrapper">
                <label htmlFor="theme-toggle-switch">Light</label>
                <label className="theme-switch" htmlFor="theme-toggle-switch">
                  <input type="checkbox" id="theme-toggle-switch" />
                  <div className="slider round"></div>
                </label>
                <label htmlFor="theme-toggle-switch">Dark</label>
              </div>
            </div>

            <a id="btn-account" className="btn btn-theme" href="signin.html">
              <i className="fa-regular fa-user"></i> Sign in / up
            </a>

            <button id="btn-menu"><i className="fa-regular fa-bars"></i></button>
          </div>
        </div>
      </header>


<div className='full-second-header'>
    {!isHomePage && (
      <div>
        <header className='second-header'>
          <nav id="second-menu">
            <div className="second-menu-links">
              
              <i id="small-house" class='fa-regular fa-house'></i>
              
              <NavLink className="nav-link-home" to="/">Home</NavLink>
              
              <i id="small-arrow" class='fa-regular fa-chevrons-right'></i>
              
              {currentPage && <NavLink id='current-path' className={`nav-link-current ${currentPage === 'home' ? 'gray-link' : 'blue-link'}`} to={`/${currentPage}`}>{currentPage}</NavLink>}
                
              </div>
          </nav>
        </header>
      </div>
    )}
</div>

    </div>
  );
};

export default Header;
