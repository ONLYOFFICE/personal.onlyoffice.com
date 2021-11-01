import styled from "styled-components";

const StyledPasswordInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .eye-icon {
    cursor: pointer;
    position: absolute;
    top: 32%;
    right: 16px;
    z-index: 2;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default StyledPasswordInput;
