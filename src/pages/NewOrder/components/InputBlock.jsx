import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function InputBlock({
  svg,
  labelText,
  product,
  value,
  placeholder,
  isDisabled,
  style,
  isAddress,
  isTelephone,
  isTime,
  isComment,
  isProduct
}) {
  const [inputValue, setInputValue] = useState(value);
  console.log(inputValue);
  return (
    <label className="label">
      <div className="que" style={style}>
        {svg}
        {labelText}
      </div>
      {(isAddress || isTime || isComment || isProduct) && (
        <input
          className="input-block"
          value={product}
          placeholder={placeholder}
          disabled={isDisabled}
          onInput={e => setInputValue(e.target.value)}
        />
      )}
      {isTelephone && (
        <InputMask
          className="input-block"
          value={product}
          placeholder={placeholder}
          disabled={isDisabled}
          onInput={e => setInputValue(e.target.value)}
          mask="+7 (999) 999 99 99"
        />
      )}
      {/* <InputMask
          className="input-block"
          value={product}
          placeholder={placeholder}
          disabled={isDisabled}
          onInput={e => setInputValue(e.target.value)}
          mask="+7 (999) 999 99 99"
        /> */}
      {/* <input
                className="input-block"
                value={product}
                placeholder={placeholder}
                disabled={isDisabled}
                onInput={(e) => setInputValue(e.target.value)} /> */}
    </label>
  );
}

export default InputBlock;
