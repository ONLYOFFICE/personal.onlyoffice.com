import { styled } from "linaria/react";
import { Base } from "../themes";
import StyledText from "../text/styled-text";

const fontSizeStyle = (props) => props.theme.header.fontSize[props.level];
const lineHeightStyle = (props) => props.theme.header.lineHeight[props.level];

const StyledHeading = styled(StyledText)`
  font-size: ${(props) => props.fontSize || fontSizeStyle(props)};
  line-height: ${(props) => props.lineHeight || lineHeightStyle(props)};
  font-weight: ${(props) => props.fontWeight || props.theme.header.fontWeight};
  //overflow: ${(props) => props.theme.header.overflow};
`;

StyledHeading.defaultProps = { theme: Base };

export default StyledHeading;
