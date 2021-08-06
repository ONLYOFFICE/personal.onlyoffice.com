import styled from "styled-components";

const StyledAdditionalSection = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;

    margin-top: ${(props) => props.marginTop || "32px"};

    .additional-text {
      margin: 0 auto;
    }

    .additional-button {
      height: 48px;
    }
  }

  @media (max-width: 592px) {
    margin-top: ${(props) => props.smallMarginTop || "32px"};
  }
`;

export default StyledAdditionalSection;
