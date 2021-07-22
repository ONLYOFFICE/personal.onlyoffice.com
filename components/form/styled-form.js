import { styled } from "linaria/react";
import { Base } from "../themes";

const StyledForm = styled.form`
  width: 100%;
  border: ${(props) => props.isPanel && props.theme.form.border};
  border-radius: ${(props) => props.theme.form.borderRadius};
  box-shadow: ${(props) => props.isPanel && props.theme.form.boxShadow};
  padding: ${(props) => props.theme.form.padding};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) =>
    `repeat(${props.itemsCount}, 'min-content')`};
  grid-gap: ${(props) =>
    props.gap ? props.gap : props.isPanel ? "8px" : "16px"};

  .form-header {
    margin-bottom: ${(props) => (props.isPanel ? "8px" : "18px")};
    text-align: ${(props) => (!props.isPanel ? "center" : "unset")};
  }

  @media (max-width: 1023px) {
    .form-header {
      text-align: center;
    }
  }
`;

StyledForm.defaultProps = {
  theme: Base,
};

export default StyledForm;
