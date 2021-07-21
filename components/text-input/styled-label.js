import { styled } from "@linaria/react";
import { Base } from "../themes";

const Label = styled.label`

position: absolute;
top: ${(props) => (props.defaultChecked
  ? props.theme.textInput.label.top
  : "15px")};
font-size: ${(props) => (props.defaultChecked 
  ? props.theme.textInput.label.fontSize 
  : props.theme.textInput.fontSize)};  
padding: ${(props) => props.padding || props.theme.textInput.padding};
margin: ${(props) => props.margin || props.theme.textInput.margin};

background-color: none;

text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
pointer-events: none;
user-select: none;
vertical-align: ${(props) => props.theme.textInput.verticalAlign};

-webkit-transition: top .2s ease-in-out, 
                    font-size .2s ease-in-out;
transition: top .2s ease-in-out, 
            font-size .2s ease-in-out;          
`;

Label.defaultProps = { theme: Base };

export default Label;
