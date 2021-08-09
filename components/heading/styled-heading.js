import styled from "styled-components";
import { Base } from "../themes";
import StyledText from "../text/styled-text";

const fontSizeStyle = (props) => props.theme.header.fontSize[props.level];
const lineHeightStyle = (props) => props.theme.header.lineHeight[props.level];

const StyledHeading = styled(StyledText)`
font-size: ${(props) => props.fontSize || fontSizeStyle(props)};
line-height: ${(props) => props.lineHeight || lineHeightStyle(props)};
font-weight: ${(props) => props.fontWeight || props.theme.header.fontWeight};
color: ${(props) => props.color || props.theme.header.color};  
text-transform: ${(props) => props.textTransform || props.theme.header.textTransform};
text-decoration: ${(props) => props.textDecoration || props.theme.header.textDecoration};
text-align: ${(props) => props.textAlign || props.theme.header.textAlign};
padding: ${(props) => props.padding || props.theme.header.padding};
/*overflow: ${(props) => props.theme.header.overflow};*/
  color: ${(props) => props.textColor || "#333"};
`;

StyledHeading.defaultProps = { theme: Base };

export default StyledHeading;
