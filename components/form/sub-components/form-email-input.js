import React from "react";

import EmailInput from "../../email-input";
import TextInput from "../../text-input";

const FormEmailInput = (props) => {
  const { item } = props;
  const {
    placeholder,
    callback,
    value,
    labelButton,
    withButton,
    isSubmit,
    typeButton,
    onButtonClick,
  } = item;

  return (
    <TextInput
      className="form-email"
      label={placeholder}
      typeButton={typeButton}
      onChange={callback}
      scale
      checkButton={withButton}
      isSubmit={isSubmit}
      value={value}
      labelButton={labelButton}
      onClick={onButtonClick}
    />
  );
};

export default FormEmailInput;
