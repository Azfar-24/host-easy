import SectionWrap from 'components/sectionWrap';
import Media from 'components/ui/media';
import React from 'react';
var memorableMomentsJSON = require('../../assets/data/memorableMoments.json');
const { memorableMomentsSection } = memorableMomentsJSON;
const MemorableMoments = () => {
  return (
    <>
      <SectionWrap
        heading={{ heading: memorableMomentsSection.section_heading }}
        caption={{
          data: [memorableMomentsSection.description[0].caption]
        }}
      >
        <div className='section__container'>
          <div className='ourEventMoment__wrap'>
            <div className='ourEventMoment__grid'>
              {Array.from({ length: 4 }).map((_, index) => {
                return (
                  <div key={index} className='ourEventMoment__grid-item'>
                    {memorableMomentsSection.data.map((item, index) => {
                      return (
                        <div className='ourEventMoment__thumb' key={index}>
                          <Media mediaType={item.mediaType} imgSrc={item.url} />
                        </div>
                      );
                    })}
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

export default MemorableMoments;
