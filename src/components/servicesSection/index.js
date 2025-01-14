import BookNowBtnLink from 'components/bookNowBtnLink';
import SectionWrap from 'components/sectionWrap';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';
var serviceSectionJSON = require('../../assets/data/services_section.json');
const { serviceSection } = serviceSectionJSON;

const ServicesSection = () => {
  return (
    <>
      <SectionWrap
        heading={{ heading: serviceSection.section_heading }}
        caption={{
          data: [
            serviceSection.description[0].caption,
            serviceSection.description[1].caption,
            serviceSection.description[2].caption
          ]
        }}
      >
        <div className='section__container'>
          <div className='section__grid section__grid--2by2 space32'>
            {serviceSection?.cards?.map((card, index) => {
              return (
                <div key={index} className='card'>
                  <div className='card__thumbnail'>
                    <Media imgSrc={card.thumbnail} />
                  </div>
                  <div className='card__body'>
                    <div className='card__grid'>
                      <Typo component={'h3'} className='card__title'>
                        {card.title}
                      </Typo>
                      <div className='card__cta'>
                        <BookNowBtnLink />
                      </div>
                    </div>
                    <div className='card__description'>{card.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default ServicesSection;
