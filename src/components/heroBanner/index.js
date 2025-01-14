import BookNowBtn from 'components/bookNowBtn';
import SectionCaption from 'components/sectionCaption';
import SectionHeading from 'components/sectionHeading';
import SectionWrap from 'components/sectionWrap';
import Media from 'components/ui/media';
import React from 'react';

const HeroBanner = ({
  isSectionHeading,
  title,
  caption,
  children,
  cta = true,
  thumbnailConfig
}) => {
  return (
    <>
      <div className='main__container--fluid'>
        <div className='heroBanner__wrap'>
          <SectionWrap>
            <div className='heroBanner__grid'>
              <div className='heroBanner__grid-lhs'>
                <SectionHeading
                  heading={title}
                  textAlign={'left'}
                  classes={`${isSectionHeading ? 'section__heading' : 'heroBanner__title'}`}
                />
                <SectionCaption data={caption} textAlign={'left'} classes={'heroBanner__caption'} />
                {cta && (
                  <div className='heroBanner__cta'>
                    {children ? children : <BookNowBtn isLightLink={true} />}
                  </div>
                )}
              </div>
              <div className='heroBanner__grid-rhs'>
                <div className='heroBanner__thumbnail'>
                  <Media {...thumbnailConfig} />
                </div>
              </div>
            </div>
          </SectionWrap>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
