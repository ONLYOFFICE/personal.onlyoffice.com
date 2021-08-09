import { styled } from "linaria/react";
import { device, size } from "../../../components/utils/devices";

const StyledBlockquote = styled.section`
  display: block;
  width: 100%;
  padding: 165px 0 112px;
  text-align: center;
  background-color: ${(props) => (props.bgColor || "transparent")};

  .auth-quote-container{
    max-width: 772px;
    margin: 0 auto;

    :before{
        content: '';
        background-image: ${(props) => props.bgImage 
            ? `url(${props.bgLogo}), url(${props.bgImage})` 
            : `url(${props.bgLogo}), url(icons/blockqute.svg)`};
        background-position: center 60%,top;
        background-repeat: no-repeat;
        display: block;
        height: 160px;
        margin: 0 auto -24px;
        width: 196px;
    }
  }

  p{
    font-style: italic;
    text-align: center;
  }

  a{
      margin-top: 32px;
  }


  @media ${device.laptop} {
    padding: 212px 0 110px;
  }

  @media ${device.tablet} {
    padding: 80px 0 80px;

    .auth-quote-container{
      max-width: 100%;
      padding: 0 40px;
    }

    p{
      font-size: 20px;
    }
  }

  @media ${device.mobileL} {
    padding: 48px 0 48px;

    .auth-quote-container:before{
      background-size: 100%,82px 66px;
      height: 92px;
      margin-bottom: 8px;
    }
    p{
      font-size: 18px;
    }
  }
`;

export default StyledBlockquote;
