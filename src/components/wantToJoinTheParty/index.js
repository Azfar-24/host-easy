import HeroBanner from 'components/heroBanner';
import CustomLink from 'components/ui/customLink';
import React from 'react';

var eventListJSON = require('../../assets/data/want_to_join_the_party.json');
const { wantToJoinThePartySection } = eventListJSON;

function WantToJoinTheParty() {
  return (
    <>
      <section className='wantToJoinTheParty__wrap'>
        <HeroBanner
          isSectionHeading={true}
          title={wantToJoinThePartySection.title}
          caption={[
            wantToJoinThePartySection.description[0].caption,
            wantToJoinThePartySection.description[1].caption,
            wantToJoinThePartySection.description[2].caption
          ]}
          thumbnailConfig={{ imgSrc: wantToJoinThePartySection.thumbnail }}
          cta={wantToJoinThePartySection.cta}
        >
          <CustomLink redirectionURL={'/apply-as-a-helper'} variant={'primaryDark'}>
            Apply as a Helper
          </CustomLink>
        </HeroBanner>
      </section>
    </>
  );
}

export default WantToJoinTheParty;
