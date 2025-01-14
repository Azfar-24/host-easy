import HeroBanner from 'components/heroBanner';
import MeetOurTeam from 'components/meetOurTeam';
import OurStorySection from 'components/ourStorySection';
import StatsTracker from 'components/statsTracker';
import WantToJoinTheParty from 'components/wantToJoinTheParty';
import WhyChooseUs from 'components/whyChooseUs';
import YourEventOurExpertiseSection from 'components/yourEventOurExpertiseSection';
import React from 'react';
var aboutUsPageJSON = require('../../assets/data/aboutuspage.json');
const {
  heroSection,
  statsTrackerSection,
  ourStorySection,
  whyChooseUsSection,
  meetOurTeamSection,
  ourValuesSection
} = aboutUsPageJSON;

const AboutUs = () => {
  return (
    <>
      <HeroBanner
        title={heroSection.title}
        caption={[heroSection.description[0].caption, [heroSection.description[1].caption]]}
        thumbnailConfig={{ imgSrc: heroSection.thumbnail }}
        cta={heroSection.cta}
      />
      <StatsTracker statsTrackerSection={statsTrackerSection} />
      <OurStorySection data={ourStorySection} />
      <YourEventOurExpertiseSection yourEventOurExpertiseSection={ourValuesSection} />
      <WhyChooseUs data={whyChooseUsSection} />
      <MeetOurTeam data={meetOurTeamSection} />
      <WantToJoinTheParty />
    </>
  );
};

export default AboutUs;
