import styled from "styled-components";
import { device } from "../../utils/devices";

const StyledInfoPanelImg = styled.div`
height: 380px;
    img{
        bottom: 0;
        padding-top: 5px;
        height: 375px;
    }

@media ${device.laptopM} {
height: 354px;
    img{
        bottom: 0;
        padding-top: 5px;
        height: 349px;
    }
}

@media ${device.laptop} {
height: 380px;
margin-top: -28px;
    img{
        bottom: 0;
        padding-top: 5px;
        height: 375px;
    }
}

@media (max-width: 575px) {
height: 200px;
    img{
        bottom: 0;
        padding-top: 5px;
        height: 195px;
    }
}

@media (${device.mobileM}) {
height: 175px;
    img{
        bottom: 0;
        padding-top: 5px;
        height: 175px;
    }
}
`;

export default StyledInfoPanelImg;