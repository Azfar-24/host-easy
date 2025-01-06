import React from 'react';

const InputCheckbox = ({
  extraCls,
  checkboxID,
  label,
  onChange,
  components,
  checkboxState,
  checked,
  registerFunction
}) => {
  const { ref = null, ...rest } = registerFunction ? registerFunction(checkboxID) : {};

  return (
    <>
      <div className={`si-checkBox ${extraCls ? extraCls : ''}`}>
        <input
          type='checkbox'
          id={checkboxID}
          value={checkboxID}
          onChange={onChange}
          disabled={checkboxState}
          checked={checked}
          ref={ref}
          {...rest}
        />

        <label htmlFor={checkboxID}>
          {label && <div className='si-checkBox__lbl'> {label}</div>}
          {components}
        </label>
      </div>
    </>
  );
};

// Spinnit Code
//  <InputCheckbox
//    checkboxID={}
//    registerFunction={}
//    checkboxState={}
//  />;

export default InputCheckbox;
