import React, { useRef } from 'react';
import InputLabel from '../inputLbl';
import ValidationText from '../validationText';

const InputTextarea = ({
  inputRef,
  parentExtraCls,
  inputValidate,
  type = 'text',
  onBlur = () => {},
  extraAttri = {},
  hiddenlabel,
  labelConfig,
  validationConfig
}) => {
  const parentDiv = useRef(null);

  function handleBlur(e) {
    onBlur(e);
  }
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
          <textarea
            autoComplete='off'
            onBlur={handleBlur}
            ref={inputRef}
            {...extraAttri}
          ></textarea>
          <ValidationText {...validationConfig} />
        </div>
      </div>
    </>
  );
};

export default InputTextarea;
