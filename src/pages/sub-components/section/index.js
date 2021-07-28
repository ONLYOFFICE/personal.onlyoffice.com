import { styled } from "linaria/react";

const StyledForm = styled.section`
  height: 100%;

  .login-form {
    margin-top: 96px;
    padding-bottom: 184px;
  }
  @media (max-width: 1024px) {
    padding-bottom: 163px;
  }

  @media (max-width: 768px) {
    .login-form {
      margin-top: 26px;
    }
  }

  @media (max-width: 592px) {
    .login-form {
      margin-top: 0px;
      padding: 96px 0 0;
    }
  }
`;

export default StyledForm;
