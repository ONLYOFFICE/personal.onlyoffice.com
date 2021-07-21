import React from "react";
import PropTypes from "prop-types";
import StyledEmailInput from "./styled-email-input";
import TextInput from "../text-input";
import Text from "../text";

const EmailInput = ({ 
  isError, 
  isSuccess, 
  value, 
  onChange, 
  type, 
  ...rest}) => {

  const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = React.useState('');
  const [valid, setValid] = React.useState();
  const [errorText, setErrorText] = React.useState('');
  const [emailSuccess, setEmailSuccess] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  
  function Validate(email){
    return REGEX.test(email);
  }

  function changeHandler(event){
    const email = event.target.value;
    const emailValid = Validate(email);
    setEmail(email);
    setValid(emailValid);
  }

  const onBlur = React.useCallback((e) => {
    if(!e.currentTarget.contains(e.relatedTarget)) {
      if(!valid){
        setEmailError(true);
        setEmailSuccess(false);
      } else{
        setEmailError(false);
        setEmailSuccess(true); 
      }
      if(!emailError){
        if(email === ''){
          setErrorText('This field can’t be empty');
        } else{
          setErrorText('Incorrect email format');
        }
      }
    }
  }, [valid]);  

 const onFocus = React.useEffect(() => {
    if(valid){
      setEmailError(false);
      setEmailSuccess(true); 
    } 
  },[valid]);

  return(
    <StyledEmailInput 
    {...rest} 
    onBlur={onBlur}
    onFocus={onFocus}
    >
      <TextInput 
        type="email"
        isSuccess={emailSuccess}
        isError={emailError}
        value={email}
        onChange={changeHandler}
        {...rest}
      />
      {emailError
        &&
          <Text 
            fontSize="13px"
            color="#CB0000"
          >
            {errorText}
          </Text>
      }
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

EmailInput.defaultProps = {};

export default EmailInput;
