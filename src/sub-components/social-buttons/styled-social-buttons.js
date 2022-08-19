import styled from "styled-components";
import globalColors from "../../../components/utils/global-colors";

const StyledSocialButtons = styled.div`
  border: 1px solid ${globalColors.grayLight};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  gap: 26px;
  justify-content: center;
  margin: auto;
  margin-bottom: 1px;
  max-height: 78px;
  padding: 19px 27px;
  width: 100%;

  .social-button {
    ${(props) => props.isLinuxDesktopEditor && " margin-right: 26px;"}
  }

  @media (max-width: 592px) {
    border: none;
    padding: 11px 0;
  }
`;

export default StyledSocialButtons;
