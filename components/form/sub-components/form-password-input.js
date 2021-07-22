import React from "react";

import PasswordInput from "../../password-input";
import TextInput from "../../text-input";

const FormPasswordInput = (props) => {
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
      className="form-password"
      label={placeholder}
      typeButton={typeButton}
      onChange={callback}
      scale
      withButton={withButton}
      isSubmit={isSubmit}
      value={value}
      labelButton={labelButton}
      onClick={onButtonClick}
    />
  );
};

export default FormPasswordInput;
