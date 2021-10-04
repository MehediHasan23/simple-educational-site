import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="header-container">
            <div className="row d-flex justify-content-center align-items-center header">
                <div className="col-md-6">
                    <h1 className="header-title text-center">Start learning from the world’s best institutions</h1>
                    <p className="text-white text-center">Learn from more than 160 member universities</p>
                    <button className="mt-3 regular-btn ">Learn More</button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    </div>
  );
};

export default Header;