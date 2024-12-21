import React, { useState } from 'react';
import { MdShare } from 'react-icons/md';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';

const ShareButton = ({ url, style }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div style={style}>
     <button onClick={toggleOptions} className="share-btn">
        <MdShare size={40} color="red" />
      </button>

      {/* Social Media Options */}
      {showOptions && (
        <div className="share-options">
          <FacebookShareButton url={url} className="share-option">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={url} className="share-option">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={url} className="share-option">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={url} className="share-option">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
