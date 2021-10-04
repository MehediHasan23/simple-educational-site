import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h3>Interested in this course for your business or team?</h3>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>

                <p className="mt-2">
                  <small>Edx © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">About</li>
                  <li className="footer-menu">Blogs</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h4 className='text-center'>Contact us</h4>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+880175090000</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center text-center">
                  <div>
                    <p>
                    Dhaka Housing Jame Masjid,
                      <br /> 87 Dhaka Housing, Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
