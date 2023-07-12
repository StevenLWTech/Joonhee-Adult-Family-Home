import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import LibraryLogo from "../assets/Library.svg";
// import { Link } from "react-router-dom";

export default function Nav() {
  // function openMenu() {
  //   document.body.classList += " menu--open";
  // }
  // function closeMenu() {
  //   document.body.classList.remove("menu--open");
  // }
  return (
    <nav>
      <div className="site-header">
        <div className='site-header__social'></div>
        <div className='site-header__nav'>

          <div className='nav__links'>HOME</div>
          <div className='nav__links'>ABOUT US</div>
          <div className='nav__links'>OUR AFH</div>
          <div className='nav__links'>FAQS</div>

        </div>
        <div className='site-header__contact'>Contact</div>

        {/* 
        <div>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </div> */}

        {/* <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button> */}

        {/* <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}
