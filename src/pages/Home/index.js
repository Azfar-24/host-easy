import CapturedCelebrationsSection from 'components/capturedCelebrationsSection';
import EventSupportSection from 'components/eventSupportSection';
import GetStarted from 'components/getStarted';
import HeroBanner from 'components/heroBanner';
import MemorableMoments from 'components/memorableMoments';
import PartyHostEventSection from 'components/partyHostEventSection';
import ServicesSection from 'components/servicesSection';
import StatsTracker from 'components/statsTracker';
import TestimonialsSection from 'components/testimonialsSection';
import WantToJoinTheParty from 'components/wantToJoinTheParty';
import YourEventOurExpertiseSection from 'components/yourEventOurExpertiseSection';
import React from 'react';
const Home = () => {
  var homepageJSON = require('../../assets/data/homepage.json');
  const { heroSection, exceptionalEventSupportSection, statsTrackerSection } = homepageJSON;
  return (
    <>
      <HeroBanner
        title={heroSection.title}
        caption={[heroSection.description[0].caption]}
        thumbnailConfig={{ imgSrc: heroSection.thumbnail }}
        cta={heroSection.cta}
      />
      <ServicesSection />
      <YourEventOurExpertiseSection />
      <EventSupportSection exceptionalEventSupportSection={exceptionalEventSupportSection} />
      <TestimonialsSection />
      <CapturedCelebrationsSection />
      <StatsTracker statsTrackerSection={statsTrackerSection} />
      <MemorableMoments />
      <GetStarted />
      <PartyHostEventSection />
      <WantToJoinTheParty />
    </>
  );
};

export default Home;
