import React from 'react';

const Header = () => {
  return (
    <header id='showcase' className='grid'>
      <div className='bg-image'></div>
      <div className='content-wrap'>
        <h1>Welcome to Acme Web Solutions</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          saepe similique incidunt commodi illo quasi, ullam iure in tempora
          accusantium.
        </p>
        <a href='#section-b' className='btn'>
          Read More
        </a>
      </div>
    </header>
  );
};

export default Header;
