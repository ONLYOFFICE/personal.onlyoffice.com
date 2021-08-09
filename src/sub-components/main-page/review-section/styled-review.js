import styled from "styled-components";
import HomeSection from "../../home-section";

const StyledReview = styled(HomeSection)`
  display: flex;
  position: relative;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;

  .review-description {
    max-width: 806px;
  }

  .review-panel-block {
    padding: 56px 0;
    box-sizing: border-box;
    display: flex;
    gap: 1em;

    .review-card {
      display: flex;
      flex-direction: column;
      gap: 1em;
      .review_block_fcs {
        display: block;
      }
      .review_block_last {
        display: none;
      }
    }
  }

  @media (max-width: 1024px) {
    .review-panel-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
      padding: 32px 0 16px 0;
      .review-card {
        display: flex;
        flex-direction: column;
        gap: 1em;
        .review_block_fcs {
          display: none;
        }
        .review_block_last {
          display: block;
        }
      }
    }

    .review-description {
      width: 90vw;
    }
  }

  @media (max-width: 600px) {
    .review-panel-block {
      width: 100%;
      margin: 0 auto;
      padding: 12px 0 8px 0;
    }

    .review-heading {
      font-size: 18px;
    }
  }

  @media (max-width: 578px) {
    padding-bottom: 68px;
    .review-panel-block {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledReview;
