import EventList from 'components/eventList';
import SectionWrap from 'components/sectionWrap';
import CustomLink from 'components/ui/customLink';
import { text } from 'figlet';
import React from 'react';

var eventListJSON = require('../../assets/data/events_list.json');
const { eventList } = eventListJSON;

var partyHostEventSectionJSON = require('../../assets/data/party_host_event_section.json');
const { partyHostEventSection } = partyHostEventSectionJSON;

const PartyHostEventSection = () => {
  return (
    <>
      <SectionWrap
        heading={{
          heading: partyHostEventSection.section_heading,
          textAlign: 'left'
        }}
        caption={{
          data: [partyHostEventSection.description[0].caption],
          textAlign: 'left'
        }}
      >
        <EventList data={eventList.data.slice(0, 3)} />
        <div className='flexbox justify-center'>
          <CustomLink variant={'primaryLight'} redirectionURL={'/events'}>
            View all Events
          </CustomLink>
        </div>
      </SectionWrap>
    </>
  );
};

export default PartyHostEventSection;
