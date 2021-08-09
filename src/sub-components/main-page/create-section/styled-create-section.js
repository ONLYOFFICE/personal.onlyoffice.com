import styled from "styled-components";
import HomeSection from "../../home-section";

const StyledCreateSection = styled(HomeSection)`
  background-image: url("/background-homepage.svg");
  background-repeat: no-repeat;
  background-position: bottom;
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

      letter-spacing: 0.01em;

      .description {
        padding-top: 24px;
        font-size: 22px;
        line-height: 150%;
      }
    }

    @media (max-width: 1200px) {
      .text-block,
      .form-block {
        max-width: 454px;
        height: 410px;
      }
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: min-content 378px;
      .text-block,
      .form-block {
        max-width: 100%;
        height: 410px;
      }
      .text-block {
        height: min-content;
        min-height: 144px;
        padding-top: 16px;
        text-align: center;

        .heading {
          text-align: center;
        }
      }
    }

    @media (max-width: 562px) {
      .heading {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }

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
`;

export default StyledCreateSection;
