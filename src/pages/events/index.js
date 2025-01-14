import EventList from 'components/eventList';
import GetStarted from 'components/getStarted';
import HeroBanner from 'components/heroBanner';
import MemorableMoments from 'components/memorableMoments';
import PartyHostEventSection from 'components/partyHostEventSection';
import SectionWrap from 'components/sectionWrap';
import ServicesSection from 'components/servicesSection';
import StatsTracker from 'components/statsTracker';
import TestimonialsSection from 'components/testimonialsSection';
import CustomLink from 'components/ui/customLink';
import WantToJoinTheParty from 'components/wantToJoinTheParty';
import YourEventOurExpertiseSection from 'components/yourEventOurExpertiseSection';
import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { formatToRouteString } from 'utils/commonFunctions';
var eventsData = require('../../assets/data/events_list.json');
const { eventList } = eventsData;
var eventJSON = require('../../assets/data/eventpage.json');
const { heroSection, statsTrackerSection, yourEventOurExpertiseSection } = eventJSON;

var partyHostEventSectionJSON = require('../../assets/data/party_host_event_section.json');
const { partyHostEventSection } = partyHostEventSectionJSON;
const Events = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  if (eventId) return <Outlet />;

  return (
    <>
      {/* <div>
        {eventList.data.map((event) => {
          return (
            <div key={event.id} onClick={() => navigate(formatToRouteString(event.title))}>
              {event.title}
            </div>
          );
        })}
      </div> */}
      <HeroBanner
        title={heroSection.title}
        caption={[heroSection.description[0].caption]}
        thumbnailConfig={{ imgSrc: heroSection.thumbnail }}
        cta={heroSection.cta}
      />
      <StatsTracker statsTrackerSection={statsTrackerSection} />
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
        <EventList data={eventList.data} onClick={() => navigate(formatToRouteString(title))} />
        <div className='flexbox '>
          <em>and many more events...</em>
        </div>
      </SectionWrap>
      <ServicesSection />
      <YourEventOurExpertiseSection yourEventOurExpertiseSection={yourEventOurExpertiseSection} />
      <TestimonialsSection />
      <GetStarted />
      <MemorableMoments />
      <WantToJoinTheParty />
    </>
  );
};

export default Events;
