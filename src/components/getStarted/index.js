import BookNowBtn from 'components/bookNowBtn';
import SectionWrapGrid from 'components/sectionWrapGrid';
import { text } from 'figlet';
import React from 'react';

var getStartedJSON = require('../../assets/data/get_started.json');
const { getStartedSection } = getStartedJSON;
const GetStarted = () => {
  return (
    <>
      <SectionWrapGrid
        customCls='getStarted__wrap'
        heading={{
          heading: getStartedSection.section_heading,
          textAlign: 'left',
          textTheme: 'light'
        }}
        caption={{
          data: [
            getStartedSection.description[0].caption,
            getStartedSection.description[1].caption
          ],
          textAlign: 'left',
          textTheme: 'light'
        }}
      >
        <div className='getStarted__cta'>
          <BookNowBtn />
        </div>
      </SectionWrapGrid>
    </>
  );
};

export default GetStarted;
