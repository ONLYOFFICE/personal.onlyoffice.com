import React from "react";
import PropTypes from "prop-types";

import StyledForm from "./styled-form";

import FormHeading from "./sub-components/form-heading";
import FormEmailInput from "./sub-components/form-email-input";
import FormPasswordInput from "./sub-components/form-password-input";
import FormTextInput from "./sub-components/form-text-input";
import FormCheckbox from "./sub-components/form-checkbox";
import Button from "../button";

import Separator from "../separator";

const Form = (props) => {
  const { isPanel, formData, onSubmitForm } = props;

  const formElements = [];

  formData.map((item, indx) => {
    switch (item.element) {
      case "heading":
        formElements.push(
          <FormHeading
            key={`${item.element}-${indx}`}
            item={item}
            isPanel={isPanel}
          />
        );
        break;

      case "email-input":
        formElements.push(
          <FormEmailInput key={`${item.element}-${indx}`} item={item} />
        );
        break;
      case "password-input":
        formElements.push(
          <FormPasswordInput key={`${item.element}-${indx}`} item={item} />
        );
        break;
      case "text-input":
        formElements.push(
          <FormTextInput key={`${item.element}-${indx}`} item={item} />
        );
        break;
      case "checkbox":
        formElements.push(
          <FormCheckbox key={`${item.element}-${indx}`} item={item} />
        );
        break;
      default:
        break;
    }
  });

  const itemsCount = formElements.length;

  return (
    <StyledForm {...props} itemsCount={itemsCount} onSubmit={onSubmitForm}>
      {formElements}
    </StyledForm>
  );
};

Form.propTypes = {
  isPanel: PropTypes.bool,
  formData: PropTypes.arrayOf(PropTypes.object),
};

Form.defaultProps = {};

export default Form;
