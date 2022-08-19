import React from "react";
import PropTypes from "prop-types";
import StyledCloudsSection from "./styled-clouds-section";
import Heading from "../../../../components/heading";
import IconButton from "../../../../components/icon-button";
import Clouds from "./sub-components/cloud-item";

const CloudsSection = ({ textHeading, ...rest }) => {
  return (
    <StyledCloudsSection
      background="white"
      padding="112px 0"
      tabletPadding="82px 0"
      mobileLPadding="48px 0 80px"
      {...rest}
    >
      <Heading
        textAlign="center"
        level={2}
        className="clouds-header"
      >
        {textHeading}
      </Heading>
      <div className="clouds">
        {Clouds.map((item, i) => (
          <IconButton
            key={i}
            className={`item-cloud ${item.className}`}
            iconName={item.src}
            grayed={item.filter}
            size={item.size}
          />
        ))}
      </div>
    </StyledCloudsSection>
  );
};

CloudsSection.propTypes = {
  textHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  Clouds: PropTypes.oneOfType([PropTypes.array]),
};

export default CloudsSection;
