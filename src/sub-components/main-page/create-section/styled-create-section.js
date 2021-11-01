import styled, { css } from "styled-components";
import HomeSection from "../../home-section";

const backgroundStyle = css`
  background-image: url("/site-assets/backgrounds/background-homepage.svg");
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 1200px) {
    background-position-x: -10.5vw;
    background-size: 113.25vw;
    padding-bottom: 304px;
  }

  @media (max-width: 1024px) {
    background-position-x: -0.5vw;
    background-size: 98vw;
    padding-bottom: 284px;
  }

  @media (max-width: 592px) {
    background-position-x: -75vw;
    background-size: 235vw;
    padding-bottom: 304px;
  }
`;

const StyledCreateSection = styled(HomeSection)`
  ${backgroundStyle}
  padding-bottom: 384px;
  padding-top: 56px;

  .section-page {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;

    .text-block,
    .form-block {
      max-width: 544px;
      height: 344px;
    }

    .text-block {
      text-align: left;
      padding-top: 88px;
      letter-spacing: -0.03em;
      .description {
        padding-top: 24px;
        font-size: 22px;
        line-height: 150%;
      }

      .description,
      .heading {
        letter-spacing: -0.03em;
      }

      .heading {
        line-height: 60px;
      }
    }

    @media (max-width: 1200px) {
      .text-block,
      .form-block {
        max-width: 454px;
        height: 410px;
      }

      .text-block {
        .heading {
        }

        .description {
          font-size: 18px;
        }
      }
    }

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;

      .text-block,
      .form-block {
        max-width: 100%;
        height: 410px;
      }

      .text-block {
        height: min-content;
        padding: 14px 16px 0 16px;
        text-align: center;
        display: flex;
        flex-direction: column;

        .heading,
        .description {
          text-align: center;
        }
        .description {
          padding-top: 20px;
          padding-bottom: 10px;
        }
      }
    }

    @media (max-width: 592px) {
      width: unset;

      .text-block {
        .heading {
          font-size: 30px;
          line-height: 40px;
          letter-spacing: -0.02em;
        }
        .description {
          font-size: 16px;
          margin-top: -2px;
        }
      }
      .form-block {
        margin-top: unset;
      }
    }
  }
`;

export default StyledCreateSection;
