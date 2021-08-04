import { styled } from "linaria/react";
import { device } from "../../../../components/utils/devices";

const StyledConnectAnyCloud = styled.div`
h2 {
    display: block;
    padding: 0 0 30px;
}

.clouds {
    margin: auto;
    padding: 0;
    max-width: 1119px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: space-evenly;
    -webkit-justify-content: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;

    li {
        list-style-type: none;
        display: inline-block;
        margin: 0;
        margin: 40px 15px;
        
        .cloud_item {
            -webkit-transition: filter 0.5s,-webkit-filter 0.5s;
            -moz-transition: filter 0.5s,-webkit-filter 0.5s;
            -o-transition: filter 0.5s,-webkit-filter 0.5s;
            transition: filter 0.5s,-webkit-filter 0.5s;
        }
    }
}

@media ${device.tablet} {
h2 {
    padding: 0 0 20px;
    font-size: 30px !important;
    }
}
    
@media ${device.mobileL} {
h2 {
    padding: 0 0 10px;
    font-size: 20px !important;
    }
}
`;

export default StyledConnectAnyCloud;
