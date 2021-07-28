import React from "react";
import PropTypes from "prop-types";
import Text from "../text/index";
import StyledInfoPanel from "./styled-info-panel";
import ImagePanel from "./sub-components/image-panel";
import ButtonPanel from "./sub-components/button-panel";

const InfoPanel = ({
  imgleft,
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
    <StyledInfoPanel bgColor={bgColor} imgleft={imgleft} {...rest}>
      <div className="infoPanelText">
        <Text 
          lineHeight={lineHeight || "28px"} 
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
  imgleft: PropTypes.bool,
  bgColor: PropTypes.string,
  amountButton: PropTypes.arrayOf(PropTypes.object),
  imgUrl: PropTypes.string,
  defaultImgUrl: PropTypes.string,
};

InfoPanel.propTypes = {
  imgleft: false,
};

export default InfoPanel;


