import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styled-button";
import { useTheme } from "../theme-provider";
import { ReactSVG } from "react-svg";
import { Base } from "../themes";
import { Dark } from "../themes";
const Icon = ({ icon }) => {
  return <ReactSVG src={icon} className="btn-with-icon"/>;
};

const Button = ({ label, isDisabled, icon, themeButton, isSubmit, isScale, ...rest }) => {
  const theme = useTheme(themeButton ? Base : Dark);

  return (
    <StyledButton
      disabled={isDisabled}
      theme={theme}
      type={isSubmit ? "submit" : undefined}
      isScale={isScale ? isScale : undefined}
      themeButton={themeButton}
      {...rest}
    >
      {icon && <Icon icon={icon} />} {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button text */
  label: PropTypes.string,
  /** Tells type of button style */
  typeButton: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  /** Tells when the button should present a disabled state */
  isDisabled: PropTypes.bool,
  /** Width of button */
  width: PropTypes.string,
  /** Height of button */
  height: PropTypes.string,
  /** Scale width of button to 100% */
  isScale: PropTypes.bool,
  /** Propority button hover */
  isHover: PropTypes.bool,
  /** Takes the path to the icon (the icon must be located in a static folder)  */
  icon: PropTypes.string,
  /** Button tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
  /** Theme Button*/
  themeButton: PropTypes.bool,
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Sets the nim width of the button */
  minwidth: PropTypes.string,
  /** What the button will trigger when clicked */
  onClick: PropTypes.func,
  /** If the button should submit the form */
  isSubmit: PropTypes.bool,
};

Button.defaultProps = {
  label: "",
  typeButton: "primary",
  width: "auto",
  height: "56px",
  themeButton: true,
  icon: null,
  tabIndex: -1,
  minwidth: "unset",
  isDisabled: false,
};

export default Button;
