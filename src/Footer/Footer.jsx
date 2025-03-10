import React from "react";
import "./footer.css";
import  Unicus_icons  from '../assets/unicus_icon.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
    
        <div className="footer-content">
          
          <div className="footer-left">
            <div className='footer-leftleft'>
          <img src={Unicus_icons} alt="Unicus" className="footer-logo" />

            <h2 className="company-name">UNICUS Live</h2>
            </div>
            <p className="company-tagline">Learn</p>
         
            <div className="footer-social">
              <a href="#"><FaFacebook /><i className="fab fa-facebook-f"></i></a>
              <a href="#"><FaTwitter /><i className="fab fa-twitter"></i></a>
              <a href="#"><FaInstagram /><i className="fab fa-instagram"></i></a>
              <a href="#"><FaLinkedin /><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><FaYoutube /><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-middle">
            <div className="footer-column">
              <h3>Classes</h3>
              <ul>
                <li>Web Design <br>
                </br>and Programming</li>
                <li>Cybersecurity</li>
                <li>Product Deign</li>
                <li>Data Analysis</li>
                <li>Digital Marketing</li>
                <li>Video Content Creation</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Address</h3>
              <ul>
                <li>Suite 1, Computer Complex</li>
                <li>beside the computer village,</li>
                <li>PTI School Effurun</li>
              </ul>
            </div>
          </div>

       
          <div className="footer-right">
            <h3>Time</h3>
            <p>8am Prompt</p>
            <p>All Classes are Active NOW!!</p>
            <p><i className="fas fa-phone-alt"></i> +234 706 611 2211</p>
            <p><i className="fas fa-envelope"></i> support@unicus.live</p>
          </div>
        </div>

        <div className="footer-form">
          <h2 className="form-title">Start Your Tech</h2>
          <p className="form-subtitle">Send Your prefer Interest to us </p>

          <div className="form-grid">
            <div className="form-group">
              <label>Firstname</label>
              <input type="text" placeholder="Firstname" />
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input type="text" placeholder="Surname" />
            </div>
            <div className="form-group full-width">
              <label>Class</label>
              <input type="text" placeholder="Class" />
            </div>
            <div className="form-group full-width">
              <label>Contact</label>
              <input type="text" placeholder="+234" />
            </div>
            <div className="form-group full-width">
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
            </div>
          </div>

          <button className="form-button">Apply</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
