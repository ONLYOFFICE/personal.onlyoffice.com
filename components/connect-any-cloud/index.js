import React from "react";
import PropTypes from "prop-types";
import StyledConnectAnyCloud from "./styled-connect-any-clouds";
import Heading from "../../components/heading"
import IconButton from "../icon-button"
import Clouds from "./sub-components/cloud-item";

const ConnectAnyCloud = (props) => {
  return (
    <StyledConnectAnyCloud {...props}>
      <Heading
        as="h2"
        textAlign="center"
        fontSize="32px"
        lineHeight="133%">
          {props.textHeading}
      </Heading>
      <div>
      <ul className="personal-social-links">
            {Clouds.map((item, i) => (
              <li key={i}>
                <IconButton
                  iconName={item.src}
                  grayed={item.filter}
                  size={item.size}
                />
              </li>
            ))}
          </ul>
      </div>
    </StyledConnectAnyCloud>
  );
};

ConnectAnyCloud.propTypes = {};

ConnectAnyCloud.defaultProps = {};

export default ConnectAnyCloud;
