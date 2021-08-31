import styled, { css } from "styled-components";

const StyledHeaderContent = styled.div`
  width: 1120px;
  height: 63px;
  margin: 0 auto;

  display: grid;
  grid-gap: 24px;
  grid-template-columns: minmax(54px, 924px) min-content 34px;

  ${(props) =>
    props.withoutButton &&
    css`
      .header-button {
        display: none !important;
      }
    `}

  .logo-wrapper {
    margin-top: 26px;

    .header-text {
      float: right;
    }
  }

  .header-button {
    height: 48px;
    min-width: 105px;
    margin-top: 14px;
    letter-spacing: 0.48px;
    font-weight: 500;
  }

  .language-selector {
    margin-top: 27px;
    margin-left: 6px;
  }

  @media (max-width: 1200px) {
    max-width: 928px;
    width: 91vw;
  }

  @media (max-width: 1023px) {
    max-width: none;
    width: 90vw;
  }

  @media (max-width: 768px) {
    .header-text {
      display: none;
    }

    .header-button {
      display: ${(props) => props.toHideButton && "none"};
    }
  }

  @media (max-width: 592px) {
    padding: 0 8px;
    grid-template-columns: 1fr 1fr 1fr;

    .logo-wrapper {
      width: 25px;
      overflow: hidden;
      margin-top: 24px;
    }

    .header-button {
      height: 40px;
      margin: 16px auto auto auto;
    }

    .language-selector {
      margin: 27px 0 auto auto;
    }
  }
`;

export default StyledHeaderContent;
