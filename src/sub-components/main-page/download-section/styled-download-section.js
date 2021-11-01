import styled from "styled-components";
import HomeSection from "../../home-section";

const StyledDownloadSection = styled(HomeSection)`
  margin: 0 auto;
  padding-bottom: 112px;
  .download-section-icon-component {
    transition: 0.5s;
  }
  .download-heading {
    margin-top: 104px;
    margin-bottom: 26px;
  }
  .section-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }

  @media (hover: hover) and (pointer: fine) {
    .download-section-icon-component:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .panel-image {
    position: relative;
    height: 100%;
    .info-panel-img {
      width: 100%;
      align-self: end;
    }
  }

  @media (max-width: 1200px) {
    .download-heading {
      margin-top: 114px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;

    .download-heading {
      font-size: 30px;
    }

    .section-page {
      width: auto;
      padding: 0 48px;
    }

    .panel-image {
      position: relative;
      height: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 592px) {
    padding-bottom: 48px;
    .download-heading {
      font-size: 20px;
      margin-top: -8px;
      margin-bottom: -14px;
    }

    .section-page {
      padding: 0 16px;
    }
  }
`;

export default StyledDownloadSection;
