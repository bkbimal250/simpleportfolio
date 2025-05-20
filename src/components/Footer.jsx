import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="container footer_container" data-aos="fade-up" data-aos-duration="1000">
      <div className="row py-5">
        <div className="col-md-4 mb-4">
          <div className="footer_brand mb-3">bimalbkportfolio</div>
          <p className="footer_text">Full-Stack Python Developer passionate about creating elegant solutions to complex problems with modern technologies.</p>
          <div className="social_links d-flex gap-3 mt-3">
            <a href="https://github.com/yourusername" className="social_item" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="social_item" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" className="social_item" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:your.email@example.com" className="social_item" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <h4 className="footer_heading mb-3">Quick Links</h4>
          <div className="d-flex flex-column">
            <Link to="/" className="footer_link mb-2">Home</Link>
            <Link to="/experience" className="footer_link mb-2">Experience</Link>
            <Link to="/skills" className="footer_link mb-2">Skills</Link>
            <Link to="/projects" className="footer_link mb-2">Projects</Link>
            <Link to="/certificate" className="footer_link mb-2">Certificate</Link>
            <Link to="/contact" className="footer_link mb-2">Contact</Link>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <h4 className="footer_heading mb-3">Get In Touch</h4>
          <div className="contact_info">
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-envelope me-2"></i>
              <span>your.email@example.com</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-globe me-2"></i>
              <span>Mumbai, Maharashtra, IN</span>
            </div>
            <a 
              href="/assets/resume.pdf" 
              download="Resume.pdf"
              className="btn btn-outline-warning mt-3"
            >
              <i className="fas fa-file-alt me-2"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="row py-3 border-top">
        <div className="col text-center">
          <p className="mb-0">© {currentYear} Bimal BK. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;