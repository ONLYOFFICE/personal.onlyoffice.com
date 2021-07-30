import React from "react";
import StyledConnectAnyCloud from "./styled-connect-any-clouds";
import Heading from "../../../components/heading"
import IconButton from "../../../components/icon-button"
import Clouds from "./sub-components/cloud-item";

const ConnectAnyCloud = (props) => {
  return (
    <StyledConnectAnyCloud {...props}>
      <Heading
        as="h2"
        textAlign="center"
        lineHeight="133%">
          {props.textHeading}
      </Heading>
      <div>
      <ul className="clouds">
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

export default ConnectAnyCloud;
