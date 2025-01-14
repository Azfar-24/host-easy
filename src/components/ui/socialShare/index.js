import React from 'react';
import Typo from '../typo';
import Anchor from '../anchor';

const SocialShare = ({ title, titleTransKey, data }) => {
  return (
    <>
      <div className='socialShare'>
        <Typo transKey={titleTransKey} component='h3' className='socialShare__title'>
          {title}
        </Typo>
        <div className='socialShare__icons'>
          {data.map((item, index) => (
            <Anchor
              key={index}
              hyperLink={item.link}
              classes={`social__icon ${item.iconName}`}
              iconCls={item.iconCls}
              variant={'onlyIcon'}
            ></Anchor>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialShare;
