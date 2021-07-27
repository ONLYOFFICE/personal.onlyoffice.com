import { styled } from "linaria/react";

const StyledForm = styled.section`
  height: 100%;

  .login-form {
    margin-top: 96px;
  }

  @media (max-width: 768px) {
    .login-form {
      margin-top: 26px;
    }
  }

  @media (max-width: 592px) {
    .login-form {
      margin-top: 0px;
    }
  }
`;

export default StyledForm;
