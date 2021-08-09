import styled from "styled-components";
import { device } from "../../../components/utils/devices";

const StyledFooter = styled.div`
  background: ${(props) => (props.isHomePage ? "#f9f9f9" : "transparent")};
  line-height: 160%;
  position: relative;
  padding: 0 0 40px;

  .personal-footer {
    margin: 0 auto;
    max-width: 1120px;

    .personal-social-links {
      margin: 0;
      padding: 0;
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(${(props) => props.countSocialLink}, 24px);
      justify-content: right;
    }

    .item-personal-footer {
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding-top: 32px;
      align-items: baseline;

      .personal-footer-links {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 26px;
        .personal-footer-link {
          font-size: 14px;
        }
      }
    }
  }

  @media ${device.laptopM} {
    .personal-footer {
      max-width: 928px;
    }
  }

  @media ${device.laptop} {
    .personal-footer {
      max-width: 689px;
      .personal-social-links {
        justify-content: center;
      }
      .item-personal-footer {
        flex-direction: column;
        align-items: center;
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        .personal-footer-links {
          margin: 33px auto;
        }
      }
    }
  }

  @media (max-width: 592px) {
    padding-bottom: 34px;

    .personal-footer {
      max-width: 75vw;
      margin: auto;

      .personal-social-links {
        display: flex;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
      }

      .item-personal-footer {
        flex-direction: column;
        align-items: center;
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;

        .personal-footer-links {
          margin: 25px auto 23px auto;
          .personal-footer-link {
            font-size: 13px;
          }
        }

        .personal-footer-link,
        .personal-footer_rights {
          font-size: 13px;
          text-align: center;
          margin: 0 auto;
        }
      }
    }
  }
`;

export default StyledFooter;
