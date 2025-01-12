import SectionCaption from 'components/sectionCaption';
import SectionHeading from 'components/sectionHeading';
import React from 'react';

const SectionWrap = ({ heading, caption, customCls, childCustomCls, children }) => {
  return (
    <>
      <section className='main__container--fluid'>
        <div className={`sectionWrapper ${customCls ? customCls : ''}`}>
          <div className='main__container'>
            <div className='sectionWrapper__head'>
              {heading && <SectionHeading {...heading} />}
              {caption && <SectionCaption {...caption} />}
            </div>
          </div>

          <div className={`main__container ${childCustomCls ? childCustomCls : ''}`}>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrap;
