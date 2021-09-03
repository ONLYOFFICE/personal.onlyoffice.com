import styled from "styled-components";

const StyledLayout = styled.div`
  height: 100%;
  background-color: transparent;
  background-image: url("/site-assets/backgrounds/background.svg");
  background-position: center -508px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1200px) {
    background-position: -67vw -46vw;
    background-size: 225vw;
  }

  @media screen and (max-width: 1023px) {
    background-position: -114vw -67vw;
    background-size: 320vw;
  }

  @media screen and (max-width: 592px) {
    background-position: -353vw -164vw;
    background-size: 780vw;
  }
`;

export default StyledLayout;
