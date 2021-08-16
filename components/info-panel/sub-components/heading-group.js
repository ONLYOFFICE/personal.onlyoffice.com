import React from "react";

//import StyledHeadingGroup from "./styled-heading-group";

const HeadingGroup = ({ className, ...rest }) => {
  return <div className={`info-panel-heading ${className}`} {...rest} />;
};

export default HeadingGroup;
