import SectionWrap from 'components/sectionWrap';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Media from 'components/ui/media';

var capturedCelebrationsJSON = require('../../assets/data/capturedCelebrations.json');
const { capturedCelebrationsSection } = capturedCelebrationsJSON;
const CapturedCelebrationsSection = () => {
  return (
    <>
      <SectionWrap
        customCls={''}
        childCustomCls={'main__container--capturedCelebration'}
        heading={{ heading: capturedCelebrationsSection.section_heading }}
        caption={{
          data: [capturedCelebrationsSection.description[0].caption]
        }}
      >
        <div className='capturedCelebration__wrap'>
          <div className='capturedCelebration__swiper'>
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              breakpoints={{
                640: {
                  spaceBetween: 32
                }
              }}
              modules={[Autoplay]}
              className='mySwiper__capturedCelebration'
            >
              {capturedCelebrationsSection.data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='capturedCelebration__card'>
                      <div className='capturedCelebration__card-box'>
                        {item.mediaType === 'IMAGE' && (
                          <Media mediaType={item.mediaType} imgSrc={item.url} />
                        )}

                        {item.mediaType === 'VIDEO' && (
                          <Media mediaType={item.mediaType} imgSrc={item.url} />
                        )}
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

export default CapturedCelebrationsSection;
