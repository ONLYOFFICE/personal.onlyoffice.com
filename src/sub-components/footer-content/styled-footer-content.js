import styled from "styled-components";
import { device } from "../../../components/utils/devices";

const StyledFooter = styled.div`
  background: ${(props) => (props.footerHomePage ? "#f9f9f9" : "transparent")};
  line-height: 160%;
  position: relative;
  padding: 0 0 40px;

  .personal-footer {
    margin: 0 auto;
    max-width: 1120px;

    .personal-social-links {
      margin: 0;
      padding: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;

      li {
        list-style-type: none;
        display: inline-block;
        width: 24px;
        height: 24px;
        margin: 0;
        padding-left: 16px;
        vertical-align: middle;
      }
    }

    .item-personal-footer {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding-top: 32px;
      align-items: baseline;

      .personal-footer-links {
        a {
          margin: 0 24px 2px 0;
        }
      }
    }
  }

  @media ${device.laptopM} {
    .personal-footer {
      max-width: 928px;
      .personal-social-links {
        li {
          padding-left: 16px;
          padding-right: 0px;
        }
      }
      .item-personal-footer {
        .personal-footer-links {
          a {
            margin: 0 25px 2px 0;
          }
        }
      }
    }
  }

  @media ${device.laptop} {
    .personal-footer {
      max-width: 689px;
      .personal-social-links {
        justify-content: center;
        li {
          padding-left: 8px;
          padding-right: 8px;
        }
      }
      .item-personal-footer {
        flex-direction: column;
        align-items: center;
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        .personal-footer-links {
          margin: 32px auto;
          .personal-footer-link {
            margin: 0 32px 0 0;
          }
          a {
            margin: 0;
          }
        }
      }
    }
  }

  @media (max-width: 572px) {
    .personal-footer {
      max-width: 90vh;
      .personal-social-links {
        justify-content: center;
        margin: 0 auto;
        max-width: 35vh;
        p {
          font-size: 13px !important;
        }
        li {
          padding: 12px;
        }
      }
      .item-personal-footer {
        flex-direction: column;
        align-items: center;
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        .personal-footer-links {
          margin: 24px auto;
          .personal-footer-link {
            margin: 0 24px 0 0;
          }
          a {
            margin: 0;
          }
        }
        p {
          text-align: center;
        }
      }
    }
  }
`;

export default StyledFooter;
