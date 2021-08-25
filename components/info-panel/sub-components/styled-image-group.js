import styled from "styled-components";
import { device } from "../../utils/devices";

const StyledImagesGroup = styled.div`
  .info-panel-img {
  }

  @media ${device.laptopM} {
    height: 354px;

    .info-panel-img {
    }
  }

  @media ${device.laptop} {
    .info-panel-img {
    }
  }

  @media (max-width: 592px) {
    .info-panel-img {
    }
  }
`;

export default StyledImagesGroup;
