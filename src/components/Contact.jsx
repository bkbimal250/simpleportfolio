import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact py-5" id="contact" data-aos="fade-up" data-aos-duration="1000">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="section-title text-center py-3 mb-4">Stay Connected</h1>
            
            <div className="social-icons-container d-flex justify-content-center flex-wrap gap-4 py-4" data-aos="zoom-in-up" data-aos-duration="1000">
              <a href="https://www.facebook.com/iambimalbk" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.facebook.com/iambimalbk" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                <CiFacebook className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/bkbimal/" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                <CiLinkedin className="social-icon" />
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                <FaSquareXTwitter className="social-icon" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                <FaGithubSquare className="social-icon" />
              </a>
              <a href="mailto:bkbimal250@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                <SiGmail className="social-icon" />
              </a>
            </div>
            
            <div className="contact-form-container mt-5">
              <h2 className="text-center mb-4">Send Me a Message</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-warning px-4 py-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;