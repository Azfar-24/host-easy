import SectionWrapGrid from 'components/sectionWrapGrid';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';

const WhyChooseUs = ({ data }) => {
  return (
    <>
      <SectionWrapGrid
        customCls='whyChooseUs__section'
        heading={{ heading: data.section_heading, textAlign: 'left' }}
      >
        <div className='whyChooseUs__wrap'>
          <div className='whyChooseUs__container'>
            {data.data.map((card, index) => {
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
      </SectionWrapGrid>
    </>
  );
};

export default WhyChooseUs;
