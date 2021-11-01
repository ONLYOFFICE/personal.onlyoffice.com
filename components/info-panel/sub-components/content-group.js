import React from "react";

import StyledContentGroup from "./styled-content-group";

const ContentGroup = (props) => {
  return (
    <StyledContentGroup {...props} className={`info-panel-content-group`} />
  );
};

export default ContentGroup;
