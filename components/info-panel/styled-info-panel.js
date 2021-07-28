import { styled } from "linaria/react";

const StyledInfoPanel = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
width: 1120px;
margin-bottom: 32px;
min-height: 380px;
border: 1px solid #ccc;
box-shadow: 0px 7px 15px rgb(85 85 85 / 10%);
box-sizing: border-box;
background: ${(props) => (props.bgColor || "transparent")};
border-radius: 5px;
flex-direction: ${(props) => props.imgleft ? "row-reverse" : "none"};

.infoPanelText{
    max-width: 510px;
    margin: 0 30px;
    padding-top: 10px;
}
`;

export default StyledInfoPanel;
