import React from "react";
import styled from "styled-components";
import BackgroundSvg from "../svg/background.react.svg";

const StyledBackground = styled.div`
  position: relative;
  z-index: -1;
  margin: 0 auto;

  .layout-background {
    position: absolute;
    top: -508px;
    left: -1220px;
    z-index: -1;

    @media screen and (max-width: 1200px) {
      top: -52vw;
      left: -118vw;
      width: 228vw;
      height: 123vw;
    }

    @media screen and (max-width: 1023px) {
      top: -67vw;
      left: -164vw;
      width: 320vw;
      height: 160vw;
    }

    @media screen and (max-width: 592px) {
      top: -164vw;
      left: -402vw;
      width: 780vw;
      height: 390vw;
    }
  }
`;

const Background = () => (
  <StyledBackground>
    <BackgroundSvg className="layout-background" />
  </StyledBackground>
);

export default Background;
