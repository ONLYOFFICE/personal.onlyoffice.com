import React from "react";

import TextInput from "../../text-input";

const FormTextInput = (props) => {
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
      className="text-password"
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

export default FormTextInput;
