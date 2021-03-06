import React from "react";
import styled from "styled-components";

import Text from "../../../components/text";

const StyledDescription = styled(Text)`
  font-size: 16px;
  text-align: left;
  @media (max-width: 592px) {
    font-size: 13px;
  }
`;
const FormDescription = ({ label }) => {
  return <StyledDescription>{label}</StyledDescription>;
};

export default FormDescription;
