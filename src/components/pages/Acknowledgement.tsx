import React, { useEffect } from 'react';

const Acknowledgement: React.FC = () => {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.href = '/acknowledgement.html';
  }, []);

  // Return null since we're redirecting
  return null;
};

export default Acknowledgement; 