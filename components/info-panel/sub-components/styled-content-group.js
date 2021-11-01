import styled from "styled-components";

const StyledContentGroup = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: center;

  @media (max-width: 592px) {
    padding: 16px 15px 32px;
  }
`;

export default StyledContentGroup;
