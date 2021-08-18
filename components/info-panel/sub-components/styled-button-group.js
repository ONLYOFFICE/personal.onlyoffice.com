import styled from "styled-components";

const StyledButtonsGroup = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${(props) =>
    props.countItems ? `repeat(${props.countItems}, max-content)` : "1fr"};
  width: min-content;
  margin: 0 auto;

  @media (max-width: 592px) {
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
  }
`;

export default StyledButtonsGroup;
