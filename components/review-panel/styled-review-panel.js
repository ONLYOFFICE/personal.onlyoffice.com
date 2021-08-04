import { styled } from "linaria/react";
import { device } from "../utils/devices";
import { Base } from "../themes";

const StyledReviewPanel = styled.div`
width: 310px;

margin: ${(props) => props.margin || props.theme.reviewPanel.margin};
padding: ${(props) => props.padding || props.theme.reviewPanel.padding};
display: ${(props) => props.theme.reviewPanel.display};
flex-direction: column;
max-width: ${(props) => props.theme.reviewPanel.maxWidth};
background-color: ${(props) => props.theme.reviewPanel.backgroundColor};
border: ${(props) => props.theme.reviewPanel.border};
border-radius: ${(props) => props.theme.reviewPanel.borderRadius};

.headerReviewPanel{
    display: ${(props) => props.theme.reviewPanel.display};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${(props) => props.paddingBottomHeader || props.theme.reviewPanel.paddingBottom};
}

@media(max-width: 1200px){
    width: 239px;
}

@media ${device.laptop} {
    width: 239px;
}

@media ${device.tablet} {
    padding: ${(props) => props.theme.reviewPanel.padding};
    .headerReviewPanel{
        padding-bottom: ${(props) => props.theme.reviewPanel.media.device.paddingBottom};
    }
}

@media ${device.mobileL} {
    margin: 0px;
    padding: ${(props) => props.theme.reviewPanel.media.mobile.padding};
    p{
        font-size: ${(props) => props.theme.reviewPanel.media.mobile.fontSize};
        line-height: ${(props) => props.theme.reviewPanel.media.mobile.lineHeight};
    }
    .headerReviewPanel{
        padding-bottom: ${(props) => props.theme.reviewPanel.media.mobile.paddingBottom};
    }
}

@media ${device.mobileL} {
    width: 290px; 
}
`;

StyledReviewPanel.defaultProps = { theme: Base };

export default StyledReviewPanel;
