import { styled } from "linaria/react";
import { Base } from "../themes";

const StyledTextInput = styled.input`
    position: ${(props) => props.theme.textInput.position};
    display: ${(props) => props.theme.textInput.display};
    margin: ${(props) => props.theme.textInput.margin};
    padding: ${(props) => props.padding || props.theme.textInput.padding};
    height: ${(props) => props.height || props.theme.textInput.height};
    width: ${(props) => 
    props.scale ? "100%"
    : props.width || props.theme.textInput.width };

    color: ${(props) => props.color || props.theme.textInput.textColor};
    font-size: ${(props) => props.fontSize || props.theme.textInput.fontSize};
    font-weight: ${(props) => props.fontWeight || props.theme.textInput.fontWeight};
    overflow: ${(props) => props.theme.textInput.overflow};
    line-height: ${(props) => props.theme.textInput.lineHeight};
    text-decoration: ${(props) => props.theme.textInput.textDecoration};
    text-transform: ${(props) => props.theme.textInput.textTransform};
    text-shadow: ${(props) => props.theme.textInput.textShadow};;
    text-align: ${(props) => props.theme.textInput.textAlign};

    outline: ${(props) => props.theme.textInput.outline};   

    border-radius: ${(props) => props.theme.textInput.borderRadius};
    -moz-border-radius: ${(props) => props.theme.textInput.borderRadius};
    -webkit-border-radius: ${(props) => props.theme.textInput.borderRadius};

    box-shadow: ${(props) => props.theme.textInput.boxShadow};
    box-sizing: ${(props) => props.theme.textInput.boxSizing};
    border: ${(props) => props.theme.textInput.border};

    border-color: ${(props) =>
        !props.isDisabled  
        ? props.theme.textInput.disabledBorderColor
        : props.theme.textInput.borderColor};

    background-color: ${(props) =>
        !props.isDisabled 
        ? props.theme.textInput.backgroundColorDisabled 
        : props.theme.textInput.backgroundColor};

    :hover{
    border-color: ${(props) =>
        props.isDisabled 
        ? props.theme.textInput.borderColorDisabled
        : props.theme.textInput.borderColorHover};

    background-color: ${(props) =>
        props.isDisabled 
        ? props.theme.textInput.backgroundColorDisabled
        : props.theme.textInput.backgroundColor};
    }

    :focus{
    border-color: ${(props) =>
        props.isDisabled 
        ? props.theme.textInput.borderColorDisabled
        : props.theme.textInput.borderColor};
    background-color: ${(props) =>
        props.isDisabled 
        ? props.theme.textInput.backgroundColorDisabled
        : props.theme.textInput.backgroundColorPrimaryHover};
    }

    cursor: ${(props) =>(props.isDisabled ? "default" : "pointer")};
`;

StyledTextInput.defaultProps = { theme: Base };


export default StyledTextInput;
