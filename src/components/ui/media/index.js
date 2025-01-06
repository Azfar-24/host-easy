import React from 'react';
import { IMAGE_VERSION } from 'utils/constants';

const Media = ({ imgSrc, imgAlt, restProp, fallback }) => {
  // const onImgFailed = ({ currentTarget }) => {
  //   currentTarget.onerror = null; // prevents looping
  //   currentTarget.src = fallback;
  // };
  const handleError = (e) => {
    e.target.src = fallback;
  };
  return (
    <>
      <img
        src={`${imgSrc}?v=${window?.['translations']?.['imgVersion']}`}
        alt={imgAlt}
        // onError={onImgFailed}
        loading='lazy'
        {...restProp}
        onError={handleError}
      />
    </>
  );
};

export default Media;
