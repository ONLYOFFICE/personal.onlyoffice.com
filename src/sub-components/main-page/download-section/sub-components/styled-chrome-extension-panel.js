import styled from "styled-components";
import InfoPanel from "../../../../../components/info-panel";

const StyledChromeExtensionPanel = styled(InfoPanel)`
  .extension-icon-component {
    transition: 0.5s;
  }
  .extension-text {
    align-self: end;
    padding-left: 9px;
  }

  .extension-button {
    padding-left: 9px;
  }

  @media (hover: hover) and (pointer: fine) {
    .extension-icon-component:hover {
      background-color: rgba(51, 51, 51, 0.05);
    }
  }

  @media (max-width: 1200px) {
    .extension-text {
      padding-left: 0;
    }
  }

  @media (max-width: 1024px) {
    .extension-img {
      .info-panel-img {
        margin-top: -71px;
      }
    }
  }
`;

export default StyledChromeExtensionPanel;
