import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const ReactSwiper = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('/necklace.json')
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div className='container mt-4'>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        centeredSlides={true}

        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {item.map(item => (

          <SwiperSlide key={item.id}>
            <Link to={`/item/${item.title}`}>
              <div className='flex flex-col items-center justify-center gap-5'>
                <div className="card w-24 h-24 bg-gray-100 shadow-xl rounded-full">

                  <img
                    src={item.url}
                    alt={item.title}
                    className="rounded-xl w-full h-auto"
                  />

                  <div className="card-body items-center text-center">

                  </div>
                </div>
                <div>
                  <p className="text-sm  text-center">{item.title}</p>
                </div>
              </div>
            </Link>

          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default ReactSwiper;
