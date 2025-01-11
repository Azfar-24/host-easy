import EventSupportSection from 'components/eventSupportSection';
import HeroBanner from 'components/heroBanner';
import ServicesSection from 'components/servicesSection';
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
    </>
  );
};

export default Home;
