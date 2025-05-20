import React from 'react';
import { Github, Linkedin, Mail, FileText, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">John Doe</h3>
            <p className="mb-4">Full-Stack Developer passionate about creating elegant solutions to complex problems with modern technologies.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" className="hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/yourusername" className="hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={18} />
                <span>Mumbai, Maharashtra, IN</span>
              </div>
              <div className="mt-6">
                <a 
                  href="/resume.pdf" 
                  className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  <FileText size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {currentYear} John Doe. All Rights Reserved.</p>
          <p className="mt-2 text-gray-500">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;