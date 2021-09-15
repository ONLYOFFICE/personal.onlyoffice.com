import styled, { css } from "styled-components";
import { device } from "../utils/devices";
import { Base } from "../themes";

const headingStyle = css`
  .info-panel-heading * {
    color: ${(props) => (props.whiteBackground ? "#333333" : "#ffffff")};
  }
`;

const orangeStyle = css`
  background: linear-gradient(98.93deg, #ff8e3d 16.64%, #ff6f3d 99.83%);
  border: 1px solid #cccccc;

  ${headingStyle}
`;

const grayStyle = css`
  background: linear-gradient(100.79deg, #666 23.25%, #444 78.7%);
  border: 1px solid #cccccc;

  ${headingStyle}
`;

const whiteStyle = css`
  background: #ffffff;
  border: 1px solid #cccccc;

  ${headingStyle}
`;

const StyledInfoPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 33px 0;
  width: 1118px;
  height: 380px;

  overflow: hidden;

  ${(props) => props.orangeBackground && orangeStyle}
  ${(props) => props.grayBackground && grayStyle}
  ${(props) => props.whiteBackground && whiteStyle}

  border-radius: 5px;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);

  align-items: center;

  .info-panel-image-group {
    grid-area: ${(props) => (props.imageOnLeft ? "1 / 1 " : "1 / 2 ")};
    .info-panel-img {
      position: absolute;
      bottom: 0;
    }
  }

  @media ${device.laptopM} {
    min-height: 354px;
    max-width: 928px;
    width: 100%;
    height: min-content;

    .info-panel-image-group {
      width: 500px;
      display: flex;
      align-items: center;
      .info-panel-img {
        position: relative;
      }
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 32px;
    height: min-content;

    .info-panel-image-group {
      grid-area: unset;
    }
  }

  @media (max-width: 700px) {
    width: 100%;

    .info-panel-image-group {
      width: auto;
    }
  }

  @media (max-width: 592px) {
    .info-panel-image-group {
      .info-panel-img {
        height: 200px;
      }
    }
  }
`;

StyledInfoPanel.defaultProps = { theme: Base };

export default StyledInfoPanel;
