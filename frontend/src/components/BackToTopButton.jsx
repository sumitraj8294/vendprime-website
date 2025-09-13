import React, { useState, useEffect } from 'react';
import '../styles/BackToTopButton.css';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="top-btn">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
