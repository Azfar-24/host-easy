import HeroBanner from 'components/heroBanner';
import SectionWrap from 'components/sectionWrap';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroBanner
        title={'Your Go-To Event Helpers in Dallas & Raleigh!'}
        caption={
          'With Host Easy, enjoy professional HostHands and Bartenders who take care of everything. Focus on your guests while we handle the rest!'
        }
        thumbnailConfig={{ imgSrc: require('assets/images/banners/hp-herobanner.png') }}
      />
      <SectionWrap
        heading={{ heading: 'Stop Making Party Hosting Complicated!' }}
        caption={{
          data: [
            {
              caption:
                'Enjoy your birthday parties, family reunions, bridal showers and more with our amazing party help. '
            },
            {
              caption:
                'We know what it’s like to simply host a great party. We know it can be stressful.'
            },
            {
              caption: ' We’re here to help you be the best host you can be with Host Easy.'
            }
          ]
        }}
      >
        <div className='section__container'>
          <div className='section__grid section__grid--2by2'>
            <div className=''>a</div>
            <div className=''>b</div>
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default Home;
