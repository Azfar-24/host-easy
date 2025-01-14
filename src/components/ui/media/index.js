import React from 'react';
import { IMAGE_VERSION } from 'utils/constants';

const Media = ({ mediaType, imgSrc, imgAlt, restProp, fallback }) => {
  // const onImgFailed = ({ currentTarget }) => {
  //   currentTarget.onerror = null; // prevents looping
  //   currentTarget.src = fallback;
  // };
  const handleError = (e) => {
    e.target.src = fallback;
  };
  return (
    <>
      {mediaType === 'VIDEO' ? (
        <>
          <video controls>
            <source
              src={`http://127.0.0.1:5500/${imgSrc}?v=${window?.['translations']?.['imgVersion']}`}
              type='video/mp4'
            />
            <source src='movie.ogg' type='video/ogg' />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <img
          src={`http://127.0.0.1:5500/${imgSrc}?v=${window?.['translations']?.['imgVersion']}`}
          alt={imgAlt}
          // onError={onImgFailed}
          loading='lazy'
          {...restProp}
          onError={handleError}
        />
      )}
    </>
  );
};

export default Media;
