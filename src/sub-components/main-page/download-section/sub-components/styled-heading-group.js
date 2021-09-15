import styled from "styled-components";

const StyledHeadingGroup = styled.div`
  text-align: center;

  * {
    font-size: 22px;
    letter-spacing: -0.02em;
    line-height: 160%;
    width: 504px;
    margin: 0 auto;
    vertical-align: baseline;
    display: inline;
    margin-right: 4px;

    @media (max-width: 592px) {
      font-size: 14px;
    }
  }
`;

export default StyledHeadingGroup;
