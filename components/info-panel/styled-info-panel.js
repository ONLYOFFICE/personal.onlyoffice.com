import { styled } from "linaria/react";

const StyledInfoPanel = styled.div`

    display: flex;
    width: 1200px;
    margin: 0 auto;
    align-items: center;
    margin: 0 auto;
    width: 1120px;
    margin-bottom: 32px;
    min-height: 380px;
    border: 1px solid #ccc;
    box-shadow: 0px 7px 15px rgb(85 85 85 / 10%);
    box-sizing: border-box;
    background-image: ${(props) =>  ( props.bgColor )};
    border-radius: 5px;

`;
const StyledInfoPanelText = styled.div`
    width:50%;
    font-size: 22px;
    letter-spacing: -0.02em;
    line-height: 256px;
    padding: 32px;
    text-align: center;
    width: 504px;
`;

const StyledInfoPanelImg = styled.div`
    width:50%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    height: 380px;    
    
`;

const StyledGroupButton = styled.div`
        
    
`;



export {StyledInfoPanel, StyledInfoPanelText, StyledInfoPanelImg,StyledGroupButton};
