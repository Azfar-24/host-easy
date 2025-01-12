import CustomLink from 'components/ui/customLink';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';

var eventListJSON = require('../../assets/data/events_list.json');
const { eventList } = eventListJSON;

const EventList = ({ data }) => {
  return (
    <>
      <div className='event__list'>
        <div className='event__grid'>
          {data.map((item, index) => (
            <div className='event__card' key={index}>
              <div className='event__thumb'>
                <Media imgSrc={item.thumbail}></Media>
              </div>
              <div className='event__dtls'>
                <Typo component={'h3'} className='event__title'>
                  {item.title}
                </Typo>
                <Typo component={'h4'} className='event__caption'>
                  {item.caption}
                </Typo>
              </div>
              {item.url && (
                <div className='event__cta'>
                  <CustomLink redirectionURL={item.url} variant={'primaryDarkLink'}>
                    Learn More <i className='he1-arrow_outward'></i>
                  </CustomLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventList;
