import styled from "styled-components";

const StyledCookieSnackbar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 14px;
  align-items: center;

  width: "100%";

  .cookie-text,
  .cookie-link {
    font-size: 13px;
    font-family: "Open Sans";
  }

  .cookie-button {
    width: max-content;
    white-space: normal;
  }

  @media (max-width: 592px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
    .cookie-text,
    .cookie-link {
      font-size: 12px;
    }
    .cookie-button {
      height: 41px;
      width: 100%;
    }
  }
`;
export default StyledCookieSnackbar;
