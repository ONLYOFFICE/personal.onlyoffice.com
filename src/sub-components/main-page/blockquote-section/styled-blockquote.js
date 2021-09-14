import styled from "styled-components";
import HomeSection from "../../home-section";
import { device } from "../../../../components/utils/devices";

const StyledBlockquote = styled(HomeSection)`
  display: block;
  width: 100%;
  padding: 112px 0 112px;
  text-align: center;

  max-width: 772px;
  margin: 0 auto;
  background-color: white;

  :before {
    content: "";
    background-image: url(/site-assets/icons/softpedia.svg),
      url(/site-assets/icons/blockqute.svg);
    background-position: center 60%, top;
    background-repeat: no-repeat;
    display: block;
    height: 160px;
    margin: 0 auto -24px;
    width: 196px;

    @media (max-width: 592px) {
      background-size: 100%, 82px 66px;
      height: 92px;
      margin-bottom: 8px;
    }
  }

  .blockquote-description {
    text-align: center;
  }

  .blockquote-link {
    margin-top: 28px;
  }

  @media ${device.laptop} {
    padding: 80px 0 82px;

    .section-page {
      max-width: 100%;
    }

    .blockquote-description {
      font-size: 20px;
    }
  }

  @media (max-width: 592px) {
    padding: 47px 0 49px;

    .blockquote-description {
      font-size: 18px;
    }
  }

  @media ${device.mobileL} {
    background-size: 100%, 82px 66px;
    margin-bottom: 8px;
  }
`;

export default StyledBlockquote;
