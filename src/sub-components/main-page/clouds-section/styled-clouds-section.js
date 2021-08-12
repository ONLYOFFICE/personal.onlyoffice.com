import styled from "styled-components";
import { device } from "../../../../components/utils/devices";
import HomeSection from "../../home-section";

const StyledCloudsSection = styled(HomeSection)`
  padding-bottom: 85px;

  .clouds-header {
    display: block;
    padding: 0 0 30px;
    font-size: 32px;
  }

  .clouds {
    display: flex;
    width: 1120px;
    height: 124px;
    padding: 0;
    margin: 0 auto;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;

    .item-cloud {
      cursor: default;
    }
  }

  @media ${device.laptopM} {
    .clouds {
      max-width: 928px;
      width: 91vw;
    }
  }

  @media ${device.laptop} {
    .clouds {
      max-width: none;
      width: 90vw;
      justify-content: center;
      margin-bottom: 105px;

      .item-cloud {
        text-align: center;
        width: 25%;
        height: 124px;
      }
    }
  }

  @media ${device.tablet} {
    .clouds-header {
      padding: 0 0 20px;
      font-size: 30px;
    }
  }

  @media (max-width: 592px) {
    .clouds-header {
      padding: 0 0 10px;
      font-size: 20px;
    }

    .clouds {
      padding-bottom: 91px;
      .item-cloud {
        width: 50%;
      }
    }
  }
`;

export default StyledCloudsSection;
