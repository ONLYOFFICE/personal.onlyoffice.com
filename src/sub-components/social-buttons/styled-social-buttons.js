import styled from "styled-components";
import { isChrome, browserVersion } from "react-device-detect";

const StyledSocialButtons = styled.div`
  display: flex;
  gap: 26px;
  width: min-content;
  margin: auto;
  margin-bottom: 1px;

  max-height: 39px;

  .social-button {
    ${(props) => props.isLinuxDesktopEditor && " margin-right: 26px;"}
  }
`;

export default StyledSocialButtons;
