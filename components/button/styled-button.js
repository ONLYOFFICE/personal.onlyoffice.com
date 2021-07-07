import { styled } from "linaria/react";

const StyledButton = styled.button`
  box-sizing: border-box;
  height: ${(props) => props.height};
  width: ${(props) => (props.scale ? "100%" : props.width)};
  min-width: ${(props) => props.minwidth};

  border: ${(props) => props.type === "transparent" && "1px solid #444444"};
  border-radius: 3px;

  font-size: 13px;
  font-weight: 600;
  font-family: "​Open Sans", sans-serif;
  text-transform: uppercase;

  color: ${(props) => (props.type === "transparent" ? "#444444" : "#ffffff")};

  padding: 21px 22px 22px 22px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;

  background-color: ${(props) =>
    props.type === "primary"
      ? "#ff6f3d"
      : props.type === "transparent"
      ? "transparent"
      : "#444444"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.type === "primary"
        ? "#ff865c"
        : props.type === "transparent"
        ? "transparent"
        : "#555555"};
    border-color: ${(props) => props.type === "transparent" && "#ff6f3d"};
    color: ${(props) => (props.type === "transparent" ? "#ff6f3d" : "#ffffff")};
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
    background-color: ${(props) =>
      props.type === "primary"
        ? "#ff6f3d"
        : props.type === "transparent"
        ? "transparent"
        : "#444444"};
    border-color: ${(props) => props.type === "transparent" && "#444444"};
    color: ${(props) => (props.type === "transparent" ? "#444444" : "#ffffff")};
  }
`;

export default StyledButton;
