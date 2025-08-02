// components/HomeButton.jsx
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const HomeButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // pixels from top
      setShow(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return show ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  ) : null;
};

export default HomeButton;
