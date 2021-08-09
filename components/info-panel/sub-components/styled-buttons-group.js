import styled from "styled-components";
import { device } from "../../utils/devices";

const StyledButtonsGroup = styled.div`
  display: flex;
  padding-top: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  a {
    padding: 4px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    padding-top: 12px;
    padding-bottom: 12px;
    a {
      margin: 0 auto;
    }
    button {
      width: calc(100% - 40px);
      min-width: 300px;
    }
  }

  @media ${device.mobileM} {
    button {
      width: 100%;
      min-width: 280px;
    }
  }

  @media ${device.mobileS} {
    button {
      width: 100%;
      min-width: 220px;
    }
  }
`;

export default StyledButtonsGroup;
