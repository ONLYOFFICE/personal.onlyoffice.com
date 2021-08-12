import styled from "styled-components";
import HomeSection from "../../home-section";

const StyledDownloadSection = styled(HomeSection)`
  .section-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
  @media (max-width: 592px) {
    padding: 0 20px;
  }
`;

export default StyledDownloadSection;
