import React, { useRef, useState, useEffect } from 'react';
import InputLabel from '../inputLbl';
import ValidationText from '../validationText';

const SelectField = ({
  inputRef,
  parentExtraCls,
  inputValidate,
  extraAttri = {},
  hiddenlabel,
  labelConfig,
  validationConfig,
  options = [],
  registerFunction,
  isDisabled
}) => {
  const { ref = null, ...rest } = registerFunction ? registerFunction(labelConfig.inputID) : {};

  return (
    <>
      <div
        className={`input  ${parentExtraCls ? parentExtraCls : ''} ${
          inputValidate ? 'invalid' : ''
        } ${isDisabled ? 'disabled' : ''}`}
      >
        {hiddenlabel ?? <InputLabel {...labelConfig} />}
        <div className='select__field'>
          <select ref={ref} {...rest} {...extraAttri}>
            {options.map((option, index) => (
              <optgroup label={option.categoryLbl} key={index}>
                {option.category.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  );
                })}
              </optgroup>
            ))}
          </select>
          <ValidationText {...validationConfig} />
        </div>
      </div>
    </>
  );
};

export default SelectField;
