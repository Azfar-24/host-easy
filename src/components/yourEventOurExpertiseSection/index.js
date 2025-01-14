import SectionWrap from 'components/sectionWrap';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import { text } from 'figlet';
import React from 'react';

const YourEventOurExpertiseSection = ({ yourEventOurExpertiseSection }) => {
  return (
    <>
      <SectionWrap heading={{ heading: yourEventOurExpertiseSection.section_heading }}>
        <div className='section__container'>
          <div className='eventExpertise__wrap'>
            <div className='eventExpertise__grid'>
              {yourEventOurExpertiseSection.data.map((card, index) => {
                return (
                  <div key={index} className='eventExpertise__card'>
                    <div className='eventExpertise__card-icon'>
                      <Media imgSrc={card.thumbnail} />
                    </div>
                    <div className='eventExpertise__card-content'>
                      <Typo component={'h3'} className='eventExpertise__card-title'>
                        {card.title}
                      </Typo>
                      <Typo component={'p'} className='eventExpertise__card-description'>
                        {card.description}
                      </Typo>
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

export default YourEventOurExpertiseSection;
