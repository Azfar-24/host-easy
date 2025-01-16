import React, { useRef } from 'react';
import InputLabel from '../inputLbl';
import ValidationText from '../validationText';

const InputField = ({
  inputRef,
  parentExtraCls,
  inputValidate,
  type = 'text',
  onBlur = () => {},
  extraAttri = {},
  hiddenlabel,
  labelConfig,
  validationConfig,
  registerfuction
}) => {
  const parentDiv = useRef(null);

  function handleBlur(e) {
    onBlur(e);
  }

  const { ref = null, ...rest } = registerfuction ? registerfuction(labelConfig.inputId) : {};
  return (
    <>
      <div
        ref={parentDiv}
        className={`input ${parentExtraCls ? parentExtraCls : ''} ${
          inputValidate ? 'invalid' : ''
        }`}
      >
        {hiddenlabel ?? <InputLabel {...labelConfig} />}
        <div className='input__field'>
          <input
            autoComplete='off'
            type={type}
            onBlur={handleBlur}
            {...extraAttri}
            ref={ref}
            {...rest}
          />
          <ValidationText {...validationConfig} />
        </div>
      </div>
    </>
  );
};

export default InputField;
