import { styled } from "linaria/react";
import { Base } from "../themes";

const StyledText = styled.p`
  color: ${(props) => props.color || props.theme.text.textColor};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-size: ${(props) => props.fontSize || props.theme.text.fontSize};
  font-weight: ${(props) => props.fontWeight || props.theme.text.fontWeight};
  text-transform: ${(props) =>
    props.textTransform || props.theme.text.textTransform};
  text-overflow: ${(props) => props.theme.text.textOverflow};
  overflow: ${(props) => props.theme.text.overflow};
  text-align: ${(props) => props.textAlign || props.theme.text.textAlign};
  line-height: ${(props) => props.lineHeight || props.theme.text.lineHeight};

  display: ${(props) => props.theme.text.display};
  margin: ${(props) => props.theme.text.margin};
  padding: ${(props) => props.theme.text.padding};

  text-decoration: ${(props) =>
    props.textDecoration || props.theme.text.textDecoration};

  &:hover {
    text-decoration: ${(props) =>
      props.hoverTextDecoration || props.theme.text.hoverTextDecoration};
  }

  cursor: default;
`;

StyledText.defaultProps = { theme: Base };

export default StyledText;
