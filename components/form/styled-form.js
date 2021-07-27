import { styled } from "linaria/react";
import { Base } from "../themes";

const StyledForm = styled.form`
  max-width: ${(props) =>
    !props.isPanel ? props.maxwidth || "544px" : "100%"};
  margin: 0 auto;
  border: ${(props) => props.isPanel && props.theme.form.border};
  border-radius: ${(props) => props.theme.form.borderRadius};
  box-shadow: ${(props) => props.isPanel && props.theme.form.boxShadow};
  padding: ${(props) => props.theme.form.padding};

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) =>
    `repeat(${props.itemsCount}, 'min-content')`};

  grid-gap: ${(props) =>
    props.gap ? props.gap : props.isPanel ? "16px" : "32px"};

  .form-header {
    text-align: ${(props) => (!props.isPanel ? "center" : "unset")};
  }

  .form-button {
    margin: ${(props) => props.isPanel && "8px 0"};
  }

  .to-hide-button {
    display: none;
  }

  .form-input {
    margin-bottom: ${(props) => props.isPanel && "8px"};
  }

  .form-separator {
    margin-top: ${(props) => (props.isPanel ? "-4px" : "6px")};
    margin-bottom: ${(props) => (props.isPanel ? "18px" : "-2px")};
  }

  @media (max-width: 1023px) {
    .form-header {
      text-align: center;
    }
  }

  @media (max-width: 592px) {
    grid-gap: ${(props) =>
      props.gap ? props.gap : props.isPanel ? "16px" : "24px"};

    .form-button {
      height: 48px;
      margin: 0;
    }

    .form-input {
      height: 50px;
      margin: 0;
    }

    .to-hide-button {
      display: inline-block;
    }

    .form-separator {
      margin-top: ${(props) => (props.isPanel ? "8px" : "-8px")};
      margin-bottom: ${(props) => (props.isPanel ? "22px" : "unset")};
    }

    .form-header {
      font-size: 18px !important;
      margin-bottom: -8px;
    }
  }
`;

StyledForm.defaultProps = {
  theme: Base,
};

export default StyledForm;
