import styled from "styled-components";
import HomeSection from "../../home-section";
import { device } from "../../../../components/utils/devices";

const StyledBlockquote = styled(HomeSection)`
  display: block;
  width: 100%;
  padding: 165px 0 112px;
  text-align: center;

  .auth-quote-container {
    max-width: 772px;
    margin: 0 auto;

    :before {
      content: "";
      background-image: url(/icons/softpedia.svg), url(/icons/blockqute.svg);
      background-position: center 60%, top;
      background-repeat: no-repeat;
      display: block;
      height: 160px;
      margin: 0 auto -24px;
      width: 196px;
    }
  }

  p {
    font-style: italic;
    text-align: center;
  }

  a {
    margin-top: 32px;
  }

  @media ${device.laptop} {
    padding: 212px 0 110px;
  }

  @media ${device.tablet} {
    padding: 80px 0 80px;

    .auth-quote-container {
      max-width: 100%;
    }

    p {
      font-size: 20px;
    }
  }

  @media ${device.mobileL} {
    padding: 48px 0 48px;

    .auth-quote-container:before {
      background-size: 100%, 82px 66px;
      height: 92px;
      margin-bottom: 8px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export default StyledBlockquote;
