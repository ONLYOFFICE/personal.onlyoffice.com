import styled, { css } from "styled-components";
import { device } from "../utils/devices";
import { Base } from "../themes";

const headingStyle = css`
  .info-panel-heading * {
    font-size: 22px;
    letter-spacing: -0.02em;
    line-height: 160%;
    color: ${(props) => (props.whiteBackground ? "#333333" : "#ffffff")};
    vertical-align: baseline;
    display: inline;
    margin-right: 4px;

    @media (max-width: 592px) {
      font-size: 14px;
    }
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
  grid-template-rows: 1fr 1fr;
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

  .info-panel-heading {
    grid-area: ${(props) =>
      props.imageOnLeft ? "1 / 2 / 1 / 2" : "1 / 1 / 1 / 1"};
  }

  .info-panel-button-group {
    grid-area: ${(props) =>
      props.imageOnLeft ? "2 / 2 / 2 / 2" : "2 / 1 / 2 / 1"};
  }

  .info-panel-image-group {
    grid-area: ${(props) =>
      props.imageOnLeft ? "1 / 1 / 3 / 1" : "1 / 2 / 3 / 2"};
  }

  @media ${device.laptopM} {
    height: 354px;
    max-width: 928px;
    width: 100%;

    .info-panel-button-group,
    .info-panel-heading {
      width: 312px;
    }

    .info-panel-image-group {
      width: 550px;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 32px;
    height: min-content;

    .info-panel-heading {
      grid-area: unset;
    }

    .info-panel-button-group {
      grid-area: unset;
    }

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
`;

StyledInfoPanel.defaultProps = { theme: Base };

export default StyledInfoPanel;
