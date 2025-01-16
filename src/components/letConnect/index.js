import SectionWrap from 'components/sectionWrap';
import Anchor from 'components/ui/anchor';
import React from 'react';

const LetConnect = () => {
  return (
    <>
      <SectionWrap
        customCls={'contactUs__section'}
        heading={{
          heading: 'Let’s Connect!',
          textAlign: 'left'
        }}
      >
        <div className='contactUs__dtls'>
          <div>
            <div className='contactUs__dtls-lbl'>Write us an Email</div>
            <div className='contactUs__dtls-value'>
              <Anchor
                variant={'primaryDarkLink'}
                hyperLink={'mailTo:info@hosteasy.com'}
                linkText={'info@hosteasy.com'}
              ></Anchor>
            </div>
          </div>
          <div>
            <div className='contactUs__dtls-lbl'>Call us</div>
            <div className='contactUs__dtls-value'>
              <Anchor
                variant={'primaryDarkLink'}
                hyperLink={'tel:9876543210'}
                linkText={'+91 98765 43210'}
              ></Anchor>
            </div>
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default LetConnect;
