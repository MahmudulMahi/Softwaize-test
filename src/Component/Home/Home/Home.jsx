import React from 'react';
import FirstHeading from '../FirstHeading/FirstHeading';
import Navber from '../Navber/Navber';
import Banner from '../Banner/Banner';
import ReactSwiper from '../ReactSwiper/ReactSwiper';

const Home = () => {
  return (
    <div>
      <FirstHeading></FirstHeading>
      <Navber></Navber>
      <ReactSwiper></ReactSwiper>
      <Banner></Banner>
    </div>
  );
};

export default Home;