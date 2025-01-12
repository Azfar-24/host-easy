import CapturedCelebrationsSection from 'components/capturedCelebrationsSection';
import EventSupportSection from 'components/eventSupportSection';
import HeroBanner from 'components/heroBanner';
import MemorableMoments from 'components/memorableMoments';
import ServicesSection from 'components/servicesSection';
import StatsTracker from 'components/statsTracker';
import TestimonialsSection from 'components/testimonialsSection';
import YourEventOurExpertiseSection from 'components/yourEventOurExpertiseSection';
import React from 'react';
const Home = () => {
  var homepageJSON = require('../../assets/data/homepage.json');
  const { heroSection } = homepageJSON;

  return (
    <>
      <HeroBanner
        title={heroSection.title}
        caption={heroSection.description}
        thumbnailConfig={{ imgSrc: heroSection.thumbnail }}
      />
      <ServicesSection />
      <YourEventOurExpertiseSection />
      <EventSupportSection />
      <TestimonialsSection />
      <CapturedCelebrationsSection />
      <StatsTracker />
      <MemorableMoments />
    </>
  );
};

export default Home;
