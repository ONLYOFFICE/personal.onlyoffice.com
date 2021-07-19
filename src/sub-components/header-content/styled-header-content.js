import { styled } from "linaria/react";

const StyledHeaderContent = styled.div`
  width: 1120px;
  height: 63px;
  margin: 0 auto;

  display: grid;
  grid-gap: 31px;
  grid-template-columns: minmax(54px, 910px) 102px 34px;

  .logo-wrapper {
    margin-top: 26px;
  }

  .header-button {
    height: 48px;
    width: 105px;
    margin-top: 14px;
  }

  .language-selector {
    margin-top: 27px;
  }

  @media (max-width: 1200px) {
    max-width: 928px;
    width: 91vw;
  }

  @media (max-width: 1023px) {
    max-width: none;
    width: 90vw;
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
