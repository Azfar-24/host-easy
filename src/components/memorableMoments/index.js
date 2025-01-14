import SectionWrap from 'components/sectionWrap';
import Media from 'components/ui/media';
import React from 'react';
import { chunkArray } from 'utils/commonFunctions';
var memorableMomentsJSON = require('../../assets/data/memorableMoments.json');
const { memorableMomentsSection } = memorableMomentsJSON;

const MemorableMoments = () => {
  const memorableMoments = chunkArray(memorableMomentsSection.data, 4);

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
              {memorableMoments.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className='ourEventMoment__grid-item'>
                  {chunk.map((item, itemIndex) => (
                    <div className='ourEventMoment__thumb' key={itemIndex}>
                      <Media mediaType={item.mediaType} imgSrc={item.url} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default MemorableMoments;
