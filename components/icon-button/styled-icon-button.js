import { styled } from "linaria/react";
import Base from "../themes/base";

const StyledIconButton = styled.div`
  width: ${(props) =>
    props.size
      ? Math.abs(parseInt(props.size)) + "px"
      : props.theme.iconButton.width};
  cursor: ${(props) =>
    props.isDisabled || !props.isClickable ? "default" : "pointer"};
  line-height: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:active .user-click-color {
    path {
      fill: ${(props) => props.clickColor} !important;
    }
  }

  &:hover:not(:active) {
    cursor: ${(props) =>
      !props.isDisabled || props.isClickable ? "pointer" : "default"};
    .user-hover-color {
      path {
        fill: ${(props) => props.hoverColor} !important;
      }
    }
  }

  .user-color {
    path {
      fill: ${(props) => props.color} !important;
    }
  }

  ${(props) =>
    props.grayed &&
    `
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  `}
  &.grayed {
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  }
`;

StyledIconButton.defaultProps = { theme: Base };

export default StyledIconButton;
