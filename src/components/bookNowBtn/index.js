import Button from 'components/ui/button';
import React from 'react';

const BookNowBtn = ({ isLight }) => {
  return <Button variant={`${isLight ? 'primaryLight' : 'primaryDark'}`}>Book Now</Button>;
};

export default BookNowBtn;
