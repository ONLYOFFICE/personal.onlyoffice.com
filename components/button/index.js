import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styled-button";
import { useTheme } from "../theme-provider";
import { ReactSVG } from "react-svg";

const Icon = ({ icon }) => {
  return <ReactSVG src={icon} className="btn-with-icon" />;
};

const Button = ({ label, isDisabled, icon, ...rest }) => {
  const theme = useTheme();

  return (
    <StyledButton disabled={isDisabled} theme={theme} {...rest}>
      {icon && <Icon icon={icon} />} {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button text */
  label: PropTypes.string,
  /** Tells type of button style */
  type: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  /** Tells when the button should present a disabled state */
  isDisabled: PropTypes.bool,
  /** Width of button */
  width: PropTypes.string,
  /** Height of button */
  height: PropTypes.string,
  /** Scale width of button to 100% */
  scale: PropTypes.bool,
  /** Takes the path to the icon (the icon must be located in a static folder)  */
  icon: PropTypes.string,
  /** Button tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Sets the nim width of the button */
  minwidth: PropTypes.string,
  /** What the button will trigger when clicked */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  type: "primary",
  width: "auto",
  height: "56px",
  icon: null,
  tabIndex: -1,
  minwidth: null,
  isDisabled: false,
};

Button.displayName = "Button";

export default Button;
