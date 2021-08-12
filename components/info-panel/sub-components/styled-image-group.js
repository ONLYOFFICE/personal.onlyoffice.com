import styled from "styled-components";
import { device } from "../../utils/devices";

const StyledImagesGroup = styled.div`
  height: 380px;
  position: relative;
  width: 550px;

  .info-panel-img {
    svg {
      position: absolute;
      width: 100%;
      bottom: 0px;
      right: ${(props) => (props.imgLeft ? "unset" : "-10px")};
    }
  }

  @media ${device.laptopM} {
    height: 354px;

    .info-panel-img {
    }
  }

  @media ${device.laptop} {
    height: 380px;
    margin-top: -28px;

    .info-panel-img {
    }
  }

  @media (max-width: 592px) {
    .info-panel-img {
      height: 200px;
    }
  }
`;

export default StyledImagesGroup;
