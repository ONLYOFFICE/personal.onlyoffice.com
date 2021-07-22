import React from "react";

import Checkbox from "../../checkbox";

const FormCheckbox = (props) => {
  const { item } = props;
  const { callback, isChecked, label } = item;

  const renderCheckbox = () => {
    if (typeof label === "string")
      return (
        <Checkbox
          className="form-checkbox"
          onChange={callback}
          isChecked={isChecked}
          label={label}
        />
      );

    if (Array.isArray(label)) {
      const labelCheckbox = label.shift();

      return (
        <div style={{ display: "flex" }}>
          <Checkbox
            className="form-checkbox"
            onChange={callback}
            isChecked={isChecked}
            label={labelCheckbox}
          />

          {label}
        </div>
      );
    }
  };

  return renderCheckbox();
};

export default FormCheckbox;
