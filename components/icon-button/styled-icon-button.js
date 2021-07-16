import { styled } from "linaria/react";
import Base from "../themes/base";

const StyledIconButton = styled.div`
  width: ${(props) =>
    props.size ? Math.abs(parseInt(props.size)) + "px" : props.theme.iconButton.width};
  cursor: ${(props) =>
    props.isDisabled || !props.isClickable ? "default" : "pointer"};
  line-height: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    cursor: ${(props) =>
      !props.isDisabled || props.isClickable ? "pointer" : "default" };
  }
  &.fillColored {
    svg {
      &:not(:root) {
        width: 100%;
        height: 100%;
        }
        path {
          fill: ${(props) => props.color};
        }
    }
  }
  ${(props) => props.grayed && `
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
