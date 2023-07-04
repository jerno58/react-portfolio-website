import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/test1.jpg'
import AVTR2 from '../../assets/test2.jpg'

import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Caitlin Clark',
    review: 'This is just a place holder reivew from Caitlin Clark'
  },
  {
    avatar: AVTR2,
    name: 'Max Kellerman',
    review: 'This is just a place holder reivew from Max Kellerman'
  }
]

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials