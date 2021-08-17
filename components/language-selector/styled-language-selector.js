import styled from "styled-components";

export default styled.div`
  width: 36px;
  display: grid;
  grid-template-columns: 18px 6px;
  grid-column-gap: 2px;
  position: relative;

  .arrow-image,
  .flag-image {
    cursor: pointer;
  }

  .arrow-image {
    margin-top: -4px;
  }
`;

const StyledItemsList = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  width: max-content;
  max-width: 766px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(
    ${(props) => Math.ceil(props.countLanguages + 1 / 3)},
    auto
  );
  grid-auto-flow: column;
  grid-row-gap: 22px;
  grid-column-gap: 32px;
  z-index: 100;
  padding: 36px 32px;
  top: 20px;
  right: 18px;

  .header-lng {
    display: none;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight:bold;    
    color: #444444;
    
  }
  .close-button-img{
    display: none;
    position: fixed;
    top:21px;
    right: 21px;
  }

  @media (max-width: 892px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(
      ${(props) => Math.ceil(props.countLanguages / 2)},
      auto
    );
  }
  @media (max-width: 622px) {
    overflow: scroll;
    overflow-x: hidden;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(${(props) => props.countLanguages}, auto);
    max-height: 492px;
  }
  @media (max-width: 592px) {
    box-sizing: border-box;
    overflow-x: hidden;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(${(props) => props.countLanguages + 2}, auto);
    min-height: 492px;   
    position: fixed;
    top: 0px;
    right: -0px;
    min-width: 100vw;
    max-height: 100vh;    
    padding: 36px 32px;

    .header-lng {
    display: block;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;    
    color: #444444;
    margin-bottom: 4px;
    
    }
    .close-button-img{
      display: block;
    }
  }
`;

const StyledItem = styled.div`
  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    margin-left: 12px;
    margin-top: -5px;
    color: #333;
    vertical-align: middle;
  }
  .title-lng:hover {
    color: #ff865c;
  }
`;

export { StyledItem, StyledItemsList };
