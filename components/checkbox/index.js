import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../text";
import { StyledLabel, HiddenInput } from "./styled-checkbox";
import CheckboxCheckedIcon from "../../src/images/checkbox/checkbox.checked.svg";
import CheckboxIcon from "../../src/images/checkbox/checkbox.svg";

const Checkbox = (props) => {
  const ref = React.createRef();

  const [state, setState] = useState({ checked: props.isChecked });

  const onInputChange = (e) => {
    setState({ checked: e.target.checked });
    props.onChange && props.onChange(e);
  };

  return (
    <StyledLabel
      id={props.id}
      style={props.style}
      isDisabled={props.isDisabled}
      isIndeterminate={props.isIndeterminate}
      className={props.className}
    >
      <HiddenInput
        type="checkbox"
        checked={state.checked}
        isDisabled={props.isDisabled}
        ref={ref}
        value={props.value}
        onChange={onInputChange}
      />
      <img src={state.checked ? CheckboxCheckedIcon : CheckboxIcon} />
      {props.label && (
        <Text
          as="span"
          title={props.title}
          isDisabled={props.isDisabled}
          className="checkbox-text"
        >
          {props.label}
        </Text>
      )}
    </StyledLabel>
  );
};

Checkbox.propTypes = {
  /** Used as HTML id property */
  id: PropTypes.string,
  /** Used as HTML `name` property */
  name: PropTypes.string,
  /** Value of the input */
  value: PropTypes.string,
  /** Label of the input */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The checked property sets the checked state of a checkbox */
  isChecked: PropTypes.bool,
  /** Disables the Checkbox input */
  isDisabled: PropTypes.bool,
  /** Will be triggered whenever an CheckboxInput is clicked */
  onChange: PropTypes.func,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts css style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Title */
  title: PropTypes.string,
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;
