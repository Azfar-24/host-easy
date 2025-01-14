import CustomLink from 'components/ui/customLink';
import React from 'react';

const BookNowBtnLink = ({ isLightLink }) => {
  return (
    <>
      <CustomLink
        variant={[isLightLink ? 'primaryLightLink' : 'primaryDarkLink']}
        redirectionURL={'/'}
      >
        Book Now
      </CustomLink>
    </>
  );
};

export default BookNowBtnLink;
