import StatsTrackerCard from 'components/statsTrackerCard';
import React from 'react';

const StatsTracker = ({ statsTrackerSection }) => {
  return (
    <>
      <section className='main__container--fluid'>
        <div className='stats__wrap'>
          <div className='stats__grid'>
            {statsTrackerSection.data.map((item, index) => (
              <StatsTrackerCard
                key={index}
                title={item.title}
                caption={item.caption}
                value={item.value}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsTracker;
