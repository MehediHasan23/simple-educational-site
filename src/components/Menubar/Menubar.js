import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css';
const Menubar = () => {
  return (
    <div>
      <div className="MenuBar-container">
          <div className="row">
          <div>
            <div className="menu-container">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>HOME</li>
                </Link>
                <Link to="/services" className="items">
                  <li>SERVICE</li>
                </Link>
                <Link to="/about" className="items">
                  <li>ABOUT</li>
                </Link>
                <Link to="/contact" className="items">
                  <li>CONTACT</li>
                </Link>
              </ul>
            </div>
          </div>
          </div>
    </div>


    </div>
  );
};

export default Menubar;