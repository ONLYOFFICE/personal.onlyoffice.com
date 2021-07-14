import React, {useRef} from "react";
import PropTypes from "prop-types";
import StyledTextInput from "./styled-text-input";
import StyledInput from "./styled-input";
import Label from "./styled-label";

const TextInput = ({ 
  className,
  id, 
  type, 
  label, 
  value,
  onChange,
  isDisabled,
  isAutoFocussed,
  isSuccess,
  isError, 
  ...rest}) => {

  const inputTextRef = useRef(null);

  if(isAutoFocussed) {
    useEffect(()=>{
      inputTextRef.current.focus();
    }, []);
  }

  return (
            <StyledInput {...rest}>    
                <StyledTextInput 
                  type={type} 
                  className={className} 
                  value={value}
                  disabled={isDisabled}
                  isAutoFocussed={isAutoFocussed}
                  isSuccess={isSuccess}
                  isError={isError}
                  onChange={onChange}
                  ref={inputTextRef}
                  {...rest} 
                />
                <Label defaultChecked={Boolean(value)}>{label}</Label>                  
            </StyledInput>
  );
};

TextInput.propTypes = {
    /**   text color */
    padding: PropTypes.string,
    /**   text color */
    width: PropTypes.string,
    /**   text color */
    height: PropTypes.string,
    /**   text color */
    color: PropTypes.string,
    /**   text color */
    colorHover: PropTypes.string,
    /**   text font-size */
    fontSize: PropTypes.string,
    /**   text font-weight */
    fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**  */
    value: PropTypes.string.isRequired,
    /**  */
    label: PropTypes.string,
    /**  */
    type: PropTypes.oneOf(["email", "password", "text"]),
    /**  */
    name: PropTypes.string,
    /** 100% */
    scale: PropTypes.bool,
    /**  */
    isDisabled: PropTypes.bool,
    /**  */
    isAutoFocussed: PropTypes.bool,
    /**  */
    isSuccess: PropTypes.bool,
    /**  */
    isError: PropTypes.bool, 
    /**  */
    onChange: PropTypes.func,
    /**  */
    tabIndex: PropTypes.number,
    /** Accepts id */
    id: PropTypes.string,
    /** Accepts class */
    className: PropTypes.string,
};

TextInput.defaultProps = {
  label: "",
  type: "text",
  value: "",
  isDisabled: false,
  isAutoFocussed: false,
  isSuccess: false,
  isError: false, 
  tabIndex: -1
};

export default TextInput;
