import SectionWrap from 'components/sectionWrap';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';

const OurStorySection = ({ data }) => {
  return (
    <>
      <SectionWrap heading={{ heading: data.section_heading }}>
        <div className='section__container'>
          <div className='ourStory__wrap'>
            <div className='ourStory__container'>
              {data.data.map((item, index) => {
                return (
                  <div key={index} className='ourStory__box'>
                    {item.thumbnail && (
                      <div className='ourStory__box-thumb'>
                        <Media imgSrc={item.thumbnail} />
                      </div>
                    )}
                    <div className='ourStory__box-caption'>
                      <Typo component={'p'}>{item.description}</Typo>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default OurStorySection;
