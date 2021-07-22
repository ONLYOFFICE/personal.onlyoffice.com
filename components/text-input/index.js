import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import StyleGroupInput from "./styled-group";
import StyledTextInput from "./styled-text-input";
import StyledButton from "./styled-button";
import StyledInput from "./styled-input";
import Label from "./styled-label";

const TextInput = ({
  className,
  id,
  type,
  label,
  onChange,
  isDisabled,
  isAutoFocussed,
  isSuccess,
  isError,
  checkButton,
  idButton,
  classNameButton,
  typeButton,
  styleButton,
  squareButton,
  labelButton,
  iconButton,
  onClick,
  isSubmit,
  ...rest
}) => {
  const inputTextRef = useRef(null);

  useEffect(() => {
    if (isAutoFocussed) inputTextRef.current.focus();
  }, []);

  return (
    <StyleGroupInput>
      <StyledInput {...rest}>
        <StyledTextInput
          type={type}
          className={className}
          disabled={isDisabled}
          isAutoFocussed={isAutoFocussed}
          isSuccess={isSuccess}
          isError={isError}
          checkButton={checkButton}
          isDisabled={isDisabled}
          onChange={onChange}
          ref={inputTextRef}
          {...rest}
        />
        <Label defaultChecked={rest.value !== ""}>{label}</Label>
      </StyledInput>
      {Boolean(checkButton) && (
        <StyledButton
          id={idButton}
          className={classNameButton}
          typeButton={typeButton}
          label={labelButton}
          isDisabled={isDisabled}
          isAutoFocussed={isAutoFocussed}
          isSuccess={isSuccess}
          isError={isError}
          onClick={onClick}
          height={rest.height}
          style={styleButton}
          icon={iconButton}
          squareButton={squareButton}
          isSubmit={isSubmit}
          minwidth="min-content"
        />
      )}
    </StyleGroupInput>
  );
};

TextInput.propTypes = {
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
  /** label text in input */
  label: PropTypes.string,
  /** Name text in button */
  labelButton: PropTypes.string,
  /** Supported type of the input fields */
  type: PropTypes.oneOf(["email", "password", "text"]),
  /** Type of the button */
  typeButton: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  /** Used as HTML name property */
  name: PropTypes.string,
  /** Scale width to 100% */
  scale: PropTypes.bool,
  /** Indicates that the field cannot be used */
  isDisabled: PropTypes.bool,
  /** Focus the input field on initial render */
  isAutoFocussed: PropTypes.bool,
  /** Indicates the input field has an success*/
  isSuccess: PropTypes.bool,
  /** Indicates the input field has an error */
  isError: PropTypes.bool,
  /** square button type */
  squareButton: PropTypes.bool,
  /** enable  button*/
  checkButton: PropTypes.bool,
  /**Called with the new value. Required when input is not read only. Parent should pass it back as value */
  onChange: PropTypes.func,
  /** What the button will trigger when clicked */
  onClick: PropTypes.func,
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

TextInput.defaultProps = {
  label: "",
  type: "text",
  value: "",
  isDisabled: false,
  isAutoFocussed: false,
  isSuccess: false,
  isError: false,
  checkButton: false,
  squareButton: false,
  tabIndex: -1,
};

export default TextInput;
