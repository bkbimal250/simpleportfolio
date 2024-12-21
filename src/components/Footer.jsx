import React from 'react';
import ShareButton from './ShareButton'; // Assuming ShareButton is a component you have defined

const Footer = ({ currentUrl }) => {
  return (
    <div>
      {/* Footer with Copyright centered */}
      <div
        className="footer"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '10px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
      >
        <span style={{ color: 'white', textAlign: 'center' }}>
          © 2020 Copyright: 
          <a
            className="text-white"
            href="https://theramsales.netlify.app"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            bimalbkportfolio
          </a>
        </span>
      </div>

      {/* Share Button in Left Bottom Corner */}
      <ShareButton
        url={currentUrl}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 1001, // Ensure it's above the footer
        }}
      />

      {/* Share Button in Right Bottom Corner */}
      <ShareButton
        url={currentUrl}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1001, // Ensure it's above the footer
        }}
      />
    </div>
  );
};

export default Footer;
