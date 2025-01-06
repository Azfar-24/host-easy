import React from 'react';
import InputField from '../inputField';

const InputAdornments = ({ inputConfig, slug }) => {
  return (
    <>
      <div className='si-inputAdornments'>
        <InputField hiddenlabel {...inputConfig} />
        <div className='si-inputAdornments__slug'>{slug}</div>
      </div>
    </>
  );
};

export default InputAdornments;
