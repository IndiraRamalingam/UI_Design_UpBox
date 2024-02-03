import React from 'react';
import { useState } from 'react';
import hamburger from '../assets/hamburger.svg'
import hamburger_close from '../assets/hamburger-close.svg'
import logo from '../assets/logo.svg'

function NavBar() {
    const [showAnimated, setShowAnimated] = useState(false);
  return (
    <>
         <div className='header_img'>
             <img />
        </div>
          <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div onClick={() => setShowAnimated((prev) => !prev)}>
            {showAnimated ? <img src={hamburger_close}/> : <img src={hamburger}/>}
          </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">THIS MONTH</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SKIN</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#">Hair</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#">Bath</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sale</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link btnLink" href="#">Log in <span style={{fontSize:'18px'}}>&gt;</span></a>
                {/* <button className="nav-link btnLink">Login</button> */}
              </li>        
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar