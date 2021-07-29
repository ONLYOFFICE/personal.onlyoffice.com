import { styled } from "linaria/react";
import { device } from "../utils/devices";

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
justify-content: space-between;

.infoPanelText{
    padding: 10px;
    padding-left: 10px;
    padding-right: ${(props) => props.imgleft ? "10px" : "0px"};
    p {
        width: ${(props) => props.imgleft ? "504px" : "568px"};
    }
}

@media ${device.laptopM} {
    width: 928px;
    min-height: 355px;
    .infoPanelText{
        width: 100%;
        padding: 32px;
        p {
            width:100%;
        }
    }
}

@media ${device.laptop} {
    width: calc(100% - 96px);
    height: 100%;
    min-height: 354px;
    flex-direction: column;
    .infoPanelText{
        padding: 16px 15px 32px;
        p {
            
        }
    }
}

@media ${device.mobileL} {
    width: 90%;
    height: 100%;
    min-height: auto;
    flex-direction: column;
    .infoPanelText{
       width: 90%;
       padding: 16px 10px 20px;
       margin: 0 auto;
       text-align: center;
        p {
            font-size: 16px;
        }
    }
}


`;

export default StyledInfoPanel;
