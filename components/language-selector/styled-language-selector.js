import styled from "styled-components";

export default styled.div`
  width: 36px;
  display: grid;
  grid-template-columns: 18px 6px;
  grid-column-gap: 2px;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .arrow-image {
    margin-top: -4px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .flag-image {
    height: 100%;
    width: 100%;
    margin-top: -11px;

    @media (max-width: 592px) {
      margin-top: -5px;
    }
  }
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  width: max-content;
  max-width: 1008px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  grid-template-rows: repeat(
    ${(props) => Math.ceil(props.countLanguages / 3)},
    auto
  );
  grid-auto-flow: column;
  grid-row-gap: 22px;
  grid-column-gap: 32px;
  z-index: 100;
  padding: 36px 32px;
  top: 20px;
  right: 18px;
  width: max-content;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }

  @media (max-width: 1024px) {
    max-width: calc(100vw - 180px);
  }
`;

const StyledMobileView = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  background-color: white;
  position: fixed;
  z-index: 100;
  top: 0px;
  right: -40px;
  height: calc(100% - 60px);
  width: 100%;
  padding: 30px 20px;
  border: none;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: auto;
  grid-gap: 18px;

  .header-lng {
    margin-bottom: 30px;
    height: 100%;
  }

  .close-button-img {
    position: fixed;
    top: 23px;
    right: 20px;
  }
`;

const StyledItem = styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    margin-top: -5px;
    color: #333;
    vertical-align: middle;
    width: 100%;
  }

  .language-item-image {
    margin-top: -1px;
  }

  .language-item-link {
    display: grid;
    grid-template-columns: 18px auto;
    width: 100%;
    text-decoration: none;
    grid-gap: 12px;
  }

  .title-lng:hover {
    color: #ff865c;
    cursor: pointer;
  }
`;

export { StyledItem, StyledPanelView, StyledMobileView };
