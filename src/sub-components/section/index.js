import styled from "styled-components";

const StyledForm = styled.section`
  height: 100%;

  .login-form {
    margin-top: 96px;
    padding-bottom: 184px;
  }
  @media (max-width: 1024px) {
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
