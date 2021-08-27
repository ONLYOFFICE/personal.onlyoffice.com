import styled from "styled-components";

const StyledPasswordInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .pwd-error-text {
    position: absolute;
    padding-top: 55px;
  }

  .eye-icon {
    cursor: pointer;
    position: absolute;
    top: 32%;
    right: 24px;
  }
`;

export default StyledPasswordInput;
