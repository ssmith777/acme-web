import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer id='main-footer' className='grid'>
      <div>Acme Web Solutions</div>
      <div>
        Project By:
        <a href='https://github.com/ssmith777'> Shawn Smith </a>
      </div>
    </footer>
  );
};

export default Footer;
