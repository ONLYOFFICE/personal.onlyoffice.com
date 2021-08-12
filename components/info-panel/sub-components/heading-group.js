import React from "react";

import StyledHeadingGroup from "./styled-heading-group";

const HeadingGroup = ({ heading }) => {
  return (
    <StyledHeadingGroup className="info-panel-heading">
      {heading}
    </StyledHeadingGroup>
  );
};

export default HeadingGroup;
