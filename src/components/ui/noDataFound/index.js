import React from 'react';
import Typo from '../typo';
import Media from '../media';
import Button from '../button';

const NoDataFound = ({ noDataThumb, noDataTitle, noDataCaption, noDataCta }) => {
  return (
    <>
      <div className='noData__wrap'>
        {noDataTitle && (
          <Typo className='noData__title' {...noDataTitle}>
            {noDataTitle}
          </Typo>
        )}
        {noDataCaption && (
          <Typo
            className='noData__caption'
            dangerouslySetInnerHTML={{ __html: noDataCaption }}
            {...noDataCaption}
          ></Typo>
        )}
        {noDataThumb && (
          <div className='noData__thumb'>
            <Media {...noDataThumb} />
          </div>
        )}
        {noDataCta ? (
          <div className='noData__cta'>
            <Button {...noDataCta}>{noDataCta}</Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default NoDataFound;
