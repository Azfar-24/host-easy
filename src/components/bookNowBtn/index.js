import CustomLink from 'components/ui/customLink';
import React from 'react';

const BookNowBtn = ({ isLight }) => {
  return (
    <>
      <CustomLink variant={`${isLight ? 'primaryLight' : 'primaryDark'}`} redirectionURL={'/'}>
        Book Now
      </CustomLink>
    </>
  );
};

export default BookNowBtn;
