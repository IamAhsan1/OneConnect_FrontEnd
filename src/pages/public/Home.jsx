import React from 'react';
import HeroSection from '../../components/public/HeroSection';
import SearchDirectory from '../../components/public/SearchDirectory';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <HeroSection />
      <SearchDirectory />
    </div>
  );
};

export default Home;
