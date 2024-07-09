import React from 'react';
import { reviews } from './ReviewData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Player from 'react-youtube';
import './Testimonials.css';

const opts = {
  height: '360',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};

const onReady = (event) => {
  event.target.pauseVideo();
};

const Testimonials = () => {
  return (
    <div className="container mx-auto p-5 lg:p-8 flex flex-col items-center justify-center w-full overflow-y-auto" id="Testimonials">
      <h2 className="text-3xl my-3">Our Video Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       // autoplay={{ delay: 3000, disableOnInteraction: true }}
        className="w-full p-6 rounded-lg relative lg:h-[35rem]"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="testimonial-slide">
              <div className="video-wrapper">
                <Player opts={opts} videoId={review.videoId} onReady={onReady} />
              </div>
              <div className="text-wrapper">
                <h2 className="text-gray-800 text-xl md:text-2xl mb-2 text-center md:text-left">{review.name}</h2>
                <p className="text-gray-600 text-base md:text-lg text-center md:text-left">{review.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
