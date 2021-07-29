import { styled } from "linaria/react";
import { device } from "../utils/devices";
import { Base } from "../themes";

const StyledInfoPanel = styled.div`
display: ${(props) => props.theme.infoPanel.display};
flex-direction: ${(props) => props.imgLeft 
    ? props.theme.infoPanel.flexDirectionLeft
    : props.theme.infoPanel.flexDirectionRight};
justify-content: ${(props) => props.theme.infoPanel.justifyContent};
align-items: ${(props) => props.theme.infoPanel.alignItems};
width: ${(props) => props.theme.infoPanel.width};
min-height: ${(props) => props.theme.infoPanel.minHeight};
margin: ${(props) => props.theme.infoPanel.margin};
margin-bottom: ${(props) => props.theme.infoPanel.marginBottom};

background: ${(props) => (props.bgColor || props.theme.infoPanel.background)};
border: ${(props) => props.theme.infoPanel.border};
border-radius: ${(props) => props.theme.infoPanel.borderRadius};
box-shadow: ${(props) => props.theme.infoPanel.boxShadow}; 
box-sizing: ${(props) => props.theme.infoPanel.boxSizing};

.infoPanelText{
    padding: ${(props) => props.theme.infoPanel.infoPanelText.padding};
    padding-left: 10px;
    padding-right:10px;
    p {
        width: ${(props) => props.theme.infoPanel.infoPanelText.pWidthRight};
    }
}

@media ${device.laptopM} {
    width: ${(props) => props.theme.infoPanel.laptopM.width};
    min-height: ${(props) => props.theme.infoPanel.laptopM.minHeight};
    .infoPanelText{
        width: 100%;
        padding: ${(props) => props.theme.infoPanel.laptopM.padding};
        p {
            width:100%;
        }
    }
}

@media ${device.laptop} {
    width: ${(props) => props.theme.infoPanel.laptop.width};
    height: ${(props) => props.theme.infoPanel.laptop.height};
    min-height: 354px;
    flex-direction: ${(props) => props.theme.infoPanel.laptop.flexDirection};
    .infoPanelText{
        padding: ${(props) => props.theme.infoPanel.laptop.padding};
    }
}

@media ${device.mobileL} {
    width: ${(props) => props.theme.infoPanel.mobileL.width};
    height: ${(props) => props.theme.infoPanel.mobileL.height};
    min-height: auto;
    flex-direction: ${(props) => props.theme.infoPanel.mobileL.flexDirection};
    .infoPanelText{
       width: ${(props) => props.theme.infoPanel.mobileL.width};
       padding: ${(props) => props.theme.infoPanel.mobileL.padding};
       margin: 0 auto;
       text-align: center;
        p {
            font-size: 16px;
        }
    }
}
`;

StyledInfoPanel.defaultProps = { theme: Base };

export default StyledInfoPanel;
