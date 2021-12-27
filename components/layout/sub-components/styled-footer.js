import styled from "styled-components";

const StyledFooter = styled.footer`
  position: ${(props) => (props.isHomePage ? "relative" : "absolute")};
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export default StyledFooter;
