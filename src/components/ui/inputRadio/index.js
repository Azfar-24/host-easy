import React from 'react';

const Radio = ({
  extraCls,
  siblings,
  radioID,
  label,
  onChange,
  component,
  radioState,
  checked,
  key
}) => {
  return (
    <>
      <div className={`radioBtn ${extraCls ? extraCls : ''}`} key={key}>
        <input
          type='radio'
          id={radioID}
          name={siblings}
          value={radioID}
          onChange={onChange}
          disabled={radioState}
          checked={checked}
        />
        <label htmlFor={radioID}>
          {label && <div className='radioBtn__lbl'> {label}</div>}
          {component}
        </label>
      </div>
    </>
  );
};

export default Radio;
