import React from 'react';
import Typo from '../typo';
import Media from '../media';
import Button from '../button';

const NoDataFound = ({ noDataThumb, noDataTitle, noDataCaption, noDataCta }) => {
  return (
    <>
      <div className='si-noData__wrap'>
        {noDataTitle && (
          <Typo className='si-noData__title' {...noDataTitle}>
            {noDataTitle}
          </Typo>
        )}
        {noDataCaption && (
          <Typo
            className='si-noData__caption'
            dangerouslySetInnerHTML={{ __html: noDataCaption }}
            {...noDataCaption}
          ></Typo>
        )}
        {noDataThumb && (
          <div className='si-noData__thumb'>
            <Media {...noDataThumb} />
          </div>
        )}
        {noDataCta ? (
          <div className='si-noData__cta'>
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
