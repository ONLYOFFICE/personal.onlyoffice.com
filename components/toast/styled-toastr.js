import styled from "styled-components";
import Base from "../themes/base";

const IconWrapper = styled.div`
  align-self: start;
  display: flex;
  svg {
    width: ${(props) => props.theme.toastr.svg.width};
    min-width: ${(props) => props.theme.toastr.svg.minWidth};
    height: ${(props) => props.theme.toastr.svg.height};
    min-height: ${(props) => props.theme.toastr.svg.minHeight};
    color: ${(props) => props.theme.toastr.svg.color};
    margin-right: ${(props) => props.theme.toastr.svg.marginRight};
  }
`;
IconWrapper.defaultProps = { theme: Base };

const StyledDiv = styled.div`
  .toast-title {
    -ms-word-wrap: ${(props) => props.theme.toastr.title.wordWrap};
    word-wrap: ${(props) => props.theme.toastr.title.wordWrap};
    font-size: ${(props) => props.theme.toastr.title.fontSize};
    margin: ${(props) => props.theme.toastr.title.margin};
    line-height: ${(props) => props.theme.toastr.title.lineHeight};
    cursor: ${(props) => props.theme.toastr.title.cursor};
    -webkit-touch-callout: ${(props) => props.theme.toastr.title.userSelect};
    -webkit-user-select: ${(props) => props.theme.toastr.title.userSelect};
    -khtml-user-select: ${(props) => props.theme.toastr.title.userSelect};
    -moz-user-select: ${(props) => props.theme.toastr.title.userSelect};
    -ms-user-select: ${(props) => props.theme.toastr.title.userSelect};
    user-select: ${(props) => props.theme.toastr.title.userSelect};
  }
`;
StyledDiv.defaultProps = { theme: Base };

export { StyledDiv, IconWrapper };
