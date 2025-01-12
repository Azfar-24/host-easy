import Typo from 'components/ui/typo';
import React from 'react';

const StatsTrackerCard = ({ title, caption, value, slug }) => {
  return (
    <>
      <div className='stats__card'>
        <h2 className='stats__card-value'>
          {value}
          {slug ? slug : ''}
        </h2>
        <Typo component={'h2'} className='stats__card-heading'>
          {title}
        </Typo>
        <Typo component={'p'} className='stats__card-caption'>
          {caption}
        </Typo>
      </div>
    </>
  );
};

export default StatsTrackerCard;
