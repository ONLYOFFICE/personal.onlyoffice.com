import { styled } from "linaria/react";
import Base from "../themes/base";

const IconWrapper = styled.div`
align-self: end;
display: flex;
  svg {
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
    color: #000000;
    margin-right: 11px;
  }
`;
IconWrapper.defaultProps = { theme: Base };

const StyledDiv = styled.div`
 .toast-title {
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    font-size: 12px;
    margin: 0;
    line-height: 24px;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
StyledDiv.defaultProps = { theme: Base };

export {StyledDiv, IconWrapper };