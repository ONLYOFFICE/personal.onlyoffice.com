import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StyledIconButton from "./styled-icon-button";

import isEmpty from "lodash/isEmpty";
import { ReactSVG } from "react-svg";

function IconButton(props) {
  const [state, setState] = React.useState({
    currentIconName: props.iconName,
    currentIconColor: props.color
  })

  const onMouseEnter = (e) => {
    const {
      isDisabled,
      iconHoverName,
      iconName,
      hoverColor,
      color,
      onMouseEnter,
    } = props;

    if (isDisabled) return;

    setState({
      currentIconName: !("ontouchstart" in document.documentElement)
        ? iconHoverName || iconName
        : iconName,
      currentIconColor: hoverColor || color,
    });

    onMouseEnter && onMouseEnter(e);
  }

  const onMouseLeave = (e) => {
    const { isDisabled, iconName, color, onMouseLeave } = props;

    if (isDisabled) return;

    setState({
      currentIconName: iconName,
      currentIconColor: color,
    });

    onMouseLeave && onMouseLeave(e);
  };

  const onMouseDown = (e) => {
    const {
      isDisabled,
      iconClickName,
      iconName,
      clickColor,
      color,
      onMouseDown,
    } = props;

    if (isDisabled) return;

    setState({
      currentIconName: !("ontouchstart" in document.documentElement)
        ? iconClickName || iconName
        : iconName,
      currentIconColor: clickColor || color,
    });

    onMouseDown && onMouseDown(e);
  };

  const onMouseUp = (e) => {
    const {
      isDisabled,
      iconHoverName,
      iconName,
      color,
      onMouseUp,
    } = props;

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
    isFill,
    isClickable,
    onClick,
    id,
    style,
    dataTip,
    title
  } = props;

  return (
    <StyledIconButton
      className={className}
      size={size}
      isDisabled={isDisabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
      isClickable={typeof onClick === "function" || isClickable}
      data-tip={dataTip}
      data-event="click focus"
      data-for={id}
      style={style}
      color={state.currentIconColor}
      title={title}
      {...props}
    >

      <p>{state.currentIconName}</p>
      <ReactSVG
        className="icon-button_svg not-selectable"
        src={state.currentIconName}
      />
    </StyledIconButton>
  );
  //}
};

IconButton.propTypes = {
  /** Set component class */
  className: PropTypes.string,
  /** Icon color */
  color: PropTypes.string,
  /** Icon color on click action */
  clickColor: PropTypes.string,
  /** Icon color on hover action */
  hoverColor: PropTypes.string,
  /** Icon name */
  iconName: PropTypes.string.isRequired,
  /** Icon name on click action */
  iconClickName: PropTypes.string,
  /** Icon name on hover action */
  iconHoverName: PropTypes.string,
  /** Set component id */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Tells when the button should present a disabled state */
  isDisabled: PropTypes.bool,
  /** Determines if icon fill is needed */
  isFill: PropTypes.bool,
  /** Set cursor value */
  isClickable: PropTypes.bool,
  /** What the button will trigger when clicked  */
  onClick: PropTypes.func,
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
  dataTip: PropTypes.string,
};

IconButton.defaultProps = {
  size: 24,
  isFill: true,
  iconName: "/static/social_icons/facebook.react.svg",
  isDisabled: false,
  isClickable: false,
  dataTip: "",
};

export default IconButton;