import React from 'react';
import InputField from '../inputField';

const InputAdornments = ({ inputConfig, slug }) => {
  return (
    <>
      <div className='inputAdornments'>
        <InputField hiddenlabel {...inputConfig} />
        <div className='inputAdornments__slug'>{slug}</div>
      </div>
    </>
  );
};

export default InputAdornments;
