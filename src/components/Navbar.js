import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link className='nav-link' to='/'>
            React Notes
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/create'>
                  Create
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
