import React from "react";
import styled from "styled-components";

import Text from "../../../components/text";

const StyledDescription = styled(Text)`
  font-size: 16px;
  text-align: center;
  @media (max-width: 592px) {
    font-size: 13px;
  }
`;

const FormDescription = (props) => {
  const { label } = props;
  return <StyledDescription>{label}</StyledDescription>;
};

export default FormDescription;
