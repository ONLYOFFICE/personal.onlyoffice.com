import styled from "styled-components";
import InfoPanel from "../../../../../components/info-panel";

const StyledDesktopAppPanel = styled(InfoPanel)`
  .desktop-button {
    padding-right: 8px;
  }

  @media (max-width: 1024px) {
    .desktop-image {
      .info-panel-img {
        margin-top: -71px;
      }
    }

    .desktop-button {
      margin-bottom: 17px;
      padding-right: 0;
    }
  }

  @media (max-width: 592px) {
    .desktop-button {
      width: 100%;
      height: 48px;

      .desktop-button-component {
        height: 48px;
      }
    }

    .desktop-image {
      .info-panel-img {
        margin-top: -120px;
      }
    }
  }
`;

export default StyledDesktopAppPanel;
