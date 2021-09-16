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
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  width: max-content;
  max-width: 766px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  grid-template-columns: repeat(3, auto);
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
    margin-left: 12px;
    margin-top: -5px;
    color: #333;
    vertical-align: middle;
    width: 10vw;
  }

  .title-lng:hover {
    color: #ff865c;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .title-lng {
      width: 70vw;
    }
  }
`;

export { StyledItem, StyledPanelView, StyledMobileView };
