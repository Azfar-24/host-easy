import EventSupportSection from 'components/eventSupportSection';
import HeroBanner from 'components/heroBanner';
import ServiceJobRoleDescription from 'components/serviceJobRoleDescription';
import CustomLink from 'components/ui/customLink';
import WantToJoinTheParty from 'components/wantToJoinTheParty';
import YourEventOurExpertiseSection from 'components/yourEventOurExpertiseSection';
import React from 'react';

const Helper = () => {
  var applyAsHelperJSON = require('../../assets/data/apply_as_a_helper.json');
  const {
    heroSection,
    whyJoinUsSection,
    howItWorkSection,
    bartenderAtHostEasySection,
    helperAtHostEasySection
  } = applyAsHelperJSON;
  return (
    <>
      <HeroBanner
        title={heroSection.title}
        caption={[heroSection.description[0].caption]}
        thumbnailConfig={{ imgSrc: heroSection.thumbnail }}
        cta={heroSection.cta}
      >
        <CustomLink redirectionURL={'/apply-as-a-helper'} variant={'primaryDark'}>
          Apply as a Helper
        </CustomLink>
      </HeroBanner>
      <ServiceJobRoleDescription data={bartenderAtHostEasySection} />
      <ServiceJobRoleDescription data={helperAtHostEasySection} />
      <YourEventOurExpertiseSection yourEventOurExpertiseSection={whyJoinUsSection} />
      <EventSupportSection exceptionalEventSupportSection={howItWorkSection} />
      <WantToJoinTheParty />
    </>
  );
};

export default Helper;
