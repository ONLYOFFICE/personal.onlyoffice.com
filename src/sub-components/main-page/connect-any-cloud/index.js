import React from "react";
import PropTypes from "prop-types";
import StyledConnectAnyCloud from "./styled-connect-any-clouds";
import Heading from "../../../../components/heading"
import IconButton from "../../../../components/icon-button"
import Clouds from "./sub-components/cloud-item";
import Section from "../../../sub-components/home-section";

const ConnectAnyCloud = ({
textHeading,
...rest
}) => {
  return (
    <Section
      background="white"
      padding="112px 0"
      tabletPadding="82px 0"
      mobileLPadding="48px 0 80px"
      {...rest}
    >
      <StyledConnectAnyCloud>
        <Heading
          textAlign="center"
          padding="0 0 30px"
          level={2}
        >
          {textHeading}
        </Heading>
        <div>
          <ul className="clouds">
            {Clouds.map((item, i) => (
              <li key={i}>
                <IconButton
                  className={item.className}
                  iconName={item.src}
                  grayed={item.filter}
                  size={item.size}
                />
              </li>
            ))}
          </ul>
        </div>
      </StyledConnectAnyCloud>
    </Section>
  );
};

ConnectAnyCloud.propTypes = {
  /**   text content */
  textHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**   text content */
  Clouds: PropTypes.oneOfType([PropTypes.array]),
};

export default ConnectAnyCloud;