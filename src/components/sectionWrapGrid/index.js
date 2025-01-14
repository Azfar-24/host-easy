import SectionCaption from 'components/sectionCaption';
import SectionHeading from 'components/sectionHeading';
import React from 'react';

const SectionWrapGrid = ({ heading, caption, customCls, children }) => {
  return (
    <>
      <section className='main__container--fluid'>
        <div className={`sectionWrapper ${customCls ? customCls : ''}`}>
          <div className='main__container'>
            <div className='sectionWrapperGrid'>
              <div className='sectionWrapperGrid__lhs'>
                <div className='sectionWrapper__head'>
                  {heading && <SectionHeading {...heading} />}
                  {caption && <SectionCaption {...caption} />}
                </div>
              </div>
              <div className='sectionWrapperGrid__rhs'>{children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapGrid;
