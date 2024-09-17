import React from 'react';
import image from "../../../assets/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo.jpg"

const Banner = () => {
  return (
    <div className='container mt-4'>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${image})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className='flex'>
          <div className='flex-1'>

          </div>
          <div className="hero-content text-neutral-content  flex-1">
            <div className="">
              <p>Upto</p>
              <h1 className="mb-5 text-5xl font-bold">30 % Off <br /> sitewide</h1>
              <p className="mb-5">
                30 % off sitewide | code:MEMORIAL30
                30 % off sitewide | code:MEMORIAL30

              </p>
              <button className="btn ">Shop the sell</button>
              <p className='text-sm'>The container will be scrollable(left to right) <br />
                The container will be scrollable(left to right)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;