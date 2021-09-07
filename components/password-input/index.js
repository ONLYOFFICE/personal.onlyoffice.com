import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import StyledPasswordInput from "./styled-password-input";
import TextInput from "../text-input";

import EyeOffIcon from "./svg/eye.off.react.svg";
import EyeIcon from "./svg/eye.react.svg";

const PasswordInput = ({
  isError,
  isSuccess,
  defaultInput,
  value,
  errorText,
  onChange,
  type,
  passwordSettings,
  generatorSpecial,
  autoComplete,
  disabledValidation,
  ...rest
}) => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("");
  const [errorPasswordText, setErrorPasswordText] = useState(null);
  const [isDefault, setIsDefault] = useState(true);
  const [success, setSuccess] = useState(false);
  const [isPwdError, setIsPwdError] = useState(false);
  const [inputType, setInputType] = useState(type);

  const [isDigitsError, setIsDigitsError] = useState(false);
  const [isSpecialSymbolsError, setIsSpecialError] = useState(false);
  const [isLengthError, setIsLengthError] = useState(false);
  const [isCapitalError, setIsCapitalError] = useState(false);

  const [errorTooltip, setErrorTooltip] = useState(false);

  const toggleVisibilityOfPassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };
  const renderTogglerShowOfPassword = () => {
    return inputType === "password" ? (
      <EyeOffIcon className="eye-icon" onClick={toggleVisibilityOfPassword} />
    ) : (
      <EyeIcon className="eye-icon" onClick={toggleVisibilityOfPassword} />
    );
  };

  const validationCheck = (password) => {
    const specSymbolsTest = new RegExp("[" + generatorSpecial + "]");
    const isCapital = passwordSettings.upperCase
      ? /[A-Z]/.test(password)
      : true;

    const isDigits = passwordSettings.digits ? /\d/.test(password) : true;

    const isSpecial = passwordSettings.specSymbols
      ? specSymbolsTest.test(password)
      : true;

    const isLength = passwordSettings.minLength
      ? password.trim().length >= passwordSettings.minLength
      : true;

    setIsSpecialError(!isSpecial);
    setIsCapitalError(!isCapital);
    setIsLengthError(!isLength);
    setIsDigitsError(!isDigits);

    return isCapital && isDigits && isSpecial && isLength;
  };

  const onChangeHandler = (e) => {
    const pwd = e.target.value;
    const pwdIsValid = disabledValidation ? true : validationCheck(pwd);
    setPassword(pwd);
    setIsValid(pwdIsValid);
    onChange && onChange(e, pwdIsValid);
  };

  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && password !== "") {
      setIsDefault(false);
      !isValid && setIsPwdError(true);
      !isPwdError && setErrorPasswordText(errorPasswordText);
      setErrorTooltip(renderErrorText());
    } else {
      setIsDefault(true);
    }
  };

  const onFocus = useCallback(() => {
    if (isValid) {
      setIsDefault(false);
      setSuccess(true);
    } else {
      setIsDefault(true);
      setIsPwdError(false);
      setSuccess(false);
      setErrorTooltip(null);
    }
  }, [isValid]);

  useEffect(() => {
    onFocus(isValid, password);
  }, [isValid, password, onFocus]);

  const TogglerShowOfPassword = renderTogglerShowOfPassword();

  const renderErrorText = () => {
    const {
      lengthErrorText,
      digitsErrorText,
      capitalErrorText,
      specialErrorText,
      tooltipText,
    } = rest;

    return (
      <>
        {!disabledValidation ? (
          <>
            {tooltipText}
            {isLengthError ? lengthErrorText : null}
            {isDigitsError ? `, ${digitsErrorText}` : null}
            {isCapitalError ? `, ${capitalErrorText}` : null}
            {isSpecialSymbolsError ? `, ${specialErrorText}` : null}{" "}
          </>
        ) : (
          errorText
        )}
      </>
    );
  };

  return (
    <StyledPasswordInput {...rest} onBlur={onBlur} onFocus={onFocus}>
      <TextInput
        type={inputType}
        defaultInput={isDefault}
        isSuccess={success || isSuccess}
        isError={isPwdError || isError}
        value={password}
        onChange={onChangeHandler}
        autoComplete={autoComplete}
        errorText={errorTooltip}
        {...rest}
      />
      {TogglerShowOfPassword}
    </StyledPasswordInput>
  );
};

PasswordInput.propTypes = {
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
  value: PropTypes.string,
  /** Text placeholder in input */
  placeholder: PropTypes.string,
  /** Name text in button */
  labelButton: PropTypes.string,
  /** Error text */
  errText: PropTypes.string,
  /** Type of the button */
  typeButton: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  /** Used as HTML name property */
  name: PropTypes.string,
  /** Indicates that the field cannot be used */
  isDisabled: PropTypes.bool,
  /** Focus the input field on initial render */
  isAutoFocussed: PropTypes.bool,
  /** Indicates the input field has an success*/
  isSuccess: PropTypes.bool,
  /** Disabled validation */
  disabledValidation: PropTypes.bool,
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
  /** Set of settings for password generator and validator */
  passwordSettings: PropTypes.object,
};

PasswordInput.defaultProps = {
  generatorSpecial: "!@#$%^&*",
  disabledValidation: true,
  passwordSettings: {
    minLength: 1,
    upperCase: false,
    digits: false,
    specSymbols: false,
  },
  type: "password",
};

export default PasswordInput;
