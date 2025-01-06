import React from 'react';
import InputField from '../inputField';
import Button from '../button';

const InputSearch = ({ searchConfig }) => {
  return (
    <>
      <div className='input__search'>
        <InputField {...searchConfig} />
        <div className='input__search--icon'>
          <Button
            type='button'
            variant='onlyIcon'
            icon={true ? 'fe-search' : 'fe-close1'}
            onClick={() => {}}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default InputSearch;
