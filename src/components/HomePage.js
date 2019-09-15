import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD from './SectionD';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main id='main'>
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
