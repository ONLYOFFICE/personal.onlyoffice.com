import styled from "styled-components";
import HomeSection from "../../home-section";

const StyledDownloadSection = styled(HomeSection)`
  margin: 0 auto;
  padding-bottom: 112px;
  .download-heading {
    margin-top: 104px;
    margin-bottom: 26px;
  }
  .section-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }

  .panel-text {
    width: 504px;
    margin: 0 auto;
    margin-top: 115px;
    text-align: center;
  }

  .extension-text {
    align-self: end;
    padding-left: 9px;
  }

  .panel-buttons {
    align-self: start;
    margin: -10px auto;
  }

  .extension-button {
    padding-left: 9px;
  }

  .desktop-button {
    padding-right: 8px;
  }

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

  .panel-image {
    position: relative;
    height: 100%;
    svg {
      position: absolute;
      width: 100%;
      bottom: 0px;
    }
  }

  .extension-img {
    right: -33px;
    svg {
      height: 318px;
      width: 514px;
    }
  }

  .mobile-app-img {
    right: -22px;
  }

  @media (max-width: 1200px) {
    .download-heading {
      margin-top: 114px;
    }
    .panel-text {
      width: 312px;
      margin-top: 67px;
    }
    .extension-text {
      padding-left: 0;
    }
    .panel-buttons {
      width: auto;
    }
    .mobile-button {
      padding-left: 32px;
    }

    .extension-img {
      right: -20px;
      svg {
        height: 298px;
      }
    }

    .desktop-image {
      svg {
        height: 309px;
      }
    }

    .mobile-app-img {
      svg {
        height: 339px;
        right: -4px;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;

    .download-heading {
      font-size: 30px;
      margin-top: 89px;
    }

    .section-page {
      width: auto;
      padding: 0 48px;
    }

    .panel-text {
      width: auto;
      margin-top: 32px;
      padding: 0 32px 2px 32px;
    }

    .panel-buttons {
      margin-bottom: 14px;
    }

    .desktop-button {
      margin-bottom: 17px;
      padding-right: 0;
    }

    .mobile-button {
      margin-bottom: 10px;
    }
    .panel-image {
      position: relative;
      height: 100%;
      margin: 0 auto;

      svg {
        position: relative;
        width: 100%;
        bottom: -5px;
      }
    }
    .extension-img {
      right: 0;
      svg {
        height: 316px;
      }
    }

    .desktop-image {
      svg {
        height: 330px;
      }
    }

    .mobile-app-img {
      right: 0;
      svg {
        height: 390px;
      }
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

    .panel-text,
    .panel-buttons,
    .panel-image {
      width: auto;
    }

    .panel-text {
      margin-top: 15px;
    }
    .panel-buttons {
      margin-bottom: 0;
    }

    .extension-img {
      svg {
        height: 169px;
        margin-top: -20px;
      }
    }

    .desktop-button {
      width: 100%;
      height: 48px;
      .desktop-button-component {
        height: 48px;
      }
    }
    .desktop-link {
      width: calc(100% - 32px);
      margin-left: 16px;
    }

    .desktop-image {
      svg {
        height: 180px;
        margin-top: -8px;
      }
    }

    .mobile-button {
      padding: 0;
    }
    .mobile-app-img {
      svg {
        height: 206px;
      }
    }
  }
`;

export default StyledDownloadSection;
