import { styled } from "linaria/react";

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
  grid-template-rows: repeat(${(props) => props.countLanguages / 3}, auto);
  grid-auto-flow: column;
  grid-row-gap: 22px;
  grid-column-gap: 32px;
  z-index: 100;
  padding: 36px 32px;
  top: 20px;
  right: 18px;

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
`;

const StyledItem = styled.div`
  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    margin-left: 12px;
    margin-top: -5px;
    color: #333;
  }
  .title-lng:hover {
    color: #ff865c;
  }
`;

export { StyledItem, StyledItemsList };
