import React from "react";
import PropTypes from "prop-types";
import Text from "../text/index";
import StyledInfoPanel from "./styled-info-panel";
import ImagesGroup from "./sub-components/images-group";
import ButtonsGroup from "./sub-components/buttons-group";

console.log(ImagesGroup, ButtonsGroup, StyledInfoPanel);
const InfoPanel = ({
  imgLeft,
  bgColor,
  children,
  lineHeight,
  fontSize,
  textColor,
  textAlign,
  amountButton,
  imgUrl,
  defaultImgUrl,
  ...rest
}) => {
  console.log("here");
  return (
    <StyledInfoPanel bgColor={bgColor} imgLeft={imgLeft} {...rest}>
      <div className="infoPanelText">
        <Text
          lineHeight={lineHeight || "160%"}
          fontSize={fontSize || "22px"}
          color={textColor}
          textAlign={textAlign || "center"}
        >
          {children}
        </Text>
        <ButtonsGroup amountButton={amountButton} />
      </div>
      <ImagesGroup imgUrl={imgUrl} defaultImgUrl={defaultImgUrl} />
    </StyledInfoPanel>
  );
};

InfoPanel.propTypes = {
  /** Position image*/
  imgLeft: PropTypes.bool,
  /** Background color*/
  bgColor: PropTypes.string,
  /** Array button*/
  amountButton: PropTypes.arrayOf(PropTypes.object),
  /** URL image*/
  imgUrl: PropTypes.string,
  /** On error loading image, use default image*/
  defaultImgUrl: PropTypes.string,
  /** Text line height*/
  lineHeight: PropTypes.string,
  /** Text font-size*/
  fontSize: PropTypes.string,
  /** Text color*/
  textColor: PropTypes.string,
  /** Text align*/
  textAlign: PropTypes.string,
};

export default InfoPanel;
