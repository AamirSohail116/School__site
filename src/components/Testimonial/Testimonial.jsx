import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import testimonialData from "../../Data/testimonialData";
import "./Testimonial.css";

function Testimonial() {
  return (
    <Swiper
      className="container testimonial__container"
      slidesPerView={2}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <h2>Student's Testimonials</h2>
      <div>
        {testimonialData.map((testimonial, i) => {
          return (
            <SwiperSlide key={i} className="testimonial">
              <div className="avatar">
                <img src={testimonial.avatar} alt="" />
              </div>
              <div className="testimonial__info">
                <h5>{testimonial.name}</h5>
                <small>{testimonial.title}</small>
              </div>
              <div className="testimonial__body">
                <p>{testimonial.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
}

export default Testimonial;
