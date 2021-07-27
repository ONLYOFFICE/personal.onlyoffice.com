import { styled } from "linaria/react";

const StyledAdditionalSection = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;

    margin-top: 32px;

    .additional-text {
      margin: 0 auto;
    }
  }

  @media (max-width: 592px) {
    .additional-button {
      height: 50px;
    }
  }
`;

export default StyledAdditionalSection;
