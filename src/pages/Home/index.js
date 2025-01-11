import BookNowBtnLink from 'components/bookNowBtnLink';
import HeroBanner from 'components/heroBanner';
import SectionWrap from 'components/sectionWrap';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import YourEventOurExpertiseSection from 'components/yourEventOurExpertiseSection';
import React from 'react';
const Home = () => {
  var homepageJSON = require('../../assets/data/homepage.json');
  const { heroSection, serviceSection } = homepageJSON;

  return (
    <>
      <HeroBanner
        title={heroSection.title}
        caption={heroSection.description}
        thumbnailConfig={{ imgSrc: heroSection.thumbnail }}
      />
      <SectionWrap
        heading={{ heading: serviceSection.title }}
        caption={{
          data: [
            serviceSection.description[0].caption,
            serviceSection.description[1].caption,
            serviceSection.description[2].caption
          ]
        }}
      >
        <div className='section__container'>
          <div className='section__grid section__grid--2by2 si-space32'>
            {serviceSection?.cards?.map((card, index) => {
              return (
                <div key={index} className='card'>
                  <div className='card__thumbnail'>
                    <Media imgSrc={card.thumbnail} />
                  </div>
                  <div className='card__body'>
                    <div className='card__grid'>
                      <Typo component={'h3'} className='card__title'>
                        {card.title}
                      </Typo>
                      <div className='card__cta'>
                        <BookNowBtnLink />
                      </div>
                    </div>
                    <div className='card__description'>{card.description}</div>
                  </div>
                </div>
              );
            })}
            {/* <div className='card'>
              <div className='card__thumbnail'>
                <Media imgSrc={serviceSection.cards[0].thumbnail} />
              </div>
              <div className='card__body'>
                <div className='card__grid'>
                  <Typo component={'h3'} className='card__title'>
                    {serviceSection.cards[0].title}
                  </Typo>
                  <div className='card__cta'>
                    <BookNowBtnLink />
                  </div>
                </div>
                <div className='card__description'>{serviceSection.cards[0].description}</div>
              </div>
            </div>
            <div className='card'>
              <div className='card__thumbnail'>
                <Media imgSrc={serviceSection.cards[1].thumbnail} />
              </div>
              <div className='card__body'>
                <div className='card__grid'>
                  <Typo component={'h3'} className='card__title'>
                    {serviceSection.cards[1].title}
                  </Typo>
                  <div className='card__cta'>
                    <BookNowBtnLink />
                  </div>
                </div>
                <div className='card__description'>{serviceSection.cards[1].description}</div>
              </div>
            </div> */}
          </div>
        </div>
      </SectionWrap>
      <YourEventOurExpertiseSection />
    </>
  );
};

export default Home;
