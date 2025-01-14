import SectionWrap from 'components/sectionWrap';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
var testimonialsSectionJSON = require('../../assets/data/testimonials.json');
const { testimonialSection } = testimonialsSectionJSON;
const TestimonialsSection = () => {
  return (
    <>
      <SectionWrap heading={{ heading: testimonialSection.section_heading }}>
        <div className='testify__wrap'>
          <div className='testify__swiper'>
            <Swiper
              slidesPerView={1.1}
              spaceBetween={16}
              centeredSlides={true}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 32
                }
              }}
              modules={[Autoplay, Navigation]}
              className='mySwiper__testify'
            >
              {testimonialSection.data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='testify__card'>
                      <div className='testify__card-box'>
                        <div className='testify__card-review'>{item.review}</div>
                        <div className='testify__card-author'>{item.author}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default TestimonialsSection;
