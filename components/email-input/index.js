import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import StyledEmailInput from "./styled-email-input";
import TextInput from "../text-input";
import Text from "../text";

const EmailInput = ({
  isError,
  isSuccess,
  defaultInput,
  value,
  errText,
  isErrText,
  onChange,
  type,
  autoComplete,
  offValidation,
  ...rest
}) => {
  //TODO: use email-addresses package
  const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState("");
  const [valid, setValid] = useState("");
  const [errorText, setErrorText] = useState("");
  const [emailDefault, setEmailDefault] = useState(true);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const Validate = (email) => {
    return REGEX.test(email);
  };

  const onChangeHandler = (e) => {
    const email = e.target.value;
    const emailValid = Validate(email);
    setEmail(email);
    offValidation ? setValid(true) : setValid(emailValid);
    onChange && onChange(e, emailValid);
  };

  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      email === "" ? setEmailDefault(true) : setEmailDefault(false);
      !valid && !!email && setEmailError(true);
      !emailError && !!email && setErrorText(errText);
    }
  };

  const onFocus = useCallback(() => {
    if (valid) {
      setEmailDefault(false);
      setEmailSuccess(true);
    } else {
      setEmailDefault(true);
      setEmailError(false);
      setEmailSuccess(false);
    }
  }, [valid]);

  useEffect(() => {
    onFocus(valid, email);
  }, [valid, email, onFocus]);

  return (
    <StyledEmailInput {...rest} onBlur={onBlur} onFocus={onFocus}>
      <TextInput
        type="email"
        defaultInput={emailDefault}
        isSuccess={emailSuccess || isSuccess}
        isError={emailError || isError}
        value={email}
        onChange={onChangeHandler}
        autoComplete={autoComplete}
        {...rest}
      />
      {isErrText && (
        <Text className="email-error-text" fontSize="13px" color="#CB0000">
          {errorText}
        </Text>
      )}
    </StyledEmailInput>
  );
};

EmailInput.propTypes = {
  /** padding text input */
  padding: PropTypes.string,
  /**  width text input */
  width: PropTypes.string,
  /**  height text input*/
  height: PropTypes.string,
  /** color text input */
  color: PropTypes.string,
  /** color hover text input */
  colorHover: PropTypes.string,
  /** font-size text input */
  fontSize: PropTypes.string,
  /** font-weight text input*/
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Value of the input */
  value: PropTypes.string.isRequired,
  /** Text placeholder in input */
  placeholder: PropTypes.string,
  /** Name text in button */
  labelButton: PropTypes.string,
  /** Error text */
  errText: PropTypes.string,
  /** Supported type of the input fields */
  type: PropTypes.oneOf(["email", "password", "text"]),
  /** Type of the button */
  typeButton: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  /** Used as HTML name property */
  name: PropTypes.string,
  /** Check error text */
  isErrText: PropTypes.bool,
  /** Indicates that the field cannot be used */
  isDisabled: PropTypes.bool,
  /** Focus the input field on initial render */
  isAutoFocussed: PropTypes.bool,
  /** Indicates the input field has an success*/
  isSuccess: PropTypes.bool,
  /** Indicates the input field has an error */
  isError: PropTypes.bool,
  /** Disabled validation*/
  offValidation: PropTypes.bool,
  /** square button type */
  squareButton: PropTypes.bool,
  /** enable  button*/
  withButton: PropTypes.bool,
  /**Called with the new value. Required when input is not read only. Parent should pass it back as value. Returns the current value and the flag of validity */
  onChange: PropTypes.func,
  /** What the button will trigger when clicked */
  buttonClick: PropTypes.func,
  /** onBlur func */
  onBlur: PropTypes.func,
  /** Text input tab index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts button id */
  idButton: PropTypes.string,
  /** Accepts button class */
  classNameButton: PropTypes.string,
};

EmailInput.defaultProps = {
  isErrText: false,
  offValidation: false,
};

export default EmailInput;
