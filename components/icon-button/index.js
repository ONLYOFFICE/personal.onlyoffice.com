import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledIconButton from "./styled-icon-button";

import { ReactSVG } from "react-svg";

function IconButton(props) {
  const [state, setState] = useState({
    currentIconName: props.iconName,
  });

  const onError = (error, svg) => {
    error && setState({ currentIconName: props.defaultIcon });
  };

  const onMouseEnter = (e) => {
    const {
      isDisabled,
      iconHoverName,
      iconName,

      onMouseEnter,
    } = props;

    if (isDisabled) return;

    setState({
      currentIconName: !("ontouchstart" in document.documentElement)
        ? iconHoverName || iconName
        : iconName,
    });

    onMouseEnter && onMouseEnter(e);
  };

  const onMouseLeave = (e) => {
    const { isDisabled, iconName, onMouseLeave } = props;

    if (isDisabled) return;

    setState({
      currentIconName: iconName,
    });

    onMouseLeave && onMouseLeave(e);
  };

  const onMouseDown = (e) => {
    const {
      isDisabled,
      iconClickName,
      iconName,

      onMouseDown,
    } = props;

    if (isDisabled) return;

    setState({
      currentIconName: !("ontouchstart" in document.documentElement)
        ? iconClickName || iconName
        : iconName,
    });

    onMouseDown && onMouseDown(e);
  };

  const onMouseUp = (e) => {
    const { isDisabled, iconHoverName, iconName, color, onMouseUp } = props;

    if (isDisabled) return;

    switch (e.nativeEvent.which) {
      case 1: //Left click
        setState({
          currentIconName: !("ontouchstart" in document.documentElement)
            ? iconHoverName || iconName
            : iconName,
          currentIconColor: iconHoverName || color,
        });

        onMouseUp && onMouseUp(e);
        break;
      case 3: //Right click
        onMouseUp && onMouseUp(e);
        break;
      default:
        break;
    }
  };

  const {
    className,
    size,
    isDisabled,
    isClickable,
    onClick,
    id,
    style,
    grayed,
    background,
    title,
    clickColor,
    color,
    hoverColor,
  } = props;

  const classNameSVG = `icon-button_svg ${color && "user-color"} ${
    clickColor && "user-click-color"
  } ${hoverColor && "user-hover-color"} `;

  return (
    <StyledIconButton
      id={id}
      className={className}
      size={size}
      isDisabled={isDisabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
      isClickable={typeof onClick === "function" || isClickable}
      style={style}
      color={color}
      clickColor={clickColor}
      hoverColor={hoverColor}
      background={background}
      grayed={grayed}
      title={title}
      {...props}
    >
      <ReactSVG
        className={classNameSVG}
        src={state.currentIconName}
        afterInjection={onError}
      />
    </StyledIconButton>
  );
  //}
}

IconButton.propTypes = {
  /** Set component class */
  className: PropTypes.string,
  /** Icon color */
  color: PropTypes.string,
  /** Icon color on click action */
  clickColor: PropTypes.string,
  /** Icon color on hover action */
  hoverColor: PropTypes.string,
  /** Takes the path to the icon (the icon must be located in a static folder) */
  iconName: PropTypes.string,
  /** Takes the path to the icon (the icon must be located in a static folder) */
  defaultIcon: PropTypes.string,
  /** Icon name on click action */
  iconClickName: PropTypes.string,
  /** Icon name on hover action */
  iconHoverName: PropTypes.string,
  /** Set component id */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Tells when the button should present a disabled state */
  isDisabled: PropTypes.bool,
  /** Set cursor value */
  isClickable: PropTypes.bool,
  /** Set grayed styling */
  grayed: PropTypes.bool,
  /** What the button will trigger when clicked  */
  onClick: PropTypes.func,
  /** If no image is found  */
  onError: PropTypes.func,
  /**  What the button will trigger when cursor down */
  onMouseDown: PropTypes.func,
  /** What the button will trigger when cursor enter */
  onMouseEnter: PropTypes.func,
  /** What the button will trigger when cursor leave icon */
  onMouseLeave: PropTypes.func,
  /** What the button will trigger when cursor up */
  onMouseUp: PropTypes.func,
  /** Accepts css style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Set title */
  title: PropTypes.string,
  /** Button height and width value */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

IconButton.defaultProps = {
  iconName: "/static/images/social_icons/facebook.react.svg",
  isClickable: false,
  isDisabled: false,
  size: 24,
};

export default IconButton;
