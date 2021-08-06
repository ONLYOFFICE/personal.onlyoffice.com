import { styled } from "linaria/react";
import { device } from "../../../../components/utils/devices";

const StyledConnectAnyCloud = styled.div`
h2 {
    display: block;
}

ul.clouds {
    margin: auto;
    padding: 0;
    max-width: 1120px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;

    li {
        list-style-type: none;
        display: block;
        margin: auto;
        height: 124px;
        
        .cloud_item {
            position: relative;
            top: 25%;
            -webkit-transition: filter 0.5s,-webkit-filter 0.5s;
            -moz-transition: filter 0.5s,-webkit-filter 0.5s;
            -o-transition: filter 0.5s,-webkit-filter 0.5s;
            transition: filter 0.5s,-webkit-filter 0.5s;

            svg {
                height: 62px;
            }
        }
    }
}

@media ${device.laptop} {
h2 {
    padding: 0 0 32px !important;
}

ul.clouds {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

    li {
        width: 25%;
        margin: 0;

        .cloud_item {
            margin: auto;
        }
    }
}
}

@media ${device.tablet} {
h2 {
    font-size: 30px !important;
    }
}
    
@media (max-width: 592px) {
h2 {
    font-size: 20px !important;
    padding: 0 0 24px !important;
    }

    ul.clouds {
        li {
            width: 50%;
        }
    }
}
`;

export default StyledConnectAnyCloud;
