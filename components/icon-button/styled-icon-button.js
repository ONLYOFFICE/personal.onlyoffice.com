import { styled } from "linaria/react";

const StyledIconButton = styled.div`
  width: ${(props) =>
    props.size ? Math.abs(parseInt(props.size)) + "px" : "20px"};
  cursor: ${(props) =>
    props.isDisabled || !props.isClickable ? "default" : "pointer"};
  line-height: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  svg {
    &:not(:root) {
      width: 100%;
      height: 100%;
    }
    path {
      fill: ${(props) => props.color};
    }
  }
`;

export default StyledIconButton;
