import BookNowBtn from 'components/bookNowBtn';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';

const HeroBanner = ({ title, caption, children, thumbnailConfig }) => {
  return (
    <>
      <div className='main__container--fluid'>
        <div className='heroBanner__wrap'>
          <div className='main__container'>
            <div className='heroBanner__grid'>
              <div className='heroBanner__grid-lhs'>
                <Typo component={'h2'} className='heroBanner__title'>
                  {title}
                </Typo>
                <Typo component={'p'} className='heroBanner__caption'>
                  {caption}
                </Typo>
                <div className='heroBanner__cta'>
                  {children ? children : <BookNowBtn isLightLink={true} />}
                </div>
              </div>
              <div className='heroBanner__grid-rhs'>
                <div className='heroBanner__thumbnail'>
                  <Media {...thumbnailConfig} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
