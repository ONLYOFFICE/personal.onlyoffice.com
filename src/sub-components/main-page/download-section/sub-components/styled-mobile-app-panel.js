import styled from "styled-components";
import InfoPanel from "../../../../../components/info-panel";

const StyledMobileAppPanel = styled(InfoPanel)`
  .mobile-button {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: auto auto;
    width: min-content;

    @media (max-width: 592px) {
      grid-template-columns: 1fr;
      width: 100%;
      align-items: center;
    }
  }

  @media (max-width: 1200px) {
    .mobile-button {
      padding-left: 32px;
    }
  }

  @media (max-width: 1024px) {
    .mobile-app-img {
      .info-panel-img {
        margin-top: -10px;
      }
    }

    .mobile-button {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 592px) {
    .mobile-button {
      padding: 0;
    }

    .mobile-app-img {
      .info-panel-img {
        margin-top: -42px;
      }
    }
  }
`;

export default StyledMobileAppPanel;
