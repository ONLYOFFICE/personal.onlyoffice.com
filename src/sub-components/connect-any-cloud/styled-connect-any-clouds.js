import { styled } from "linaria/react";
import { device } from "../../../components/utils/devices";

const StyledConnectAnyCloud = styled.div`
    padding: 112px 0;
    background-color: ${(props) => props.bgColor || "white"};

    h2 {
        display: block;
        color: #333;
        text-align: center;
        padding: 0 0 30px;
        font-size: 32px !important;
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
        }
    }

    @media ${device.tablet} {
        padding: 82px 0;

        h2 {
            padding: 0 0 20px;
            font-size: 30px !important;
        }
      }
    
    @media ${device.mobileL} {
        padding: 48px 0 80px;

        h2 {
            padding: 0 0 10px;
            font-size: 20px !important;
        }
    }
`;

export default StyledConnectAnyCloud;
