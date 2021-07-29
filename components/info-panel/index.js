import React from "react";
import PropTypes from "prop-types";
import Text from "../text/index";
import StyledInfoPanel from "./styled-info-panel";
import ImagePanel from "./sub-components/image-panel";
import ButtonPanel from "./sub-components/button-panel";

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
  
  return(
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
        <ButtonPanel amountButton={amountButton} />  
      </div>
      <ImagePanel imgUrl={imgUrl} defaultImgUrl={defaultImgUrl} />            
    </StyledInfoPanel>
  )} 

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

InfoPanel.propTypes = {
  amountButton: [],
};

export default InfoPanel;


