import { styled } from "linaria/react";
import { Base } from "../themes";

import Text from "../text";

const StyledLink = styled(Text)`
  color: ${(props) => props.color || props.theme.a.textColor};

  font-size: ${(props) => props.fontSize || props.theme.a.fontSize};
  font-weight: ${(props) => props.fontWeight || props.theme.a.fontWeight};
  text-transform: ${(props) =>
    props.textTransform || props.theme.a.textTransform};
  text-overflow: ${(props) => props.theme.a.textOverflow};
  text-align: ${(props) => props.theme.a.textAlign};
  line-height: ${(props) => props.theme.a.lineHeight};

  display: ${(props) => props.theme.a.display};
  margin: ${(props) => props.theme.a.margin};
  padding: ${(props) => props.theme.a.padding};

  text-decoration: ${(props) =>
    props.textDecoration || props.theme.a.textDecoration};
  &:hover {
    cursor: pointer;
    text-decoration: ${(props) =>
      props.hoverTextDecoration || props.theme.a.hoverTextDecoration};
  }
`;

StyledLink.defaultProps = { theme: Base };

export default StyledLink;
