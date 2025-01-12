import SectionWrapGrid from 'components/sectionWrapGrid';
import CustomLink from 'components/ui/customLink';
import Typo from 'components/ui/typo';
import React from 'react';

const EventSupportSection = ({ exceptionalEventSupportSection }) => {
  return (
    <>
      <SectionWrapGrid
        customCls='eventSupport__wrap'
        heading={{
          heading: exceptionalEventSupportSection.section_heading,
          textAlign: 'left'
        }}
        caption={{
          data: [exceptionalEventSupportSection.description[0].caption],
          textAlign: 'left'
        }}
      >
        <div className='timeline__wrap'>
          <div className='timeline__list'>
            {exceptionalEventSupportSection.data.map((item, index) => {
              return (
                <div key={index} className='timeline__box'>
                  <div className='timeline__box-count'>{index + 1}</div>
                  <div className='timeline__box-dtls'>
                    <div>
                      <Typo component={'h3'} className='timeline__box-title'>
                        {item.title}
                      </Typo>
                      <Typo component={'h4'} className='timeline__box-caption'>
                        {item.description}
                      </Typo>
                    </div>

                    {item.isCta && (
                      <div className='timeline__box-cta'>
                        <CustomLink redirectionURL={item.url} variant={'primaryDarkLink'}>
                          Book now <i className='he1-arrow_right'></i>
                        </CustomLink>
                      </div>
                    )}
                    {item.hint && (
                      <Typo component={'p'} className='timeline__box-hint'>
                        {item.hint}
                      </Typo>
                    )}
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

export default EventSupportSection;
