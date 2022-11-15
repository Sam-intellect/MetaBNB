import React, { useState } from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import NFTsSection from './NFTsSection';
import LearnMoreSection from './LearnMoreSection';
import Footer from './Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <NFTsSection />
      <LearnMoreSection />
      <Footer />
    </>
  );
};

export default Home;
